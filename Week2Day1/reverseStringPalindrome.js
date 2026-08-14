let str="madam"
let chars=str.split("")
let rev=""

for (let i = chars.length-1; i>=0; i--) 
{
    rev=rev+chars[i]
    

}
console.log("Original String is : " ,str)
console.log("Reverse String is : " ,rev)

if(str===rev){
    console.log("Given string is a palindrome")
}else{
    console.log("Given string is not a palindrome")
}

