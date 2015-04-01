(function(w){
	if(window.application == undefined){
    	window.application = angular.module("myApp",[]);
    	var worker = new Worker("js/core/contextDatabase.js");
    	window.application.context = undefined;
    	
    	worker.onmessage = function(e){
    		var count = 0
    		while(database.Database === undefined){
    			count++;
    			if(count < 100){
    				continue;
    			}
    			else{
    				console.log('Le maximum de 100 tentative a été atteint');
    			}
    			break;
    		}
    		console.log(e.data)
    		window.application.context = e.data;
    	};
    	
    	worker.postMessage('ClientManager');
	}
	else{
  		console.log("existe déjà");
	}
})(window);
