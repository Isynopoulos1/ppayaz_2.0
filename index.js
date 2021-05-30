const express = require("express")
const bodyParser = require("body-parser")
const cookieParser = require("cookie-parser")
const http = require("http")
const path = require("path")

// Initialize express
const app = express()
const server = http.Server(app)

// Server static assets
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"))
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"))
  })
}

// Listen Server
const port = process.env.PORT || 5000
server.listen(port, () => console.log(`server running on ${port}`))
