var isLoggedIn=true;
var isEmailVerified=true;
var cardInfo=false;
if(isLoggedIn && isEmailVerified && cardInfo==true){
    console.log("you are allowed to purchase");
}else{
    console.log("sorry! you are not allowed to purchase");
}