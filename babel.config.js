module.exports = function (api) {
  api.cache(true)

  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          alias: {
            src: './src',
            Components: './src/Components',
            Screens: './src/Screens',
            Redux: './src/Redux',
          },
        },
      ],
    ],
  }
}