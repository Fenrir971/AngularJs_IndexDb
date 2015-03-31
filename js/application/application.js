(function(w){
	if(window.application == undefined){
    	window.application = angular.module("myApp",[])
    	window.application.context = new SharedWorker("js/core/contextDatabase.js");
    	window.application.sleep = function sleep(time){
    		var currentTime = new Date().getTime();

            while (currentTime + time >= new Date().getTime()) {
            	
            }
    	};
	}
	else{
  		console.log("existe déjà");
	}
})(window);

window.application.context.port.start();

window.application.context.port.onmessage =function(e){
	console.log(e);
};

window.application.context.port.postMessage([2,3]);

console.log('posted to worker');