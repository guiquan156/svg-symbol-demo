const path = require('path');

module.exports = {
  chainWebpack: config => {
    const svgRule = config.module.rule('svg');
    svgRule.uses.clear();
    svgRule
      .test(/\.svg$/)
      .use('svg-sprite-loader')
        .loader('svg-sprite-loader')
        .options({
          symbolId: filePath => path.basename(filePath, '.svg')
        });
  }
};