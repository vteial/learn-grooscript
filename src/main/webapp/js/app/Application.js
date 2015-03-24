function Application() {
  var gSobject = gs.inherit(gs.baseClass,'Application');
  gSobject.clazz = { name: 'Application', simpleName: 'Application'};
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
    var dependents = gs.list(["ngRoute" , "ngSanitize"]);
    gs.mc(dependents,'leftShift', gs.list(["ngStorage"]));
    gs.mc(dependents,'leftShift', gs.list(["ngNotify"]));
    gs.mc(dependents,'leftShift', gs.list(["appFilters"]));
    gs.mc(dependents,'leftShift', gs.list(["appDirectives"]));
    gs.mc(dependents,'leftShift', gs.list(["appServices"]));
    gs.mc(dependents,'leftShift', gs.list(["appControllers"]));
    var app = gs.mc(gs.fs('angular', this),"module",["app", dependents]);
    gs.mc(app,"config",[function($httpProvider) {
      return gs.mc(gs.gp($httpProvider,"interceptors"),"push",["generalHttpInterceptor"]);
    }]);
    gs.mc(app,"config",[function($routeProvider, $locationProvider) {
      return gs.mc(gs.mc(gs.mc(gs.mc($routeProvider,"when",["/", gs.map().add("redirectTo","/index")]),"when",["/index", gs.map().add("templateUrl","partials/index.html").add("controller","indexController").add("reloadOnSearch",false)]),"when",["/signIn", gs.map().add("templateUrl","partials/signIn.html").add("controller","signInController").add("reloadOnSearch",false)]),"otherwise",[function(it) {
        return "/index";
      }]);
    }]);
    return gs.mc(app,"run",[function($log, $rootScope, $location) {
      gs.mc($log,"info",["Initialization started..."]);
      return gs.mc($log,"info",["Initialization finished..."]);
    }]);
  }
  if (arguments.length == 1) {gs.passMapToObject(arguments[0],gSobject);};
  
  return gSobject;
};
