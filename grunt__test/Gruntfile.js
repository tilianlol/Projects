module.exports = function(grunt){

	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-autoprefixer');

	grunt.initConfig({
	  less: {
	    style: {
	      files: {
	        "css/style.css": "less/style.less" // destination file and source file
	      }
	    }
	  },
	  autoprefixer: {
	  	options: {
	  		browsers: ["last 2 version", "ie 10"]
	  	},
	  	style: {
	  		src: "css/style.css"
	  	}
	  }
	});
};