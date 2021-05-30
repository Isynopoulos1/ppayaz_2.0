const express = require("express")
const bodyParser = require("body-parser")
const cookieParser = require("cookie-parser")
const http = require("http")
const path = require("path")

// Initialize express
const app = express()
const server = http.Server(app)

// Listen Server
const port = process.env.PORT || 5000
server.listen(port, () => console.log(`server running on ${port}`))
