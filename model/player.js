const {Schema, model} = require('mongoose');

const playerSchema = new Schema({
  userId:{
    type: String,
    required: true,
  },
  world:{
    type: [],
    required: true,
  },
    playerX :{
    type: Number,
    required: true,
    default: 0,
  },
    playerY :{
    type: Number,
    required: true,
    default: 25,
  },
  playerChunkX :{
    type: Number,
    required: true,
    default: 0,
  },
  playerChunkY : {
    type: Number,
    required: true,
    default: 0,
  },
  inventory:{
    type: [],
    required: false,
  },
  treasureCount:{
    type: Number,
    required: true,
    default: 0,
  },
  mapsCleared:{
    type: Number,
    required: true,
    default: 0,
  },
  xp:{
    type: Number,
    required: true,
    default: 0,
  }
})

module.exports = model('Player', playerSchema);