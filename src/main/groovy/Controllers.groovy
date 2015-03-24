class Controllers implements AngularModule {

	def init() {

		def ctlrs = angular.module('appControllers', ['appServices'])

		ctlrs.controller('rootController', {$rootScope, $scope, $log ->
			$log.debug('rootController...')
		})

		ctlrs.controller('indexController', {$rootScope, $scope, $log, wydNotifyService ->
			$rootScope.viewName = 'Index'

			$scope.info = {
				wydNotifyService.addInfo('info message...', true)
			};

			$scope.success =  {
				wydNotifyService.addSuccess('success message...', true)
			};

			$scope.warning =  {
				wydNotifyService.addWarning('warning message...', true)
			};

			$scope.error =  {
				wydNotifyService.addError('erro message...', true)
			};

			$log.debug('indexController...')
		})

		ctlrs.controller('signInController', {$rootScope, $scope, $log ->
			$rootScope.viewName = 'Sign In'

			$scope.message = '';

			$scope.user = [
				userId : '',
				password : ''
			]

			$scope.signIn = { $scope.message = 'Invalid UserId/Password...'; }

			$scope.user.userId = 'vteial@watchyoursales';

			$log.debug('signInController...')
		})
	}
}