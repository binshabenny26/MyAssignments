//Example 1:

let word1 = "Hello World"
let string1= word1.slice(6)
console.log(string1);
console.log(string1.length);

//Example 2:

let word2 = " fly me to the moon "
let string2= word2.slice(-5,-1)
console.log(string2);
console.log(string2.length);



function isAnagram()
{
    //  let str1 = "listen";
    // let str2 = "silent"; 
     let str1 = "Hello";
     let str2 = "worrld";
    let s1 = str1.split("").sort().join("");
    let s2 = str2.split("").sort().join("");

    if(s1 === s2) {
        console.log("True");
    } else {
        console.log("False");
    }
    
}
isAnagram();




