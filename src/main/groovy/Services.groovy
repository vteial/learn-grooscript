class Services implements AngularModule {

	def init() {

		def dependents = []
		dependents << 'ngNotify'
		def services = angular.module('appServices', dependents)

		services.factory('wydFocusService', { $rootScope, $timeout ->
			return { name ->
				return $timeout {
					return $rootScope.$broadcast('wydFocusOn', name);
				}
			}
		})

		services.factory('generalHttpInterceptor', { $log ->
			return [
				'request' : { config ->  return config },

				'requestError' : { rejection ->
					$log.error(rejection)
					return rejection
				},

				'response' : {response ->  return response },

				'responseError' : { rejection ->
					$log.error(rejection)
					return rejection
				}
			]
		})

		services.factory('wydNotifyService', { $log, ngNotify ->

			ngNotify.config([
				theme : 'pastel',
				position : 'top',
				duration : 3000,
				type : 'info',
				sticky : false
			]);

			def service = ['native' : ngNotify]

			service.addInfo = { message, clear ->
				if (clear) {
					ngNotify.dismiss()
				}
				ngNotify.set(message, [
					type : 'info',
					duration : 5000
				]);
			}

			service.addSuccess = {message, clear ->
				if (clear) {
					ngNotify.dismiss();
				}
				ngNotify.set(message, [
					type : 'success',
					duration : 4000
				]);
			}

			service.addWarning = {message, clear ->
				if (clear) {
					ngNotify.dismiss();
				}
				ngNotify.set(message, [
					type : 'warn',
					duration : 3000
				]);
			}

			service.addError = {message, clear ->
				if (clear) {
					ngNotify.dismiss();
				}
				ngNotify.set(message, [
					sticky : true,
					type : 'error',
					duration : 6000
				]);
			}

			service.remove = { ngNotify.dismiss(); }

			service.removeAll = { ngNotify.dismiss(); }

			return service
		})
	}
}