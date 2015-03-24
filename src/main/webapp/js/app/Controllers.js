function Controllers() {
  var gSobject = gs.inherit(gs.baseClass,'Controllers');
  gSobject.clazz = { name: 'Controllers', simpleName: 'Controllers'};
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
    var ctlrs = gs.mc(gs.fs('angular', this),"module",["appControllers", gs.list(["appServices"])]);
    gs.mc(ctlrs,"controller",["rootController", function($rootScope, $scope, $log) {
      return gs.mc($log,"debug",["rootController..."]);
    }]);
    gs.mc(ctlrs,"controller",["indexController", function($rootScope, $scope, $log, wydNotifyService) {
      gs.sp($rootScope,"viewName","Index");
      gs.sp($scope,"info",function(it) {
        return gs.mc(wydNotifyService,"addInfo",["info message...", true]);
      });
      gs.sp($scope,"success",function(it) {
        return gs.mc(wydNotifyService,"addSuccess",["success message...", true]);
      });
      gs.sp($scope,"warning",function(it) {
        return gs.mc(wydNotifyService,"addWarning",["warning message...", true]);
      });
      gs.sp($scope,"error",function(it) {
        return gs.mc(wydNotifyService,"addError",["erro message...", true]);
      });
      return gs.mc($log,"debug",["indexController..."]);
    }]);
    return gs.mc(ctlrs,"controller",["signInController", function($rootScope, $scope, $log) {
      gs.sp($rootScope,"viewName","Sign In");
      gs.sp($scope,"message","");
      gs.sp($scope,"user",gs.map().add("userId","").add("password",""));
      gs.sp($scope,"signIn",function(it) {
        return gs.sp($scope,"message","Invalid UserId/Password...");
      });
      gs.sp(gs.gp($scope,"user"),"userId","vteial@watchyoursales");
      return gs.mc($log,"debug",["signInController..."]);
    }]);
  }
  if (arguments.length == 1) {gs.passMapToObject(arguments[0],gSobject);};
  
  return gSobject;
};
