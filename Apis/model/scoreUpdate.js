const mongoose = require('mongoose');
const schema = mongoose.Schema;

const scoreUpdate = new schema({
    test1 : Number,
    test2 : Number,
    test3: Number
},
{
    collection: "scoreUpdate"
});

module.exports = mongoose.model('scoreUpdate', scoreUpdate);
