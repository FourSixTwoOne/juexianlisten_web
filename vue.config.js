const { defineConfig } = require('@vue/cli-service')
module.exports = {
  plugins: [
    new HtmlWebpackPlugin({
      title: '绝弦音乐共享平台',
      template: './public/index.html'
    })
  ]
};