window.application.controller("home",function($scope){
  
  $scope.submitAction = function(){
  		var c = new command('account');
    	c.execute(scopeFilter);
  }
  
  $scope.listView = function () {
 	return viewFactory.load('users');
  }

  $scope.deleteAction = function(){
  		var c = new command('account');
  		c.execute($scope);
  }

   $scope.updateAction = function(){
  		var c = new command('account');
  		c.execute($scope);
	}
   
   var scopeFilter = {
     'id' : $scope.id,
     'firstname' : $scope.firstname,
  	  'lastname' : $scope.lastname,
     'username' : $scope.username,
     'password' : $scope.password
   }
  
});

