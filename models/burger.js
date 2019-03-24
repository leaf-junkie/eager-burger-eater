const orm = require('../config/orm');

// Create code to call ORM functions using burger specific input for ORM
const burger = {
    all: function(callback) {
        orm.selectAll('burgers', function(res) {
            callback(res);
        });
    },
    create: function(cols, vals, cb) {
        orm.insertOne('burgers', cols, vals, function(res) {
          cb(res);
        });
    },
    update: function(objColVals, condition, cb) {
        orm.updateOne('burgers', objColVals, condition, function(res) {
            cb(res);
        });
    }
    // delete: function(condition, cb) {
    //     orm.delete('burgers', condition, function(res) {
    //         cb(res);
    //     });
    // }
}

module.exports = burger;