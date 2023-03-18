// function number  1 //
function ParallelogramAndEllipse(a,b){
    const total = a*b;
    return total;
};

// function number 2 //
function RhombusAndPentagon(a,b){
    const total=0.5*a*b;
    return total;
} 

// Random color //

$(document).ready(function () {
    $(".randomColor").hover(function () {
      var r = Math.floor(Math.random() * 255);
      var g = Math.floor(Math.random() * 255);
      var b = Math.floor(Math.random() * 255);
      var color = "rgb(" + r + "," + g + "," + b + ")";
      $(this).css("background-color", color);
    });
  });