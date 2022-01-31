/* 
// Craco overrides API
// Detailes here: https://github.com/gsoft-inc/craco/blob/master/packages/craco/README.md#configuration

// available features:
const { 
  getLoader, getLoaders, removeLoaders, addBeforeLoader, addBeforeLoaders, addAfterLoader, addAfterLoaders, loaderByName, 
  getPlugin, pluginByName, addPlugins, removePlugins, 
  when, whenDev, whenProd, whenTest, 
  throwUnexpectedConfigError, gitHubIssueUrl, 
  ESLINT_MODES, POSTCSS_MODES,
  createJestConfig, createWebpackDevConfig, createWebpackProdConfig, createDevServerConfigProviderProxy
} = require("@craco/craco");
*/
const { whenDev, whenProd, whenTest } = require("@craco/craco");

module.exports = function({env}) {
  whenDev(() => console.log('Config overrides: Development'))
  whenProd(() => console.log('Config overrides: Production'))
  whenTest(() => console.log('Config overrides: Testing'))
  return {}
}