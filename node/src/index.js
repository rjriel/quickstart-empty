import express from "express"
import cors from "cors"
import bodyParser from "body-parser"
import htmlFile from "./serve.js"

const {
  API_PRODUCT_TYPE
} = process.env

const app = express()

// ensure all request bodies are parsed to JSON
app.use(bodyParser.json())

// ensure CORS requests
app.use(cors())

// return HTML
app.get("/", htmlFile)

app.listen(5000, () => {
  // output environment information
  console.log("=".repeat(40), "ENVIRONMENT", "=".repeat(40))
  const environment = {
    API_PRODUCT_TYPE
  }
  console.log(environment)
  console.log("=".repeat(94))
  console.log("listening on port 5000")
})
