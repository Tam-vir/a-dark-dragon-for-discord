const generateMap = () => {
  /** 
   grass: 0,
   player: 1,
   water: 5,
   treasure: 100
  
  */
  let world = []
  for (let i = 0; i < 50; i++){
    world.push([]);
    for (let j = 0; j < 50; j++){
      world[i].push(0);
    }
  }
  world[25][25] = 1;
  for(let i = 40; i < 48; i++){
    for(let j = 40; j < 48; j++){
      world[i][j] = 5;
    }
  }
  let treasuresSet = 0;
  function setTreasure(){
    let x = Math.floor(Math.random() * 50);
    let y = Math.floor(Math.random() * 50);
    if (world[x][y] === 0){
      world[x][y] = 100;
      treasuresSet++;
    }
  }
  while(true){
    if (treasuresSet === 60){
      return world;
    }
    setTreasure();
  }
  
}
module.exports = generateMap;