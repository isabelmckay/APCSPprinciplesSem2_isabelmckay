// Isabel McKay
// JSON Lab
// 18 January 2019

var data = [];
var sortBy = "males";
var bigTotal = 0;

function preload(){
  data = loadJSON("population.json");
}

// set up function
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  // background color vand lines
  background(0, 0, 0);
  fill(255, 255, 255);
  bubble();
  // function called later
  represent();
}

// i dont think i need this
function draw() {
}

// sorting by bubble
function bubble(){
  var temp;
  if(sortBy = "age"){
    for (var i = 1; i < data.countrydata.length; i++){
      for(var j = i; j > 0; j--){
        if(data.countrydata[j].total < data.countrydata[j-1].total){
          temp = data.countrydata[j];
          data.countrydata[j] = data.countrydata[j-1];
          data.countrydata[j-1] = temp;
        }
      }
    }
  }
  if(sortBy = "females"){
    for (var i = 1; i < data.countrydata.length; i++){
      for(var j = i; j > 0; j--){
        if(data.countrydata[j].females < data.countrydata[j-1].females){
          temp = data.countrydata[j];
          data.countrydata[j] = data.countrydata[j-1];
          data.countrydata[j-1] = temp;
        }
      }
    }
  }
  if(sortBy = "males"){
    for (var i = 1; i < data.countrydata.length; i++){
      for(var j = i; j > 0; j--){
        if(data.countrydata[j].males < data.countrydata[j-1].males){
          temp = data.countrydata[j];
          data.countrydata[j] = data.countrydata[j-1];
          data.countrydata[j-1] = temp;
        }
      }
    }
  }
  console.log(data);
}

// making a pi graph
function represent(){
  for(var i = 1; i < data.countrydata.length; i++){
    bigTotal = bigTotal + data.countrydata[i].total;
  }
  var lastAngle = 0;
  for(var i = 0; i < data.countrydata.length; i ++){
    var angle = ((data.countrydata[i].total / bigTotal) * (2 * PI));
    fill(66, 241, 244*i);
    arc(300, 400, 500, 600, lastAngle, lastAngle + angle);
    lastAngle += angle
  }
}
// end
