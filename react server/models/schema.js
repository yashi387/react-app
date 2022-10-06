const mongoose = require("mongoose")

const schema = mongoose.Schema({
	name: String,
	complete: {
		type:Boolean,
		default:false
	}
})
module.exports = mongoose.model("Post", schema)