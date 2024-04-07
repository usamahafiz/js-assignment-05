var originalText = "I love my country Pakistan.<br>I like my city Faisalabad.<br>I love my Homeland."

let cities = ['Faisalabad','Lahore','Karachi','Islamabad','Burewala','Sheikhupura','Kashmir'] ; 
// document.getElementById("originaltextbox").innerHTML= originalText;

// const showOutput =(output) =>{
//     document.getElementById("output").innerHTML= output;

// }
// function showoutput(output) {
//     document.getElementById("output").innerHTML=output;
// }

function clearoutput() {
    document.getElementById("output").innerHTML= " ";
}
// const clearOutput =() =>{
//     document.getElementById("output").innerHTML= "";

// }
const clearInput = () =>{
         document.getElementById("inputText").value= "";

 }

//  const inputValue = () =>{
//     return document.getElementById("inputText").value;

// }

// lowercase
function lowerCase(){
    let lowerCaseText =  originalText.toLowerCase();
    document.getElementById("output").innerHTML = lowerCaseText;
}
// uppercase
function upperCase(){
    let upperCaseText =  originalText.toUpperCase();
    document.getElementById("output").innerHTML = upperCaseText;
}

// capitalize
function capitalize(){
    let capitalizeText =  '<span style="text-transform:capitalize;">' +originalText+ '</span>'
    // document.getElementById("output").style.textTransform= "capitalize";
    document.getElementById("output").innerHTML = capitalizeText;
}
// betterformating
function betterformating(){
    let text= document.getElementById("inputText").value;

    if(!text){
        alert("please type some text")
    return;
}

    text= text.toLowerCase();
    document.getElementById("output").style.textTransform="capitalize";
    document.getElementById("output").innerHTML= text;
}
// printallcities
function printallcities(){
    document.getElementById("output").innerHTML=" ";
    for(let i=0;i<cities.length;i++){
        document.getElementById("output").innerHTML += i+1 + ")"+ cities[i] + "<br />" ;

}
}

// addcityinlisy
function addyourcity(){
    var city = document.getElementById("inputText").value;

    if(city.lenght<3){
        alert("please enter correct city name");
        return;
    }

    let cityFirstLetter= city.slice(0,1).toUpperCase();
    console.log(cityFirstLetter);
    let cityAllLetter= city.slice(1).toLowerCase();
    console.log(cityAllLetter);

    let cityWordInCapitalize= cityFirstLetter + cityAllLetter;
    console.log(cityWordInCapitalize)

    let cityFound= false;
    for(let i=0;i<cities.length;i++){
        if(cities[i]===cityWordInCapitalize){
            cityFound= true;
            let html= '<span style="color:red;font-size:20px;textTransform:capitalize;">"'+cityWordInCapitalize+ ' "</span> is already in list';
            document.getElementById("output").innerHTML= html;

}
    }
     if(cityFound ===false){
         cities.push(cityWordInCapitalize);
         let html= '<span style="color:green;font-size:20px;">"' +cityWordInCapitalize+  ' "</span> has been sucessfully added in your list';
         document.getElementById("output").innerHTML= html;


    }
}

// check city in list
function checkyourcity(){
    let city = document.getElementById("inputText").value;
    if(!city){
        alert("please enter your city name");
        return;
    }

   let cityFirstLetter=  city.charAt(0).toUpperCase();
   let cityAllLetter= city.slice(1).toLowerCase();
   let cityWordInCapitalize= cityFirstLetter + cityAllLetter;

    let cityFound= false;
    for(let i=0;i<cities.length;i++){
        if(cities[i]===cityWordInCapitalize){
            cityFound= true;
            let html= '<span style="color:green;font-size:20px;textTransform:capitalize;">"'+cityWordInCapitalize+ ' "</span> is found in list.';
            document.getElementById("output").innerHTML= html;
    }


}
if(cityFound ===false){
    cities.push(cityWordInCapitalize);
    let html= "SORRY &#128524;We couldn't find your city<span style='color:red;font-size:20px;'>" +'"'+cityWordInCapitalize+  ' "</span> in list. <br>Click <span style="color:green;font-siza:18px;">"Add your city in list"</span> to add your city &#128522;'
    document.getElementById("output").innerHTML= html;

}
}
// findthisword
function findthisword(){
    let newOriginalText= originalText.toLowerCase();
    let  word=document.getElementById("inputText").value;
    
    if (!word) {
        alert("please type a word for find")
        
    }
    word= word.toLowerCase();
    let findword=newOriginalText.indexOf(word);
    console.log(findword);

    if (findword !==-1) {
        let html= 'Your word <span style="color:green;font-size:18px;textTransform:capitalize;">"'+word+ ' "</span> found at index :' +findword;
        document.getElementById("output").innerHTML= html;
    }
    else{
        let html= 'Your word <span style="color:green;font-size:18px;textTransform:capitalize;">"'+word+ ' "</span> does not exist in the original string. ';
        document.getElementById("output").innerHTML= html;

    }

}

// replacethisword
function  replacethisword() {
    let newOriginalText= originalText.toLowerCase();
    let word = document.getElementById("inputText").value;

    if (!word) {
        alert("please type a word for replaciing")
        return;
        
    }

    let replacewith=prompt("please enter a word that you want to replace with")

    if (!replacewith) {
        alert("please type a word to replace it with" + word +'.')
        return;
        
    }
    word= word.toLowerCase();
    console.log("word before using regular expression =>",word);

    word= new RegExp(word,"g");
    console.log("word after using regular  expression =>",word);
     
    replacewith= replacewith.toLowerCase();
    let replacethisword= newOriginalText.replace(word,replacewith);
    document.getElementById("output").innerHTML=replacethisword ;
}