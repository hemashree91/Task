function titlecase(arr) {
  var res = arr.toString();
  var data = res.toLowerCase().split(" ");
  for (var i = 0; i < data.length; i++) {
    data[i] = data[i].charAt(0).toUpperCase() + data[i].sclice(1);
  }
  return data.join(" ");
}
console.log(titlecase(["thIs iS javAscriPt"]));
