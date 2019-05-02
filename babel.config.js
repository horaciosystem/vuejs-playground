module.exports = {
  presets: ['@vue/app', ['@babel/env', { modules: false }]],
  env: {
    test: {
      presets: [['@babel/env', { targets: { node: 'current' } }]]
    }
  },
  plugins: ['@babel/plugin-transform-runtime']
}
