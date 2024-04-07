
//1.QUESTION: class AND PROPERTIES
/*
class movie{
   constructor(title,studio,rating){
    this.title=title;
    this.studio=studio;
    this.rating=rating;

    }
}
const obj = new movie("LEO","7-SCREEN STUDIO","7.5")
const obj1=new movie("MASTER","XB FILM CREATORS","8")
console.log(obj.title, obj.studio, obj.rating)
console.log(obj1.title, obj1.studio, obj1.rating);  
*/
//2.CONSTRUCTOR RATING =PG
/*class movie1{
    constructor(title,studio,rating="PG"){
     this.title=title;
     this.studio=studio;
     this.rating=rating;
 
     }
 }
 const obj2 = new movie1("LEO","7-SCREEN STUDIO","7.5")
 const obj3=new movie1("MASTER","XB FILM CREATORS",)
 console.log(obj2.title, obj2.studio, obj2.rating)
 console.log(obj3.title, obj3.studio, obj3.rating); */
 
 //
  /*class movie  {
 movie[], pgmov=new movie[mov.length];
 int arri=0;
 for(int i=0;i<mov.length;i++){
    if(mov[i].rating.equals("PG")){
 pgmov[arri]=mov[i];
arr++;
}
}
return pgmov
}*/
 /*class  Movie{
    const newArrayIndex = []; 
     for (var i = 0; i < mov.length; i++) {
         if (mov[i].rating.equals(“PG”)) {
             pgMov[newArrayIndex] = mov[i];
              newArrayIndex++; 
            } 
        
return pgMov;
    }
}
  
 console.log(pgMov);*/
         

 //  4.CREATE AN INSTANCES OF CLASS
 class movie{
    constructor(title,studio,rating){
        this.title = title;
        this.studio = studio;
        this.rating = "pg-13";
    }

 }  
  const CasinoRoyale = new movie( "Casino Royal", "Eon Productions", "PG13");
  console.log(CasinoRoyale)