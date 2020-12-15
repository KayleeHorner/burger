var orm = require("../config/orm.js");

var burger = {
    all(cb) {
        orm.selectAll("burgers", function(res){
            cb(res);
        });
    },
    create(cols, vals, cb) {
        orm.insertOne("burgers", cols, vals, function(res){
            cb(res);
        });
    },
    update: function(objColVals, condition, cb) {
        orm.updateOne("burgers", objColVals, condition, function(res) {
          cb(res);
        });
      }
};


module.exports = burger;