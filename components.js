function angle_to_radians( angle ){
    return (angle/180)*Math.PI
} 

//  *STOLEN* https://stackoverflow.com/questions/27205018/multiply-2-matrices-in-javascript
//  I was too lazy to write matrix multiplier
function multiplyMatrix(a, b) {
    var aNumRows = a.length, aNumCols = a[0].length, bNumRows = b.length, bNumCols = b[0].length,
        m = new Array(aNumRows);  // initialize array of rows
    for (var r = 0; r < aNumRows; ++r) {
      m[r] = new Array(bNumCols); // initialize the current row
      for (var c = 0; c < bNumCols; ++c) {
        m[r][c] = 0;             // initialize the current cell
        for (var i = 0; i < aNumCols; ++i) {
          m[r][c] += a[r][i] * b[i][c];
        }
      }
    }
    return new Point(m[0], m[1]);
}