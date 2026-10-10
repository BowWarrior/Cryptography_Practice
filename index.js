const suckMyBallz = "suckMyBallz";
const fuckYou = "fuckYou";

function hi(){
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value; 
    
    /*if(username === suckMyBallz && password === fuckYou){
        alert("you're in chat");
    }else{
        alert("fuck you nerd");
    }*/
}

function unclick(){
    document.getElementById("username").blur();
    document.getElementById("password").blur();
  
}


function supplemental(){
    let thing = window.location.href;
    // thing = stringParse(thing);
    // first = thing[0];
    // second = thing[1];

    // thing = supplemental2(first, second);
    // first = thing[0];
    // second = thing[1];
    
    let third = stringParse(thing);
    fourth = BigInt(third[0]);
    fifth = BigInt(third[1]);
    if(fourth%216697109113n == 74239097650 && fifth%789053333n == 78246264){
        alert("you cracked the password!");
    } else{
        alert("Naw. You fail chud.")
    }
}

function stringParse(str){
    let string = str.split('=')[1];
    let AND = string.indexOf("&");
    a = string.substr(0, AND);
    b = str.split('=')[2];
    return [a, b];
}

function supplemental2(first, second){
    let thing2 = supplemental3(first, second);
    third = thing2[0];
    fourth = thing2[1];    

    let totalFirst = "";
    for (let i = 0; i < first.length; i++) {
        totalFirst = totalFirst + first.charCodeAt(i);
    }

    let totalSecond = "";
    for (let i = 0; i < second.length; i++) {
        totalSecond = totalSecond + second.charCodeAt(i);
    }

    first = BigInt(totalFirst)^BigInt(third);
    second = BigInt(totalSecond)^BigInt(fourth);
    console.log(first + " : " + second);
    

    return [first, second];
}

function supplemental3(first, second){
    let totalFirst = 0;
    for (let i = 0; i < first.length; i++) {
        totalFirst = totalFirst + first.charCodeAt(i);
    }

    let totalSecond = 0;
    for (let i = 0; i < second.length; i++) {
        totalSecond = totalSecond + second.charCodeAt(i);
    }

    totalFirst = totalFirst * 1000;
    totalSecond = totalSecond * 1301;

    third = totalFirst%122327;
    fourth = totalSecond%222389;

    return [third, fourth];
}