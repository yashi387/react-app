const Task = require("../models/schema")

module.exports.getTask=async(request , response) => {
    
    try{
        const tasks = await Task.find({});
        response.json(tasks);
    }catch (error){
        response.status(404).json({message: error.message});
    }

}
module.exports.addTask=async (req, res) => {
	const post = new Task({
		name: req.body.name
	
	})
	
    await post.save()
	res.json(post)
}