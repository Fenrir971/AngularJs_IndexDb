function userForm(scope){
	this.Id = scope.Id;
	this.FirstName = scope.firstname;
	this.LastName = scope.lastname;
	this.UserName = scope.username;
	this.Password = scope.password;
}

userForm.prototype.FirstName = function(){
	  return this.FirstName;
}

userForm.prototype.LastName = function () {
	return this.LastName;
}

userForm.prototype.UserName = function(){
	return this.UserName;
}

userForm.prototype.Password = function(){
	return this.Password;
}