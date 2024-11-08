const mix = require('laravel-mix');

// Specify ESBuild loader for JSX files
mix.js('resources/js/app.jsx', 'public/js')
   .react()
   .options({
       esbuild: {
           loader: { '.js': 'jsx' }
       }
   })
   .sass('resources/sass/app.scss', 'public/css');