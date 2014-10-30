
class Presenter {
    
	String name
	
    def buttonClick() {
        if (name) {
            $('#salutes').append("<p>Hello Hello ${name}!</p>")
        }
    }
}