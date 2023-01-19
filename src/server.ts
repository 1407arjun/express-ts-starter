/// <reference path="../global.d.ts" />

import express from "express"

const app = express()
const PORT = process.env.PORT || 3000

app.use(express.urlencoded({ extended: true }))

app.listen(PORT)
