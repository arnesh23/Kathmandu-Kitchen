var connection = require("./connection.js");

var orm = {
    selectAll: function(tableInput){
        var queryString = "SELECT * FROM ??";
        connection.query(queryString, [tableInput], function(err,result){
            if (err) throw err;
            console.log(result);
        })
    },
    insertOne: function(tableInput,khana){
        var queryString = "INSERT INTO ??(khana_name) VALUES (?)";
        connection.query(queryString, [tableInput, khana],function(err, result){
            if (err) throw err;
            console.log(result);
        })
    },
    updateOne: function(tableInput,khana,id){
        var queryString = "UPDATE Khana SET khana_name=? WHERE ID=?";
        connection.query(queryString, [tableInput, khana,id], function(err,result){
            if (err) throw err;
            console.log(result);
        })
    }
}
module.exports = orm;