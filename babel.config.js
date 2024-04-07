module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    'optional-require', // Opt out of using modules
    [
      'module-resolver',
      {
        root: ['.'],
        alias: {
          '@src': './src',
          '@assets': './assets',
          '@api': './src/api',
          '@components': './src/components',
          '@hooks': './src/hooks',
          '@models': './src/models',
          '@navigation': './src/navigation',
          '@screens': './src/screens',
          '@store': './src/store',
          '@theme': './src/theme',
          '@utils': './src/utils',
        },
      },
    ],
  ],
  env: {
    production: {
      plugins: ['react-native-paper/babel'], // Only bundle used modules
    },
  },
};
