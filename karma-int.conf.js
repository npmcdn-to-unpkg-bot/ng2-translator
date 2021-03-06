module.exports = function(config) {
  return config.set({
    files: [
      {pattern: '../karma-test-shim.js', watched: false},
      '**/*.int.ts'
    ],
    basePath: 'src',
    preprocessors: {
      "**/*.ts": ['webpack'],
      "../karma-test-shim.js": ['webpack']
    },
    frameworks: ['mocha', 'chai-as-promised', 'chai-things', 'chai-sinon'],
    webpack: {
      resolve: {
        extensions: ['', '.js', '.ts']
      },
      module: {
        loaders: [{
          test: /\.ts$/,
          loader: "ts"
        }]
      }
    },
    reporters: ['progress'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: false,
    browsers: ['PhantomJS'],
    captureTimeout: 60000,
    singleRun: true
  });
};
