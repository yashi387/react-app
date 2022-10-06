const express = require("express")
const router = express.Router()
const {getTask , addTask} = require("../controller/controller")

router.get("/posts", getTask)
router.post("/posts",addTask)

module.exports = router
