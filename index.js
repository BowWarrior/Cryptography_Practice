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


function supplemental(suckMyBallz, fuckYou){
    let thing = window.location.href;

    thing1 = supplemental2(suckMyBallz, fuckYou);
    first = thing1[0];
    second = thing1[1];

    let third = stringParse(thing);
    fourth = third[0];
    fifth = third[1];
    
    thing2 = supplemental2(fourth, fifth);
    fourth = BigInt(thing2[0]);
    fifth = BigInt(thing2[1]);

    first = first%216697109113n;
    second = second%789053333n;

    if(fourth%216697109113n == first && fifth%789053333n == second){
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