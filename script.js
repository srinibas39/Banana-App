// var userName=window.prompt("Enter your name","Ex:Rahul Sharma");//prompt allows us to take input
// alert(userName);

var button=document.querySelector(".btn-translate");
var inputText=document.querySelector("#input-text");
var translatedArea=document.querySelector(".translated-area");

button.addEventListener("click",function(e){
   // console.log("button clicked");
   inputFromTextArea(e);
})
// inputText.addEventListener("click",function(e){
//      input(e);
// })
// inputText.addEventListener("change",function(e){
//     inputFromTextArea(e);
// })

function inputFromTextArea(e){
//  console.log("clicked");
//  console.log(inputText.value);
translatedArea.innerText="🍌banana banana🍌 banana🍌 banana🍌 "+inputText.value+" banana🍌 banana🍌 banana🍌 banana🍌 "
}
