class Application implements AngularModule {

	def init(){

		def dependents = ['ngRoute', 'ngSanitize']
		dependents << 'ngStorage'
		dependents << 'ngNotify'
		dependents << 'appFilters'
		dependents << 'appDirectives'
		dependents << 'appServices'
		dependents << 'appControllers'

		def app = angular.module('app', dependents)

		app.config { $httpProvider ->
			$httpProvider.interceptors.push('generalHttpInterceptor')
		}

		app.config { $routeProvider, $locationProvider ->

			$routeProvider.when('/', [
				redirectTo: '/index'
			]).when('/index', [
				templateUrl: 'partials/index.html',
				controller : 'indexController',
				reloadOnSearch : false
			]).when('/signIn', [
				templateUrl: 'partials/signIn.html',
				controller : 'signInController',
				reloadOnSearch : false
			]).otherwise({ redirectTo: '/index' })
		}

		app.run { $log, $rootScope, $location ->
			$log.info('Initialization started...')

			$log.info('Initialization finished...')
		}
	}
}