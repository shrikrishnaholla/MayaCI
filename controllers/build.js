exports.build = function(req, res) {
	var commit_info = JSON.parse(req.body.payload);
	console.log(JSON.stringify(commit_info));
	res.json(commit_info);
};
