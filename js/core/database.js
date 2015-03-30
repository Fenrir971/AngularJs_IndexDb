function database(){
 this.Open(this.Name)  
}

function database(name){
  this.Name = name;
  this.Open(this.Name);
}

database.prototype.Name = function(){
  return this.Name;
}

database.Database = undefined;

database.prototype.Transaction = function(){

if(database.Database == undefined)
	this.Open(this.Name);

  return new transaction('Users',database.Database);
}

database.prototype.Open = function(name){
  var request = indexedDB.open(name);
  
  request.onerror = function(event){
    console.log('Error');
  };
  
  request.onsuccess = function(event){
     database.Database = request.result;
     console.log('Success');
  };
  
  request.onupgradeneeded = function (event) {
    var store = event.currentTarget.result.createObjectStore(
        "Users", { keyPath: 'id', autoIncrement: true });
      
    console.log('Update');
  };
  
}