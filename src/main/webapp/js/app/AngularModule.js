AngularModule = function() {};
AngularModule.gSaT = function(target) {
  target.getAngular = function(x0) { return AngularModule.getAngular(target, x0); };
  target.get_ = function(x0) { return AngularModule.get_(target, x0); };
};
AngularModule.$init$ = function($self) {
}
function AngularModule$static$init$($static$self){
  
};
AngularModule.getAngular = function($self) {
  return window.angular;
}
AngularModule.get_ = function($self) {
  return window._;
}
