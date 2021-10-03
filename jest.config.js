module.exports = {
  preset: '@vue/cli-plugin-unit-jest',
  transform: {
    '^.+\\.vue$': 'vue-jest',
    '^.+\\.js$': 'babel-jest'
  },
  transformIgnorePatterns: [
    "node_modules/(?!vue-spinner/src/RotateLoader.vue|fireworks-js)"
  ]
}
