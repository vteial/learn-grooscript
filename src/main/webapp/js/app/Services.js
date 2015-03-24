function Services() {
  var gSobject = gs.inherit(gs.baseClass,'Services');
  gSobject.clazz = { name: 'Services', simpleName: 'Services'};
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
    gs.mc(dependents,'leftShift', gs.list(["ngNotify"]));
    var services = gs.mc(gs.fs('angular', this),"module",["appServices", dependents]);
    gs.mc(services,"factory",["wydFocusService", function($rootScope, $timeout) {
      return function(name) {
        return gs.execCall($timeout, this, [function(it) {
          return gs.mc($rootScope,"$broadcast",["wydFocusOn", name]);
        }]);
      };
    }]);
    gs.mc(services,"factory",["generalHttpInterceptor", function($log) {
      return gs.map().add("request",function(config) {
        return config;
      }).add("requestError",function(rejection) {
        gs.mc($log,"error",[rejection]);
        return rejection;
      }).add("response",function(response) {
        return response;
      }).add("responseError",function(rejection) {
        gs.mc($log,"error",[rejection]);
        return rejection;
      });
    }]);
    return gs.mc(services,"factory",["wydNotifyService", function($log, ngNotify) {
      gs.mc(ngNotify,"config",[gs.map().add("theme","pastel").add("position","top").add("duration",3000).add("type","info").add("sticky",false)]);
      var service = gs.map().add("native",ngNotify);
      gs.sp(service,"addInfo",function(message, clear) {
        if (gs.bool(clear)) {
          gs.mc(ngNotify,"dismiss",[]);
        };
        return gs.mc(ngNotify,"set",[message, gs.map().add("type","info").add("duration",5000)]);
      });
      gs.sp(service,"addSuccess",function(message, clear) {
        if (gs.bool(clear)) {
          gs.mc(ngNotify,"dismiss",[]);
        };
        return gs.mc(ngNotify,"set",[message, gs.map().add("type","success").add("duration",4000)]);
      });
      gs.sp(service,"addWarning",function(message, clear) {
        if (gs.bool(clear)) {
          gs.mc(ngNotify,"dismiss",[]);
        };
        return gs.mc(ngNotify,"set",[message, gs.map().add("type","warn").add("duration",3000)]);
      });
      gs.sp(service,"addError",function(message, clear) {
        if (gs.bool(clear)) {
          gs.mc(ngNotify,"dismiss",[]);
        };
        return gs.mc(ngNotify,"set",[message, gs.map().add("sticky",true).add("type","error").add("duration",6000)]);
      });
      gs.sp(service,"remove",function(it) {
        return gs.mc(ngNotify,"dismiss",[]);
      });
      gs.sp(service,"removeAll",function(it) {
        return gs.mc(ngNotify,"dismiss",[]);
      });
      return service;
    }]);
  }
  if (arguments.length == 1) {gs.passMapToObject(arguments[0],gSobject);};
  
  return gSobject;
};
