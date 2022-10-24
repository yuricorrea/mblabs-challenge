module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins:[
      [
           'module-resolver',
           {
             root: ['./src'],
             extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
             alias: {
               "@routes": "./src/routes",
               "@screens": "./src/screens",
               "@components": "./src/components",
               "@theme": "./src/theme",
               "@translate": "./src/i18n"
             }
           }
        ]
  ]
};
