var elixir = require('laravel-elixir');

/*
 |--------------------------------------------------------------------------
 | Elixir Asset Management
 |--------------------------------------------------------------------------
 |
 | Elixir provides a clean, fluent API for defining some basic Gulp tasks
 | for your Laravel application. By default, we are compiling the Sass
 | file for our application, as well as publishing vendor resources.
 |
 */

elixir(function(mix) {
	mix.styles([
        '../bower/fontawesome/css/font-awesome.min.css',
		'bootstrap-dialog.min.css',
		'selectize.bootstrap3.css',
		'../js/DataTables/media/css/jquery.dataTables.min.css',
		'../js/DataTables/extensions/Responsive/css/dataTables.responsive.css',
		'../js/DataTables/extensions/Scroller/css/dataTables.scroller.min.css'
    ], 'public/css/vendor.css');
	mix.less([
		'../bower/bootstrap/less/bootstrap.less',
		'../bower/fontawesome/less/font-awesome.less'
	], 'public/css/vendor.less');
	mix.sass([
		'../bower/fontawesome/scss/font-awesome.scss',
		'../js/DataTables/extensions/Responsive/css/dataTables.responsive.scss'
	], 'public/css/vendor.scss');
	mix.scripts([
		'../bower/jquery/dist/jquery.min.js',
		'../bower/jquery-ui/jquery-ui.min.js',
		'../bower/bootstrap/dist/js/bootstrap.min.js',
		'bootstrap-dialog.min.js',
		'selectize.min.js',
		'DataTables/media/js/jquery.dataTables.min.js',
		'DataTables/extensions/Responsive/js/dataTables.responsive.min.js',
		'DataTables/extensions/Scroller/js/dataTables.scroller.min.js'
	], 'public/js/vendor.js');
	mix.copy('resources/assets/bower/fontawesome/fonts', 'public/fonts');
	mix.copy('resources/assets/bower/bootstrap/fonts', 'public/fonts');
	mix.copy('resources/assets/js/DataTables/media/images', 'public/images');
	mix.copy('resources/assets/js/DataTables/extensions/Scroller/images', 'public/images');
});
