var mongoose = require('mongoose'),
Login = mongoose.model('Logins');

exports.list_all_users = function(req, res) {
  Login.find({}, function(err, user) {
    console.log("I am Find All");
    if (err)
      res.send(err);
    res.json(user);
  });
};

exports.create_a_user = function(req, res) {
  var new_user = new Login(req.body);
  new_user.save(function(err, user) {
    if (err)
      res.send(err);
    res.json(user);
  });
};

exports.read_a_user = function(req, res) {
    Login.findByUser(req.params.user, function(err, user) {
    if (err)
      res.send(err);
    res.json(user);
  });
};

exports.update_a_pass = function(req, res) {
  Login.findOneAndUpdate({_id: req.params.user}, req.body, {new: true}, function(err, user) {
    if (err)
      res.send(err);
    res.json(user);
  });
};

exports.delete_a_user = function(req, res) {
  Login.remove({
    _id: req.params.user
  }, function(err, user) {
    if (err)
      res.send(err);
    res.json({ message: 'User successfully deleted' });
  });
};
  exports.auth_a_user = function(req, res) {
    console.log("I am Auth");
    var username = req.body.user,
            password = req.body.pass;
            console.log("param -" + username);
            console.log("param -" + password);
      Login.findOne(where = {user: username},function (err,user1) {
      if (err)
        res.send(err); 
      console.log(user1.user); 
      console.log(user1.pass); 
       if(user1.pass!=password)
      res.json({ message: 'Login Unsuccessfull' });
      else
      res.json({ message: 'Logged in successfully'});
    });
};
