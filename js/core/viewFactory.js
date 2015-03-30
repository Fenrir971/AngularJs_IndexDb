function viewFactory(){
  
}

viewFactory.load = function(store){
  var t = application.context.Transaction();
  return t.list();
}