function command(commandType){
  switch(commandType)
  {
    case 'account':
      this.Handler = new accountCommandHandler();
    break;
  }
}

command.prototype.Handler = function(){
  return this.Handler;  
}

command.prototype.execute = function(variable) {
  this.Handler.handle(variable);
}