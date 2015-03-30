function transaction(tablename,db){
  this.Transaction =  db.transaction(tablename, "readwrite");
  this.Table = tablename;
  
  /*Definition des evenements lors d'une transaction*/
  this.Transaction.oncomplete = function(event){
    console.log('Transaction Réussie')
  };
  
  this.Transaction.onerror = function(event){
    console.log('Transaction Echouée');
  };
  /*Fin de la définition*/
}

transaction.prototype.Table = function(){
  return this.Table;  
}

transaction.prototype.Transaction = function () {
  return this.Transaction;
}

transaction.prototype.read = function (data) {
  
}

transaction.prototype.list = function(){
    var cursor = this.Transaction.objectStore(this.Table).openCursor();
     var list = [];
     
    cursor.onsuccess = function(event){
      var cursor = event.target.result;
      if(cursor){
        list.push(new user(cursor.value.id,cursor.value.FirstName,cursor.value.LastName,cursor.value.UserName,cursor.value.Password));
        cursor.continue();
      }
    }
    
    return list;
}

transaction.prototype.add = function(data){
  this.Transaction.objectStore(this.Table).add(data);
}

transaction.prototype.delete = function (id) { 
  this.Transaction.objectStore(this.Table).delete(id);  
}

transaction.prototype.update = function (data) {
  this.Transaction.objectStore(this.Table).put(data);  
}