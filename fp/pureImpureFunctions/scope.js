
// global variable
let PI = 3.141519

const calculateArea = (radius) => PI * (radius ** 2) 

calculateArea(5) // 78.5379

PI = 3.03 // side-effect

calculateArea(5) // 75.75