var _db = [];

_db.push({
	username: 'root',
	password: '0000',
	email : '0000@email.com',
	first_name : 'Danial',
	last_name : 'alex',
	id : '1'
});

var usersCollection = {
	createUser : function(user){
		user.id = _db.length + 1;
		_db.push(user);
		return user;
	},

	getUser : function(id){
		for (var i = 0; i < _db.length; i++) {
			var user = _db[i];
			if(user.id == id)
				return user
		};
	},

	getUsers : function(){
		return _db;
	}
}


module.exports = usersCollection
