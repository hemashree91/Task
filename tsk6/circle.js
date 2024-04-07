

class Circle {
  constructor(radius, color,find,area,circumference) {
    this.radius = radius;
    this.color = color;
    this.area=area;
    this.circumference=circumference;
  }

  get Radius() {
    return this.radius;
  }
  set Radius(n) {
    this.radius = n;
  }
  get Color() {
    return this.color;
  }
  set Color(c) {
    this.color = c;
  }
  get toString() {
    return `"Circle[radius=${this.radius},color =${this.color}]"`;
  }

 get Area(){
  return this.area;
  return this.circumference;
 
 }
 set Area(radius){
  this.area=3.14*Math.pow(radius,2)
  this.circumference =2*(3.14)*radius;
 }
}
let obj = new Circle(1.0, "red");
let obj1= new Circle("area","circumference")
console.log(obj.Radius, obj.Color)
console.log(obj1.Area)



