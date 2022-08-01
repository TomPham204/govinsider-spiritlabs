pipeline {
    agent none
    environment {
        project_name="govinsider-web"
        repo_https_url='https://bitbucket.org/minh-spiritlabs/govinsider-web'
        master_docker_server = 'unix:///var/run/docker.sock'
        baseciimage='public.ecr.aws/g3k3o5v3/baseforci:latest'
        //spiritlabs account
        account = '336939151867.dkr.ecr.ap-southeast-1.amazonaws.com'
        registry_url = 'https://336939151867.dkr.ecr.ap-southeast-1.amazonaws.com'
        registry_credential = 'ecr:ap-southeast-1:ecr:ap-southeast-1:spiritlabs'
        // prod account
        registry_prod_url = ''
        registry_prod_credential = ''

    }
    stages {
        stage("prepare"){
            steps {
                node("master"){
                    checkout scm
                    script {
                        app = sh(script: 'go run scripts/get_project_name.go', returnStdout: true).trim()
                        project_env = sh(script: 'go run scripts/get_project_env.go', returnStdout: true).trim()
                        project_env_file= project_name+"-env-"+app +"-"+project_env 
                        env.app = app
                        env.project_env = project_env
                        env.project_env_file  = project_env_file
                    }
                }
            }
        }
        stage("build"){
            when {
                anyOf {
                    environment name: 'project_env', value: 'dev'
                    environment name: 'project_env', value: 'staging'
                    environment name: 'project_env', value: 'production'
                }
                anyOf {
                    environment name: 'app', value: 'api'
                    environment name: 'app', value: 'landing-remix'
                    environment name: 'app', value: 'backoffice'
                }
            }
            steps {
                node("master"){
                    withCredentials([file(credentialsId: env.project_env_file, variable: 'ENV_FILE')]) {
                        checkout scm
                        script {
                            env_location = "apps/${env.app}/.env"
                            // remove existed env and copy new env to build context
                            sh "rm -f $env_location && cp $ENV_FILE $env_location"
                            app_dir = "apps/${env.app}"
                            docker.withServer(master_docker_server) {
                                docker.withRegistry(registry_url, registry_credential) {
                                    docker.build("${project_name}/${env.app}:${env.project_env}","--build-arg app=${env.app} .").push()
                                }
                                if (env.project_env == "production"){
                                    docker.withRegistry(registry_prod_url, registry_prod_credential) {
                                        docker.build("${project_name}/${env.app}:${env.project_env}","--build-arg app=${env.app} .").push()
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }

        stage("deploy"){
            parallel {
                stage("dev"){
                    when {
                        environment name: 'project_env', value: 'dev'
                    }
                    steps{
                        node("master"){
                            script {
                                def remote = [
                                    "name": "home.spiritlabs.co",
                                    "host": "home.spiritlabs.co",
                                    "port":23,
                                    "sudo":false
                                    ]
                                remote.allowAnyHosts = true
                                withCredentials([sshUserPrivateKey(credentialsId:'jenkins-master-ssh-credential	' , keyFileVariable: 'identity', passphraseVariable: '', usernameVariable: 'userName')]) {
                                    remote.user = userName
                                    remote.identityFile = identity
                                    sh "ssh -o \"StrictHostKeyChecking no\" -i $identity dong@home.spiritlabs.co -p 23 \"aws ecr get-login-password --region ap-southeast-1 | docker login --username AWS --password-stdin ${account} && cd /home/dong/code/govinsider-web-data && docker-compose pull &&  docker-compose up -d --build --force-recreate ${env.app}\""
                                }
                            }

                        }
                    }
                }
                stage("staging"){
                    when {
                        environment name: 'project_env', value: 'staging'
                    }
                    steps{
                        node("master"){
                            script {
                                def remote = [
                                        "name": "",
                                        "host": "",
                                        "port":22,
                                        "sudo":false
                                ]
                                remote.allowAnyHosts = true
                                withCredentials([sshUserPrivateKey(credentialsId: 'kitchko-staging-vm-credential', keyFileVariable: 'identity', passphraseVariable: '', usernameVariable: 'userName')]) {
                                        remote.user = userName
                                        remote.identityFile = identity
                                        sshCommand remote: remote, command: ""
                                }

                            }

                        }
                    }
                }
                stage("production"){
                    when {
                        environment name: 'project_env', value: 'production'
                    }
                    steps{
                        node("kitchko"){
                            script {
                                sh "echo \"deploying => ${env.app}\""
                                def remote = [
                                    "name": "",
                                    "host": "",
                                    "port":22,
                                    "sudo":false
                                    ]
                                remote.allowAnyHosts = true
                                withCredentials([sshUserPrivateKey(credentialsId:'kitchko-prod-jump' , keyFileVariable: 'identity', passphraseVariable: '', usernameVariable: 'userName')]) {
                                    remote.user = userName
                                    remote.identityFile = identity
                                    sshCommand remote: remote, command: "" 
                                }
                            }
                        }
                    }
                }
            }
        }
    }
    post {
        always {
            node('master'){
                script {
                    def color="danger"
                    if (currentBuild.result=="SUCCESS") {
                        color = "good"
                    }
                    slackSend   channel: "#dev",
                                color: color,
                                message: """
@here
Job name: `${env.JOB_NAME}`
Build status: `${currentBuild.result}`
Build details: <${env.BUILD_URL}/display/redirect|See in web console>
"""
                }
            }
        }
    }

} 
