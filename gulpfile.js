const { src, dest, watch, parallel } = require('gulp');

//css
const sass = require('gulp-sass')(require('sass'));
const plumber = require("gulp-plumber");

// imagenes
const cache = require('gulp-cache');
const imagemin = require('gulp-imagemin');
const webp = require('gulp-webp');
const avif = require('gulp-avif');

function css(done){
	// Identificar el archivo SASS
	// Compilarlo
	// Almacenar en el disco duro

	src('src/scss/**/*.scss')
		.pipe( plumber() )
		.pipe( sass() )
		.pipe( dest('build/css/') )


	done(); // Callback que avisa a gulp cuando llegamos al final
}

function minImage(done){
	const opciones = {
		optimizationLevel: 3
	}
	src('src/img/**/*.{png,jpg}')
		.pipe( cache( imagemin(opciones) ) )
		.pipe( dest('build/img') )

	done();
}

function versionAvif(done){

	const opciones = {
		quality: 50
	};

	src('src/img/**/*.{png,jpg}')
		.pipe( avif(opciones) )
		.pipe( dest('build/img') )

	done();
}

function versionWebp(done){

	const opciones = {
		quality: 50
	};

	src('src/img/**/*.{png,jpg}')
		.pipe( webp(opciones) )
		.pipe( dest('build/img') )

	done();
}

function javascript(done){

	src('src/js/**/*.js')
		.pipe( dest('build/js/') )

	done();
}

function dev(done){
	// El archivo que serà escuchado, la funcion que se va a ejecutar
	watch('src/scss/**/*.scss', css)
	watch('src/js/**/*.js', javascript)


	done();
}

exports.css = css;
exports.versionWebp = versionWebp;
exports.versionAvif = versionAvif;
exports.minImage = minImage;
exports.js = javascript;
exports.minAllImage = parallel( minImage, versionWebp, versionAvif );
exports.dev = dev;