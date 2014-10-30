function Presenter() {
  var gSobject = gs.inherit(gs.baseClass,'Presenter');
  gSobject.clazz = { name: 'Presenter', simpleName: 'Presenter'};
  gSobject.clazz.superclass = { name: 'java.lang.Object', simpleName: 'Object'};
  gSobject.name = null;
  gSobject['buttonClick'] = function(it) {
    if (gs.bool(gSobject.name)) {
      return gs.mc(gs.mc(this,"$",["#salutes"], gSobject),"append",["<p>Hello Hello " + (gSobject.name) + "!</p>"]);
    };
  }
  if (arguments.length == 1) {gs.passMapToObject(arguments[0],gSobject);};
  
  return gSobject;
};
