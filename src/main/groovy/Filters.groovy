class Filters implements AngularModule {

	def init() {

		def dependents = []
		def filters = angular.module('appFilters', dependents)

		filters.filter('capitalizeFilter', {
			return { input ->
				input = _.capitalize(input)
				//input = input.capitalize()
				return input;
			}
		})
	}
}