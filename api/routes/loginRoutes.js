  module.exports = function(app) {
    var login = require('../controllers/loginController');
  
    // Login Routes
    app.route('/login')
       .get(login.list_all_users)
       .post(login.auth_a_user);
  
    newFunction(app)
      .get(login.read_a_user)
      .put(login.update_a_pass)
      .delete(login.delete_a_user);

    app.route('/create')
      .post(login.create_a_user);

  };

  function newFunction(app) {
    return app.route('/login/:user');
  }
  
  