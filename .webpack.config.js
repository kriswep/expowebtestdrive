const createExpoWebpackConfig = require('@expo/webpack-config');
// hack for webpack webbuild error, see https://github.com/expo/expo/issues/4545#issuecomment-504742710
module.exports = (env, argv) => {
  const config = createExpoWebpackConfig(env, argv);
  return config.then(c => {
    c.plugins = c.plugins.filter(x => x.constructor.name !== 'WebpackDeepScopeAnalysisPlugin');
    return c;
  });
};