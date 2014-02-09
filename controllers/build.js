exports.build = function(req, res) {
	var commit_info = req.body.payload;
	res.json(commit_info);
};
