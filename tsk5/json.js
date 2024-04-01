var data=[
    
    
          {
          "NAME"  :"HEMASHREE N",
            "email" : "shreeraju91@gamil.com",
            "phone" : "8925092911",
    },
    {
    
        "name": "HEMASHREE N",
        "email": "shreeraju91@gamil.com",
        "phone": "8925092911",
    },
    {
    
        "address": "35b,vidhyalakshmi street lakshminagar,mudichur",
        "postalCode": 600048,
        "city": "Chennai",
        "state": "Tamilnadu",
        "country": "India"
      },
      {
      "profiles": 
        {
          "website": "https://www.linkedin.com/in/shree-raju-3940762b9/",
                    "github":"https://github.com/hemashree91"
        }
    }
      
      
    ]

  //FOR LOOP:  
for(var i=0;i<data.length;i++){
    console.log(data[i])
}
//FORIN LOOP
 for(var key in data){
    if(data.hasOwnProperty(key)){
       console.log(data[key])
    }

   
}

//forEach loop
var json=data.forEach((ele)=>console.log(ele.name))

//FOR OF LOOP
 var text= ""
 var x=[]
 for (let x of data) {
  text += x + "<br>";
}
 console.log(text);
