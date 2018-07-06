(function (global) {
    'use strict';

    var AppUtil = {};

    global.AppUtil = AppUtil;

    AppUtil.isValidEmail = function (value) {
        // TODO need improve code here
        return /^\S[\w.]+@\w+\.(com|ru|by)$/.test(value);
    }

    AppUtil.isTime = function (value) {
        // TODO need improve code here
        return /^\d\d:\d\d$/.test(value);
    };

    AppUtil.isTimeIn12HourClock = function (value) {
        var firstNamber = value.match(/\d/g),
            result;
        if (+firstNamber[0] === 0){
            result = /^0[0-9]:[0-5][0-9]\s(am|pm)$/.test(value);
        } else {
            if (+firstNamber[0] === 1 && +firstNamber[1] === 2) {
                result = /^12:00\s(am|pm)$/.test(value)
            } else {
                result = /^1[01]:[0-5][0-9]\s(am|pm)$/.test(value)
            }
        }
        // TODO need improve code here
        return result;
    };

    AppUtil.isValidNumber = function(value) {
        return /^\d*[,.]?\d*([eE][-+]\d+)?$/.test(value);
    };

    AppUtil.isValidJsFileName = function (value) {
        return /^[\w.-]+\.js$/.test(value);
    };

})(typeof module !== 'undefined' ? module.exports : window);
