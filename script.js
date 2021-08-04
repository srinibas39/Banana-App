// var userName=window.prompt("Enter your name","Ex:Rahul Sharma");//prompt allows us to take input
// alert(userName);

var button=document.querySelector(".btn-translate");
var inputText=document.querySelector("#input-text");
var translatedArea=document.querySelector(".translated-area");

button.addEventListener("click",function(e){
   // console.log("button clicked");
   inputFromTextArea(e);
})
function serverURL(text){
   var URL="https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json"+"?"+"text="+text;
   return encodeURI(URL);
}

function inputFromTextArea(e){
//  console.log("clicked");
//  console.log(inputText.value);
translatedArea.innerText="🍌banana banana🍌 banana🍌 banana🍌 "+inputText.value+" banana🍌 banana🍌 banana🍌 banana🍌 "
 //lets fetch URL
 fetch(serverURL(inputText.value))
 .then(response => response.json())
 .then(json => console.log(json))
 .catch(function(error){
    console.log(error);
    alert("Some error happened in the server please try after some time");
 })

}

