(function(){
	if(window.application == undefined){
    	window.application = angular.module("myApp",[])
    	window.application.context = new database('ClientManager');
	}
	else{
  		console.log("existe déjà");
	}
})