
/*
 * GET home page.
 */
var users = {};//存储在线用户

exports.index = function(req, res){
	if (req.cookies.user == null){
		res.redirect('/login')
	} else {
		res.render('home', { title: '聊天室' })
	}
};


exports.login = function(req, res){
res.render('login', { title: '用户登陆'});
};

exports.doLogin = function(req, res){
	if (users[req.body.name]){
		res.redirect('/login')
	} else {
		res.cookie("user",req.body.name,{maxAge: 1000*60*60*24*30});
		res.redirect('/');
	} 
};

exports.logout = function(req, res){
res.redirect('/');
};
exports.home = function(req, res){
	var user={
		username:'admin',
		password:'admin'
		}
	res.render('home', { title: 'Home',user: user});
};