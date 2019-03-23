// Import (require) connection.js into orm.js
const connection = require('../config/connection.js');

// Helper function for SQL syntax
function printQuestionMarks(num) {
    const arr = [];
    for (let i = 0; i < num; i++) {
        arr.push('?');
    }
    return arr.toString();
}

// Helper function to convert object key/value pairs to SQL syntax
function objToSql(ob) {
    const arr = [];
  
    // loop through the keys and push the key/value as a string int arr
    for (let key in ob) {
      let value = ob[key];
      // check to skip hidden properties
      if (Object.hasOwnProperty.call(ob, key)) {
        // if string with spaces, add quotations (Lana Del Grey => 'Lana Del Grey')
        if (typeof value === 'string' && value.indexOf(' ') >= 0) {
          value = "'" + value + "'";
        }
        arr.push(key + '=' + value);
      }
    }
  
    // translate array of strings to a single comma-separated string
    return arr.toString();
}

// In the orm.js file, create the methods that will execute 
// the necessary MySQL commands in the controllers. These are 
// the methods you will need to use in order to retrieve and 
// store data in your database.
const orm = {
    // selectAll()
    selectAll: function(tableInput, callback) {
        const queryString = 'SELECT * FROM ' + tableInput + ';';
        connection.query(queryString, function(err, result) {
            if (err) {
                throw err;
            }
            callback(result);
        });
    },
    // insertOne()
    insertOne: function(table, cols, vals, callback) {
        let queryString = 'INSERT INTO ' + table;
    
        queryString += ' (';
        queryString += cols.toString();
        queryString += ') ';
        queryString += 'VALUES (';
        queryString += printQuestionMarks(vals.length);
        queryString += ') ';

        console.log(queryString);
        connection.query(queryString, vals, function(err, result) {
            if (err) {
                throw err;
            }
            callback(result);
        });
    },
    // updateOne()
    updateOne: function(table, objColVals, condition, callback) {
        let queryString = 'UPDATE ' + table;

        queryString += ' SET ';
        queryString += objToS
    }
}

// Export the ORM object in module.exports.
module.exports = orm;