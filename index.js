//when clicking on username and password fields, teleport it to random places
//make hash function to hash user and password
// if they equal the correct hashes, log in.

//use symmetric key encryption as the var name for 'suckMyBallz' and 'fuckYou' 
//decrypt using same algorithm to get the actual password names
//hash them into something that will be the real password
//make the symmetric key the hash of the username and password

//symmetric - XOR
//hash - mod



const suckMyBallz = "suckMyBallz";
const fuckYou = "fuckYou";



function hi(){
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value; 
    
    if(username === suckMyBallz && password === fuckYou){
        alert("you're in chat");
    }else{
        alert("fuck you nerd");
    }
}

function unclick(){
    document.getElementById("username").blur();
    document.getElementById("password").blur();
    //move();
}

// function move(){

// }

function supplemental(){
    let thing = window.location.href;
    thing = stringParse(thing);
    first = thing[0];
    second = thing[1];

    thing = supplemental2(first, second);
    first = thing[0];
    second = thing[1];


    if(first%216697109113n == 74239097650 && second%789053333n == 78246264){
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

function supplemental2(first, second){ //this will be symmetric
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

function supplemental3(first, second){ // hashes user's user/pass
    //alert(second.length);

    let totalFirst = 0;
    for (let i = 0; i < first.length; i++) {
        totalFirst = totalFirst + first.charCodeAt(i);
    }

    let totalSecond = 0;
    for (let i = 0; i < second.length; i++) {
        totalSecond = totalSecond + second.charCodeAt(i);
    }

    //console.log(totalFirst + " : " + totalSecond); //1137, 742 normal

    totalFirst = totalFirst * 1000;
    totalSecond = totalSecond * 1301;

    //console.log(totalFirst + " : " + totalSecond); //1137000 : 965342 after the mult

    third = totalFirst%122327;
    fourth = totalSecond%222389;

    //console.log(first + " : " + second); //36057 : 75786 after the mod

    return [third, fourth];
}