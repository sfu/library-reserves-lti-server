var ejs = require('ejs');

module.exports = function(app, config) {
    var routes = require('./routes.js')(app, config);
    ejs.filters.pluralize = function(num, str) {
        return num === 1 ? str : str + 's';
    };

    ejs.filters.formatDate = function(date, format) {
        var moment = require('moment');
        if (!(date instanceof Date)) {
            date = new Date(date);
        }
        date = moment(date);
        return date.format(format);
    }

    app.post('/courseOutline', routes.index);
}