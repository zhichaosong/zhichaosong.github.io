cordova.define("com.plugin.wukong.WukongPlugin", function(require, exports, module) { var exec = require('cordova/exec');

exports.coolMethod = function (arg0, success, error) {
    exec(success, error, 'WukongPlugin', 'coolMethod', [arg0]);
}
exports.initConfig = function (success, error) {
    exec(success, error, 'WukongPlugin', 'initConfig', []);
};
exports.smartConfig = function (arg0, arg1, success, error) {
    exec(success, error, 'WukongPlugin', 'smartConfig', [arg0, arg1]);
};
exports.addDev = function (arg0, success, error) {
    exec(success, error, 'WukongPlugin', 'addDev', [arg0]);
};
exports.cloudMatch = function (arg0, success, error) {
    exec(success, error, 'WukongPlugin', 'cloudMatch', [arg0]);
};
exports.changePower = function(arg0, success, error){
    exec(success, error, 'WukongPlugin', 'changePower', [arg0]);
}
exports.changeTemp = function (arg0, arg1, success, error) {
    exec(success, error, 'WukongPlugin', 'changeTemp', [arg0, arg1]);
};
exports.changeMode = function (arg0, success, error) {
    exec(success, error, 'WukongPlugin', 'changeMode', [arg0]);
};
exports.changeSpeed = function (arg0, success, error) {
    exec(success, error, 'WukongPlugin', 'changeSpeed', [arg0]);
};
exports.changeUpdown = function (arg0, success, error) {
    exec(success, error, 'WukongPlugin', 'changeUpdown', [arg0]);
};

});
