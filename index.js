firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    document.getElementById("user_div").style.display = "block";
    document.getElementById("login_div").style.display = "none";

    var user = firebase.auth().currentUser;

    if(user != null){

      var email_id = user.email;
      document.getElementById("user_para").innerHTML = "Welcome User : " + email_id;

    }

  } else {
    document.getElementById("user_div").style.display = "none";
    document.getElementById("login_div").style.display = "block";
  }
});
function tologinpage(){
	window.location.replace('login.html');
}
function login(){
  var userEmail = document.getElementById("email_field").value;
  var userPass = document.getElementById("password_field").value;
  firebase.auth().signInWithEmailAndPassword(userEmail, userPass).catch(function(error) {
    var errorCode = error.code;
    var errorMessage = error.message;
    window.alert("Error : " + errorMessage);
   });

}
function register(){

  var userEmail = document.getElementById("email_field").value;
  var userPass = document.getElementById("password_field").value;
  firebase.auth().createUserWithEmailAndPassword(userEmail, userPass).catch(function(error) {
    var errorCode = error.code;
    var errorMessage = error.message;
    window.alert("Error : " + errorMessage);
  });

}
function facelogin(){
	var provider = new firebase.auth.FacebookAuthProvider();
	firebase.auth().signInWithPopup(provider).then(function(result) {
  var token = result.credential.accessToken;
	document.getElementById('quickstart-oauthtoken').textContent = token;
        } else {
          document.getElementById('quickstart-oauthtoken').textContent = 'null';
        }
  var user = result.user;

}).catch(function(error) {

  var errorCode = error.code;
  var errorMessage = error.message;
  var email = error.email;
  var credential = error.credential;
});
	
	
}
function googlogin(){
  var provider = new firebase.auth.GoogleAuthProvider();
  provider.addScope('https://www.googleapis.com/auth/contacts.readonly');


   firebase.auth().signInWithRedirect(provider);
	firebase.auth().getRedirectResult().then(function(result)  {
        if (result.credential) {
          var token = result.credential.accessToken;
          document.getElementById('quickstart-oauthtoken').textContent = token;
        } else {
          document.getElementById('quickstart-oauthtoken').textContent = 'null';
        }
        var user = result.user;
      }).catch(function(error) {
        var errorCode = error.code;
        var errorMessage = error.message;
         var email = error.email;
        var credential = error.credential;
        if (errorCode === 'auth/account-exists-with-different-credential') {
          alert('You have already signed up with a different auth provider for that email.');
          // If you are using multiple auth providers on your app you should handle linking
          // the user's accounts here.
        } else {
          console.error(error);
        }
      });
}
function logout(){
  firebase.auth().signOut();
}
