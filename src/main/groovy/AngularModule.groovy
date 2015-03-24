import org.grooscript.asts.GsNative

trait AngularModule {

	@GsNative getAngular(){
		/* return window.angular; */
	}

	@GsNative get_(){
		/* return window._; */
	}
}