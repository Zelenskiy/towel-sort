function towelSort (matrix) {
    let m = [];
    let d = 1;
    for (let r=0; r<matrix.length; r++){
      let dl = matrix[r].length;
      console.log("dl=",dl);
      for (let c=0; c < matrix[r].length; c++){
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

  const matrix = [
    
  ];

let cc = towelSort(matrix);
console.log(cc);
for (let r=0; r<cc.length; r++){
   console.log(cc[r]);
}
//   console.log( towelSort(matrix));


  