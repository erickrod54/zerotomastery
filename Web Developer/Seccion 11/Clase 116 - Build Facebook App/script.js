/*creamos el usuario que se logeara :)*/
var database = [
  {
    username: "erickrod54",
    password: "supersecret"
  }
];
/*aqui creamos el newsFeed -es como el muro-*/
var newsFeed = [
  {
    username: "mares0809",
    timeline: "Are you watching society?"
  },
  {
    username: "dccb56",
    timeline: "Im doing amazing things!"
  }
];
/*aqui creamos las ventanas que nos logearan :)*/
var userNamePrompt = prompt("Whats your username?");
var passwordPrompt = prompt("Whats your password?");

/*aqui creamos la funcionalidad de validacion del usuario en
nuestra database :)*/
function signIn(user,pass){
  if (user === database[0].username && pass === database[0].password) {
    console.log(newsFeed);
  }else {
    alert("Sorry, wrong username or password");
  }
}
signIn(userNamePrompt,passwordPrompt);
/*
signIn(userNamePrompt,passwordPrompt) -para porbarla se ejecuta asi en el java console-

0: {username: "mares0809", timeline: "Are you watching society?"}
1: {username: "dccb56", timeline: "Im doing amazing things!"}
*/
