//Function Declaration
function userProfile(name) {
    console.log("Hello", name)
    
}
userProfile("Sri")
//Arrow Function
let double = (num) => {
    return num * 2;
}
console.log("Double of number is : ", double(5))
//Anonymous Function
setTimeout(function(){
    console.log("This message is delayed by 2 seconds")},2000)

//Callback Function
function getUserData(callback) {
    setTimeout(() => {
        const user = {
            name: "Sri",
            age: 36
        }
        callback(user);
    }, 3000);
}
getUserData((user) => {
    console.log("Name : ", user.name);
    console.log("Age : ", user.age);
});
