const mongoose = require('mongoose');

const dbConfig = 'mongodb+srv://cassiotakarada7:cassio123@cluster0.jtssi9e.mongodb.net/annotations?retryWrites=true&w=majority';

const connection = mongoose.connect(dbConfig, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

module.exports = connection;