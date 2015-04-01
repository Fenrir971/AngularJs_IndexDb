load = function(){
	importScripts('database.js','transaction.js');
}

onmessage = function(e) {
	  load();
	  var workerResult = new database(e.data);
	  postMessage(workerResult);
	}