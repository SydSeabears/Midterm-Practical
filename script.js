var wrap =document.body.querySelector(".wrap");
var list = [
  {
    name: "Harry",
    age: 25
  },
  {
    name: "Larry",
    age: 15
  },
  {
    name: "Bert",
    age: 45
  },
  {
    name: "Jerry",
    age: 35
  },
  {
    name: "Berry",
    age: 5
  },
  {
    name: "Bart",
    age: 55
  }
];

for(var i=0; i<list.length; i++){
   var ele=document.createElement("div");
  var nameEle=document.createElement("h3");
   var ageEle=document.createElement("h3");
   nameEle.innerHTML="Name: " +list[i].name;
  ageEle.innerHTML="Age: " +list[i].age;
  
  ele.appendChild(nameEle);
  ele.appendChild(ageEle);

if(list[i].age>=25){
  ele.style.color="green";
}
   wrap.appendChild(ele);
  }
var counterEle= document.body.querySelector(".clicker");
var numbervalueEle= document.querySelector(".numbervalue");
var num = 5;
numbervalueEle.innerHTML=num;

function counter(){
  num=num+1;
  numbervalueEle.innerHTML=num;
}
document.body.querySelector(".button").addEventListener("click",function(){
  counter()});