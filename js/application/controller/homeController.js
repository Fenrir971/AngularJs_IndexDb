application.controller('home',function($scope){
 
$scope.capitals = [{'Name':'Paris','Country': 'France'},{'Name':'Berlin','Country': 'Germany'},{'Name':'Madrid','Country': 'Spain'}];

 $scope.submitAction = function(){
	  var user = new userForm(this);
	  console.log(user);
	  var c = new command('account');
	  c.execute(user);
  }
  
  $scope.listView = function () {
	var list = viewFactory.load('users');
 	return list;
  }

  $scope.deleteAction = function(){
  		var c = new command('account');
  		c.execute($scope);
  }

   $scope.updateAction = function(){
  		var c = new command('account');
  		c.execute($scope);
	}  
});