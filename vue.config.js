const path = require('path');

module.exports = {
  publicPath: '',
  chainWebpack: config => {
    const svgRule = config.module.rule('svg');
    svgRule.uses.clear();
    svgRule
      .test(/\.svg$/)
      .include
        .add([path.resolve('src/assets/svgs')])
        .end()
      .use('svg-sprite-loader')
        .loader('svg-sprite-loader')
        .options({
          symbolId: filePath => path.basename(filePath, '.svg')
        })
        .end()
      .use('svg-transform-loader')
        .loader('svg-transform-loader')
        .end()
      .use('svgo-loader')
        .loader('svgo-loader')
        .end()
  }
};