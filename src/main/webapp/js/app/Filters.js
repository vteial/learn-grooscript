function Filters() {
  var gSobject = gs.inherit(gs.baseClass,'Filters');
  gSobject.clazz = { name: 'Filters', simpleName: 'Filters'};
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
    var filters = gs.mc(gs.fs('angular', this),"module",["appFilters", dependents]);
    gs.mc(filters,"filter",["capitalizeFilter", function(it) {
      return function(input) {
        input = gs.mc(gs.fs('_', this),"capitalize",[input]);
        return input;
      };
    }]);
  }
  if (arguments.length == 1) {gs.passMapToObject(arguments[0],gSobject);};
  
  return gSobject;
};
