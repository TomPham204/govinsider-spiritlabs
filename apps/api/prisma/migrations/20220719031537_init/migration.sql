-- CreateTable
CREATE TABLE "Category" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR NOT NULL,
    "slug" VARCHAR NOT NULL,

    CONSTRAINT "PK_9c4e4a89e3674fc9f382d733f03" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Media" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR NOT NULL,
    "slug" VARCHAR NOT NULL,
    "postId" INTEGER NOT NULL,
    "url" VARCHAR NOT NULL,
    "mimeType" VARCHAR NOT NULL,

    CONSTRAINT "PK_f4e0fcac36e050de337b670d8bd" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Post" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR NOT NULL,
    "slug" VARCHAR NOT NULL,
    "content" VARCHAR NOT NULL,
    "status" VARCHAR NOT NULL DEFAULT 'draft',
    "type" VARCHAR NOT NULL DEFAULT 'post',
    "createdAt" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "userId" INTEGER DEFAULT 0,

    CONSTRAINT "PK_be5fda3aac270b134ff9c21cdee" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PostMeta" (
    "id" SERIAL NOT NULL,
    "postId" INTEGER NOT NULL,
    "categoryId" INTEGER NOT NULL,

    CONSTRAINT "PK_44de5a6fce24e7e35d488605f84" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "email" VARCHAR NOT NULL,
    "password" VARCHAR,
    "roles" TEXT[] DEFAULT ARRAY['user']::TEXT[],
    "refreshToken" VARCHAR,
    "createdAt" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "activationKey" VARCHAR,
    "firstName" VARCHAR NOT NULL,
    "lastName" VARCHAR NOT NULL DEFAULT '',

    CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "IDX_cd1bddce36edc3e766798eab37" ON "Post"("slug");
