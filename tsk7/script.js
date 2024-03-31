var request = new XMLHttpRequest();
request.open("GET", "https://restcountries.com/v3.1/all", true);
request.send();
request.onload = function () {
  var data = request.response;
  var result = JSON.parse(data);
 // 1.Get all the countries from Asia continent /region using Filter function :
  var countries = result.filter((ele) => ele.region === "Asia");
  console.log(countries);
  var finalA = countries.map((ele) => console.log(ele.name.common));

  //  2.Get all the countries with a population of less than 2 lakhs using Filter :
  var pop = result.filter((ele) => ele.population <= 200000);

  var finalB = pop.map((ele) => console.log(ele.name.common));
  // 3.function Print the following details name, capital, flag, using forEach:
  var finalC = result.forEach((ele) =>
    console.log(ele.flags.svg, ele.capital, ele.name.common)
  );

  //  4.function Print the total population of countries using reduce function :
  var a = result.map((ele) => ele.population);
  var total = result.filter((ele) => console.log(ele.population));
  var finalD = a.reduce((sum, i) => {
    return sum + i;
  }, 0);
  console.log("TOTAL POPLATION:", finalD);
  //5.Print the country that uses US dollars as currency:
  var e = result.filter((ele) => ele.currencies?.USD);
  var finalE = e.map((ele) => ele.name);
  console.log(finalE);
};
