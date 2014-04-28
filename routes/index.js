
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Index' });
};

exports.login = function(req, res){
res.render('login', { title: '用户登陆'});
};
exports.doLogin = function(req, res){
var user={
username:'admin',
password:'admin'
}
if(req.body.username===user.username && req.body.password===user.password){
res.redirect('/home');
}
res.redirect('/login');
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