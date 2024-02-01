const generateMap = () => {
  /** 
   grass: 0,
   player: 1,
   water: 5,
   treasure: 100
  
  */
  const worldMap = Array.from({ length: 5 }, () =>
      Array.from({ length: 5 }, () =>
          Array.from({ length: 10 }, () => Array(10).fill(0))
      )
  );
  
  function addRiver() {
    for (let i = 1; i < 9; i++) {
        for (let j = 1; j < 9; j++) {
            worldMap[2][2][i][j] = 5; // Water represented as "5"
        }
    }
  }

  // Add the river initially
  addRiver()
  function placeTreasures() {
      let treasuresPlaced = 0;

      while (treasuresPlaced < 50) {
          const randomChunkX = Math.floor(Math.random() * 5);
          const randomChunkY = Math.floor(Math.random() * 5);
          const randomX = Math.floor(Math.random() * 10);
          const randomY = Math.floor(Math.random() * 10);

          // Check if the position is empty (not occupied by the player or another treasure)
          if (worldMap[randomChunkX][randomChunkY][randomX][randomY] === 0) {
              worldMap[randomChunkX][randomChunkY][randomX][randomY] = 100;
              treasuresPlaced++;
          }
      }
  }
  const currentChunk = worldMap[playerChunkX][playerChunkY];
  currentChunk[playerY][playerX] = 1;
  placeTreasures()
  return worldMap;
}
module.exports = generateMap;