package main

import (
	"fmt"
	"os"
	"strings"
)

func main() {
	branch := os.Getenv("BRANCH_NAME")
	if branch == "" {
		panic("not found BRANCH_NAME env")
	}
	cfg := strings.Split(branch, "/")
	if len(cfg) > 2 {
		panic("BRANCH_NAME format is wrong, abort")
	}
	env := cfg[1]
	fmt.Print(env)
}
