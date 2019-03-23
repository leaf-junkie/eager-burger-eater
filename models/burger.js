const orm = require('../config/orm');

// Create code to call ORM functions using burger specific input for ORM
const burger = {
    all: function(callback) {
        orm.all('burgers', function(res) {
            callback(res);
        });
    },
    create: function(cols, vals, cb) {
        orm.create('burgers', cols, vals, function(res) {
          cb(res);
        });
    },
    update: function(objColVals, condition, cb) {
        orm.update('burgers', objColVals, condition, function(res) {
            cb(res);
        });
    },
    delete: function(condition, cb) {
        orm.delete('burgers', condition, function(res) {
            cb(res);
        });
    }
}

module.exports = burger;