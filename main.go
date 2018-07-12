package main

import (
	"github.com/gin-gonic/contrib/static"
	"github.com/gin-gonic/gin"
	"os"
)

func main() {

	router := gin.Default()

	// Serve the frontend
	router.Use(static.Serve("/", static.LocalFile("./client/dist/client/", true)))

	port := os.Getenv("PORT")
	if port == "" {
		port = "9000"
	}
	router.Run(":" + port)
}
