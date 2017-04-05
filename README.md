react-boilerplate
=====================

My React Boilerplate with Webpack.

Features:   
 - Webpack 2.3
 - React with Babel Loader
 - React Hot Module Replacement v3.0
 - Sass Loader
 - File Loader
 - Image Loader with optimization
 - ESLint

Based on [gaearon/react-hot-boilerplate](https://github.com/gaearon/react-hot-boilerplate)

Based on the guide available at https://webpack.js.org/guides/hmr-react/

## TODO
 - Jest tests
 - Jest Enzyme
 - Autoprefixer
 
### Usage

```
npm install
npm start
open http://localhost:3000
```

Now edit `src/App.js`.  
Your changes will appear without reloading the browser like in [this video](http://vimeo.com/100010922).

### Linting

This boilerplate project includes React-friendly ESLint configuration.

```
npm run lint
```

### Building

A basic production script is included that builds your app to a `dist` folder

```
npm run build
```

### Using `0.0.0.0` as Host

You may want to change the host in `webpack.config.js` from `localhost` to `0.0.0.0` to allow access from same WiFi network. This is not enabled by default because it is reported to cause problems on Windows. This may also be useful if you're using a VM.
