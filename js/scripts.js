function Button(text) {
	this.text = text || 'hello';
}

Button.prototype = {
	create: function() {
		var self = this;
		this.$element = $('<button>');
		this.$element.text(this.text);

		this.$element.click(function() {
			alert(self.text);
		});
		$('body').append(this.$element);
	}

}

var btn1 = new Button('Hello!');
btn1.create();


// drugi button bez podania text wiec pobiera defaultowy text hello
var btn2 = new Button(); 
btn2.create();