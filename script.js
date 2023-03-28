function printInvertedRightAngledTriangle(i){
  for (let row = i; row > 0; row--){
    let pattern = "";
    for (let col = 0; col < row; col++){
      pattern += "*"
    }
    console.log(pattern);
  }
}
// Examples Usage
printInvertedRightAngledTriangle(6)