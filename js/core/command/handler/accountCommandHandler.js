function accountCommandHandler(){
}

accountCommandHandler.prototype.handle = function(variable){
  var t = window.application.context.Transaction();
  if(variable.id===0 || variable.id === undefined){
    t.add(variable);
  }
  else {
    t.update(variable);
  }
}