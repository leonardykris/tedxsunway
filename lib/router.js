Router.configure({
	layoutTemplate: 'appBody',
});

Router.map(function() {
	this.route('landing', {
		path: '/'
	});
});