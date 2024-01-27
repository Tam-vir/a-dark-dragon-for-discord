const generateMap = () => {
  let world = []
  for (let i = 0; i < 500; i++){
    world.push([]);
    for (let j = 0; j < 500; j++){
      world[i].push({
        type: 'grass'
      });
    }
  }
  world[250][250] = {
    type: 'player'
  };
  for(let i = 400; i < 408; i++){
    for(let j = 400; j < 408; j++){
      world[i][j] = {
        type: 'water'
      };
    }
  }
  let treasuresSet = 0;
  function setTreasure(){
    let x = Math.floor(Math.random() * 500);
    let y = Math.floor(Math.random() * 500);
    if (world[x][y].type === 'grass'){
      world[x][y] = {
        type: 'treasure',
        value: Math.floor(Math.random() * 70) + 30
      };
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