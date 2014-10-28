// http://codepen.io/jackrugile/details/vpacL/

var canvas = document.getElementById('canvas'),
    context = canvas.getContext('2d'),
    canvasWidth = canvas.width = window.innerWidth,
    canvasHeight = canvas.height = window.innerHeight,
    cellWidth = 40,
    cellHeight = 40,
    columns = Math.ceil(canvasWidth / cellWidth),
    rows = Math.ceil(canvasHeight / cellHeight),
    rand = function(min, max){
        return Math.floor( (Math.random() * (max - min + 1) ) + min);
    },
      iCol, iRow;

var render = function(){
  context.clearRect(0, 0, canvasWidth, canvasHeight);

  for(iCol = 0; iCol < columns; iCol++){
        for(iRow = 0; iRow < rows; iRow++){
      var pattern = rand(0, 3);
      var lightness = rand(0, 90);
            context.beginPath();
      if(pattern === 0){
        context.moveTo(iCol * cellWidth, iRow * cellHeight);
        context.lineTo(iCol * cellWidth + cellWidth, iRow * cellHeight);
        context.lineTo(iCol * cellWidth, iRow * cellHeight + cellHeight);
      } else if(pattern === 1){
        context.moveTo(iCol * cellWidth + cellWidth, iRow * cellHeight);
        context.lineTo(iCol * cellWidth + cellWidth, iRow * cellHeight + cellHeight);
        context.lineTo(iCol * cellWidth, iRow * cellHeight);
      } else if(pattern === 2){
        context.moveTo(iCol * cellWidth + cellWidth, iRow * cellHeight + cellHeight);
        context.lineTo(iCol * cellWidth, iRow * cellHeight + cellHeight);
        context.lineTo(iCol * cellWidth + cellWidth, iRow * cellHeight);
      } else {
        context.moveTo(iCol * cellWidth, iRow * cellHeight + cellHeight);
        context.lineTo(iCol * cellWidth, iRow * cellHeight);
        context.lineTo(iCol * cellWidth + cellWidth, iRow * cellHeight + cellHeight);
      }
      context.fillStyle = 'hsl(0, 0%, '+lightness+'%)';
      context.closePath();
            context.fill();
        };
    };
};
