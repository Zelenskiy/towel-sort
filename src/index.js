
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if (matrix === [] || matrix === undefined)
    return [];
  let m = [];
    let d = 1;
    for (let r=0; r<matrix.length; r++){
      let dl = matrix[r].length;
      for (let c=0; c < dl; c++){
          if (d > 0){
            m.push(matrix[r][c]);
          } else {
            m.push(matrix[r][dl - c - 1]);
          }        
      }      
      d *= -1;
    }  
    return m;
}
