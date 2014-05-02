
/*
 * GET home page.
 */


exports.index = function(req,res){
			res.render('index', { title: '聊天室' });
};




exports.logout = function(req, res){
res.redirect('/');
};
