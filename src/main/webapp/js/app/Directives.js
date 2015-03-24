function Directives() {
  var gSobject = gs.inherit(gs.baseClass,'Directives');
  gSobject.clazz = { name: 'Directives', simpleName: 'Directives'};
  gSobject.clazz.superclass = { name: 'java.lang.Object', simpleName: 'Object'};
  gSobject.clazz.interfaces = [{ name: 'AngularModule', simpleName: 'AngularModule'}];
  if (AngularModule['setProperty']) {
    gSobject.setProperty = function(x1) { return AngularModule.setProperty(gSobject,x1); }
  }
  if (AngularModule['getProperty']) {
    gSobject.getProperty = function() { return AngularModule.getProperty(gSobject); }
  }
  gSobject.getAngular = function() { return AngularModule.getAngular(gSobject); }
  AngularModule.$init$(gSobject);
  gSobject['init'] = function(it) {
    var dependents = gs.list([]);
    var directives = gs.mc(gs.fs('angular', this),"module",["appDirectives", dependents]);
    return gs.mc(directives,"directive",["wydFocusOn", function(it) {
      return function(scope, elem, attr) {
        return gs.mc(scope,"$on",["wydFocusOn", function(e, name) {
          if (gs.equals(name, gs.gp(attr,"wydFocusOn"))) {
            return gs.mc(elem[0],"focus",[]);
          };
        }]);
      };
    }]);
  }
  if (arguments.length == 1) {gs.passMapToObject(arguments[0],gSobject);};
  
  return gSobject;
};
