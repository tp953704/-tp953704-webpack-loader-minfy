const Minimize = require('minimize');
const loaderUtils = require('loader-utils');
module.exports = function(source) {
    console.log(source)
    console.log('123')
    // 非同步
    var callback = this.async();
    if (this.cacheable) {
        this.cacheable();
    }
    var opts = loaderUtils.getOptions(this) || {};
    
    var minimize = new Minimize(opts);
    minimize.parse(source, callback);
};