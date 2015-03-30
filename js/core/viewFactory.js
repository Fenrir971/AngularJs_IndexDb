function viewFactory(){
  
}

viewFactory.load = function(store){
  var t = context.Transaction();
  return t.list();
}