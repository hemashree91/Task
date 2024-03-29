var request = new XMLHttpRequest(); 
request.open("GET", "https://restcountries.com/v3.1/all", true); 
request.send(); //SENDING REQUEST
request.onload = function () {
  
  var data = request.response;
  var result = JSON.parse(data);
  for (var i = 0; i < result.length; i++) {
   
    console.log(result[i].flags.svg)
  }
};