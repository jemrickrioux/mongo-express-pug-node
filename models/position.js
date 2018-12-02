//Instancie les dépendances du modele
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var User = require('./users');


//Définit la structure des données pour le USER
var PositionSchema = new mongoose.Schema({
    id: {
      type: String
    },
    vti: {
      type: Number
    },
    pe: {
      type: Number
    },
    pc: {
      type: Number
    },
    pb: {
      type: Number
    },
    ps: {
      type: Number
    },
    eg: {
      type: String
    },
    de: {
      type: Number
    },
    yield: {
      type: Number
    },
    payout: {
      type: Number
    },
    earnings: {
    type: Number
    },
    x1: {
      type: Number
    },
    x2: {
      type: Number
    },
    x3: {
      type: Number
    },
    x4: {
      type: Number
    },
    x5: {
      type: Number
    },
    x6: {
      type: Number
    },
    x7: {
      type: Number
    },
    y: {
      type: String
    },
    pr: {
      type: String
    },
    shareprice: {
      type: Number
    },
    ticker: {
      type: String
    },
    author: 
    { 
      type: Schema.Types.ObjectId,
      ref: 'User'
    },
    date: {
      type: String
    } 
  
    
  });



  var Position = mongoose.model('Position', PositionSchema);
  module.exports = Position;