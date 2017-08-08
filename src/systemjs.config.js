/**
 * System configuration for Angular 2 samples
 * Adjust as necessary for your application needs.
 */
(function (global) {
  System.config({
    paths: {
      // paths serve as alias
      'npm:': 'node_modules/'
    },
    // map tells the System loader where to look for things
    map: {
      // our app is within the app folder
      app: 'app',

      // squeeze box
      // squeezebox: 'https://raw.githubusercontent.com/asotog/squeezebox/master/',

      // angular bundles
      '@angular/core': 'npm:@angular/core/bundles/core.umd.js',
      '@angular/common': 'npm:@angular/common/bundles/common.umd.js',
      '@angular/compiler': 'npm:@angular/compiler/bundles/compiler.umd.js',
      '@angular/platform-browser': 'npm:@angular/platform-browser/bundles/platform-browser.umd.js',
      '@angular/platform-browser-dynamic': 'npm:@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js',
      '@angular/http': 'npm:@angular/http/bundles/http.umd.js',
      '@angular/router': 'npm:@angular/router/bundles/router.umd.js',
      '@angular/forms': 'npm:@angular/forms/bundles/forms.umd.js',
      '@angular/material': 'npm:@angular/material/bundles/material.umd.js',
      '@angular/animations': 'npm:@angular/animations/bundles/animations.umd.js',
      '@angular/animations/browser': 'https://unpkg.com/@angular/animations/bundles/animations-browser.umd.js',
      '@angular/platform-browser/animations': 'https://unpkg.com/@angular/platform-browser/bundles/platform-browser-animations.umd.js',

      // other libraries
      'rxjs': 'npm:rxjs',
      'angular-in-memory-web-api': 'npm:angular-in-memory-web-api/bundles/in-memory-web-api.umd.js',
      'hammerjs': 'npm:hammerjs/hammer.js',
      // "squeezebox": "npm:squeezebox",
      'ngx-accordion': 'npm:ngx-accordion',
      'bootstrap': 'npm:bootstrap/dist/js/bootstrap.js',
      'jquery': 'npm:jquery/dist/jquery.js',
      'd3': 'npm:d3/d3.js',
      // 'd3': 'npm:d3/build/d3.js',
      // 'd3-selection': 'npm:d3-selection/build/d3-selection.js',
      // 'd3-scale': 'npm:d3-scale/build/d3-scale.js',
      // 'd3-shape': 'npm:d3-shape/build/d3-shape.js',
      // 'd3-array': 'npm:d3-array/build/d3-array.js',
      // 'd3-collection': 'npm:d3-collection/build/d3-collection.js',
      // 'd3-interpolate': 'npm:d3-interpolate/build/d3-interpolate.js',
      // 'd3-format': 'npm:d3-format/build/d3-format.js',
      // 'd3-path': 'npm:d3-path/build/d3-path.js',
      // 'd3-time-format': 'npm:d3-time-format/build/d3-time-format.js',
      // 'd3-color': 'npm:d3-color/build/d3-color.js',
      // 'd3-time': 'npm:d3-time/build/d3-time.js',
      'nvd3':'npm:nvd3/build/nv.d3.js',
      'ng2-nvd3': 'npm:ng2-nvd3/build/ng2-nvd3.component.js',

      'angular-material-icons': 'npm:angular-material-icons/angular-material-icons.js',
      'angular2-fontawesome': 'npm:angular2-fontawesome/angular2-fontawesome.js',

    },
    // packages tells the System loader how to load when no filename and/or no extension
    packages: {
      app: {
        defaultExtension: 'js'
      },
      rxjs: {
        defaultExtension: 'js'
      },
      'ng2-nvd3': {
        'build': 'index.js',
        defaultExtension: "js"
      },
      "ngx-accordion": { "main": "index.js", "defaultExtension": "js" },
      squeezebox: {
        main: './index.ts',
        defaultExtension: 'ts'
      }
    }
  });
})(this);