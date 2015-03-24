class Directives implements AngularModule {

	def init() {

		def dependents = []
		def directives = angular.module('appDirectives', dependents)

		directives.directive('wydFocusOn', {
			return { scope, elem, attr ->

				return scope.$on('wydFocusOn', { e, name ->
					if (name == attr.wydFocusOn) {
						return elem[0].focus();
					}
				})
			}
		})
	}
}