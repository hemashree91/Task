var request = new XMLHttpRequest(); 
request.open("GET", "https://restcountries.com/v3.1/all", true); 
request.send(); //SENDING REQUEST
request.onload = function () {
  
  var data = request.response;
  var result = JSON.parse(data);
  for (var i = 0; i < result.length; i++) {
    console.log("COUNTRY NAME:" + " " + result[i].name.common,"REGION:"+" "+result[i].region)
    console.log("SUBREGION:"+" "+result[i].subregion,"POPULATION:"+" "+result[i].population)
    //console.log("POPULATION:"+" "+population.common);
    console.log(result[i].flags.svg)
  }
};
