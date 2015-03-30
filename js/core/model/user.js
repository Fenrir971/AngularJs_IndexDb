function user(Id,Firstname,Lastname,Username,Password){
  this.Id = Id;
  this.Firstname = Firstname;
  this.Lastname = Lastname;
  this.Username = Username;
  this.Password = Password
}

user.prototype.Id = function(){
  return this.Id;  
}

user.prototype.Firstname = function () {
  return this.Firstname;
}

user.prototype.Lastname = function () {
  return this.Lastname;
}

user.prototype.Username = function () {
  return this.Username;
}

user.prototype.Password = function () {
  return this.Password;
}