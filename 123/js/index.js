var config = {
    apiKey: "AIzaSyAxteQnfJWDilWg9SoCPX9kpB3RkTutde4",
    authDomain: "letmeet-bai.firebaseapp.com",
    databaseURL: "https://letmeet-bai.firebaseio.com",
    projectId: "letmeet-bai",
    storageBucket: "letmeet-bai.appspot.com",
    messagingSenderId: "688044304067"
  };
  firebase.initializeApp(config);
var app = {
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },
    onDeviceReady: function() {
        this.receivedEvent('deviceready');
    },

    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};

firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    document.getElementById("user_div").style.display = "block";
    document.getElementById("login_div").style.display = "none";
	document.getElementById("meet_div").style.display = "none";

    var user = firebase.auth().currentUser;

    if(user != null){

      var email_id = user.displayName;
	  if (email_id!=null){
		  var email_id = user.displayName;
	  }else {
		  email_id = user.email;
	  }
      document.getElementById("user_para").innerHTML = "Welcome " + email_id;

    }

  } else {
    document.getElementById("user_div").style.display = "none";
    document.getElementById("login_div").style.display = "block";
	document.getElementById("meet_div").style.display = "none";
  }
});

function letsmeet(){
	window.location.replace('addmeeting.html');
	
}
function addeventpage(){
	window.location.replace('addevent.html');
	
}
function userinfopage(){
	window.location.replace('editprofile.html');
	//document.getElementById("edituser_div").style.display = "block";
	//document.getElementById("showuser_div").style.display = "none";
}
function edituserinfo(){
	document.getElementById("edituser_div").style.display = "block";
	document.getElementById("showuser_div").style.display = "none";
	document.getElementById("user_div").style.display = "none";
}
function showuserinfo(){
	document.getElementById("edituser_div").style.display = "none";
	document.getElementById("showuser_div").style.display = "block";
	document.getElementById("user_div").style.display = "none";
	var database = firebase.database();
	var userId = firebase.auth().currentUser.uid;
	return firebase.database().ref('/users/' + userId).once('value').then(function(snapshot) {
	var username_profile = (snapshot.val() && snapshot.val().username) || 'Anonymous';
	var hobby_profile = (snapshot.val() && snapshot.val().hobby ) || 'Anonymous';
	var języki_profile = (snapshot.val() && snapshot.val().języki) || 'Anonymous';
	var płeć_profile = (snapshot.val() && snapshot.val().płeć) || 'Anonymous';
	document.getElementById("username_profile").innerHTML=username_profile;
	document.getElementById("hobby_profile").innerHTML=hobby_profile;
	document.getElementById("języki_profile").innerHTML=języki_profile;
	document.getElementById("płeć_profile").innerHTML=płeć_profile;
	});
	
}


function tologinpage(){
	//window.location.replace('login.html');
	document.getElementById("user_div").style.display = "none";
    document.getElementById("login_div").style.display = "none";
	document.getElementById("meet_div").style.display = "block";
}

function showeventpage(){
	var test =1;
	window.location.replace('showevent.html');
	if (test !=null){
	showevents1();
	}
}
function Doindex2(){
	window.location.replace('index2.html');
}
function toindexpage(){
	window.location.replace('index.html');
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

}function checkLoginState() {
  FB.getLoginStatus(function(response) {
    statusChangeCallback(response);
  });
}

function Googlelogin() {
    firebase.auth().onAuthStateChanged( function(user){
        if(user) {
            login(user);
        } else {
            var provider = new  firebase.auth.GoogleAuthProvider();
            firebase.auth().signInWithRedirect(provider);
        }
    });
}

function Facebooklogin() {
    firebase.auth().onAuthStateChanged( function(user){
        if(user) {
            login(user);
        } else {
            var provider = new  firebase.auth.FacebookAuthProvider();
            firebase.auth().signInWithRedirect(provider);
        }
    });
}

function facetoken(){
	window.fbAsyncInit = function() {
    FB.init({
      appId      : '1583806705075141',
      cookie     : true,
      xfbml      : true,
      version    : 'v2.8'
    });
      
    FB.AppEvents.logPageView();   
      
  };

  (function(d, s, id){
     var js, fjs = d.getElementsByTagName(s)[0];
     if (d.getElementById(id)) {return;}
     js = d.createElement(s); js.id = id;
     js.src = "//connect.facebook.net/en_US/sdk.js#xfbml=1&amp;version=v2.8";
     fjs.parentNode.insertBefore(js, fjs);
   }(document, 'script', 'facebook-jssdk'));

   
FB.getLoginStatus(function(response) {
statusChangeCallback(response);
});
FB.api('/me?fields=id,name,email', function(response) {
  console.log(response);
});
/*
FB.getLoginStatus(function(response) {
  if (response.status === 'connected') {
	  
	  console.log(response.authResponse.accessToken);
    var accessToken = response.authResponse.accessToken;
	//if (accessToken !=null){
	//firebase.auth().signInAndRetrieveDataWithCredential(accessToken).catch(function(error) {
	//	auth.signInAndRetrieveDataWithCredential(accessToken);
	//console.log("działa?");
	//}
  } 
  else{
	  console.log("chuja");
  }
} );
*/

//var credential = firebase.auth.FacebookAuthProvider.credential(accessToken);



}

function Googlelogintest() {
	var provider = new firebase.auth.GoogleAuthProvider();
	firebase.auth().signInWithRedirect(provider).then(function() {
  return firebase.auth().getRedirectResult();
  console.log("faza1");
}).then(function(result) {
  // This gives you a Google Access Token.
  // You can use it to access the Google API.
  var token = result.credential.accessToken;
  // The signed-in user info.
  var user = result.user;
   console.log("faza2-result user");
  // ...
}).catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
});

firebase.auth().getRedirectResult().then(function(result) {
  if (result.credential) {
    // This gives you a Google Access Token.
    // You can use it to access the Google API.
    var token = result.credential.accessToken;
    // The signed-in user info.
    var user = result.user;
    // ...
	 console.log("chyba siadło");
  }
}).catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
});
}


function logout(){
  firebase.auth().signOut();
}
function addevent(){
	
	var ref = firebase.database().ref();
	var user = firebase.auth().currentUser;
	var eventUser = document.getElementById("event_user").value;
	var eventName = document.getElementById("event_name").value;
	var eventStartDate = document.getElementById("event_from").value;
	var eventEndDate = document.getElementById("event_until").value;
	var eventText = document.getElementById("event_text").value;
	var eventLocation = document.getElementById("event_location").value;
	var eventLink = document.getElementById("event_link").value;

	var postsRef = ref.child("events");
  var newPostRef = postsRef.push();
  newPostRef.set({
    Nazwa: [eventName],
    DataOd: [eventStartDate],
    DataDo: [eventEndDate],
    Opis: [eventText],
    Lokalizacji: [eventLocation],
    Autor: [eventUser],	
	Link: [eventLink]
  }, function(error){
            if (error) {
             console.error(error)
             return
            }
            window.location.replace('index.html');
            //add upload function here
			window.alert("Wydarzenie dodane");
        });
}

function addmeeting(){
	
	var ref = firebase.database().ref();
	var user = firebase.auth().currentUser;
	var meetUser = document.getElementById("meet_user").value;
	var meetName = document.getElementById("meet_name").value;
	var meetStartDate = document.getElementById("meet_from").value;
	var meetEndDate = document.getElementById("meet_until").value;
	var meetText = document.getElementById("meet_text").value;
	var meetLocation = document.getElementById("meet_location").value;

	var postsRef = ref.child("meetings");
  var newPostRef = postsRef.push();

  newPostRef.set({
    Nazwa: [meetName],
    DataOd: [meetStartDate],
    DataDo: [meetEndDate],
    Opis: [meetText],
    Lokalizacji: [meetLocation],
    Autor: [meetUser],	
  }, function(error){
            if (error) {
             console.error(error)
             return
            }
            window.location.replace('index.html');
        });
}
function showmeet(){
	var leadsRef = database.ref('meetings');
leadsRef.on('value', function(snapshot) {
    snapshot.forEach(function(childSnapshot) {
      var childData = childSnapshot.val();
    });
});
}
function showevent(){
	var leadsRef = database.ref('events');
	leadsRef.on('value', function(snapshot) {
    snapshot.forEach(function(childSnapshot) {
      var childData = childSnapshot.val();
    });
});
}
function userinfo(){
	firebase.auth().onAuthStateChanged((user) => {
	if (user) {
	var ref = firebase.database().ref();
	var database = firebase.database();
	var UserName = document.getElementById("UserName").value;
	var plec = document.getElementById("sex").value;
	var hobby = document.getElementById("hobby");
	var jezyki = document.getElementById("languages");
    var selected1 = [];
	var selected2 = [];
    for (var i = 0; i < jezyki.length; i++) {
        if (jezyki.options[i].selected) selected1.push(jezyki.options[i].value);
    }
	for (var i = 0; i < hobby.length; i++) {
        if (hobby.options[i].selected) selected2.push(hobby.options[i].value);
    }
	firebase.database().ref('users/' + user.uid).set({
    username: UserName,
    płeć:plec,
	hobby:selected2,
	języki:selected1	
  });
  
};
		if (UserName !=null) {
            window.location.replace('editprofile.html');
            }
			else{
			window.alert("kupa");
             return
			}
})
            
}

function addevent(title,loc,link,zuser,date,datetime,email,phone,price){
	
	var ref = firebase.database().ref();
    var user = firebase.auth().currentUser;
    
    var titletemp = document.getElementById(title).value;
    var loctemp = document.getElementById(loc).value;
    var eventLink = document.getElementById(link).value;

    var userName = document.getElementById(zuser).value;
	var eventStartDate = document.getElementById(date).value;
    var eventEndDate = document.getElementById(datetime).value;
    var userMail = document.getElementById(email).value;
    var userPhone = document.getElementById(phone).value;
    var eventPrice = document.getElementById(price).value;

    var myRef = ref.child("events");

    var newData={
        Title: titletemp,
        Location: loctemp,
        Link: eventLink,
        Date: eventStartDate,
        DateTime: eventEndDate,
        UserName: userName,
        Email : userMail,
        Phone : userPhone,
        Price : eventPrice
    }
    
    myRef.push(newData);
}
function showevents(){
	/*
	var ref = firebase.database().ref();
	firebase.database().ref('/events').on('title', function(snapshot) {
    console.log(snapshot.val());
});

function snapshotToArray(snapshot) {
    var returnArr = [];

    snapshot.forEach(function(childSnapshot) {
        var item = childSnapshot.val();
        item.key = childSnapshot.key;

        returnArr.push(item);
    });

    return returnArr;
};

firebase.database().ref('/posts').on('value', function(snapshot) {
    console.log(snapshotToArray(snapshot));
});*/
	var database = firebase.database();
	var userId = firebase.auth().currentUser.uid;
	return firebase.database().ref('/events/').once('value').then(function(snapshot) {
	var data_start = (snapshot.val() && snapshot.val().date) || 'Anonymous';
	var data_end = (snapshot.val() && snapshot.val().datetime) || 'Anonymous';
	var email_event = (snapshot.val() && snapshot.val().email ) || 'Anonymous';
	var title_event = (snapshot.val() && snapshot.val().title) || 'Anonymous';
	var płeć_profile = (snapshot.val() && snapshot.val().płeć) || 'Anonymous';
	document.getElementById("data_start").innerHTML=data_start;
	document.getElementById("data_end").innerHTML=data_end;
	document.getElementById("email_event").innerHTML=email_event;
	document.getElementById("title_event").innerHTML=title_event;
	});

}
function attendevent(){
	window.alert("dołącz do wydarzenia");
}

function showevents1(){
	var ref = firebase.database().ref();
	const dbRefObject = firebase.database().ref().child('events');
	dbRefObject.on('child_added', snap =>{
		var eventtitle = snap.child("Title").val();
		var eventemail = snap.child("Email").val();
		var eventUserName = snap.child("UserName").val();
		var eventDate = snap.child("Date").val();
		var eventDateTime = snap.child("DateTime").val();
		var eventLocation = snap.child("Location").val();
		var eventPhone = snap.child("Phone").val();
        var eventLink = snap.child("Link").val();
        var eventPrice = snap.child("Price").val();
		
		/*document.getElementById("eventtitle").innerHTML=eventtitle;
		document.getElementById("eventemail").innerHTML=eventemail;
		document.getElementById("eventUserName").innerHTML=eventUserName;
		document.getElementById("eventDate").innerHTML=eventDate;
		document.getElementById("eventDateTime").innerHTML=eventDateTime;
		document.getElementById("eventLocation").innerHTML=eventLocation;
		document.getElementById("eventPhone").innerHTML=eventPhone;
		document.getElementById("eventLink").innerHTML=eventLink;*/
		console.log(eventtitle);
		console.log(eventemail);
		console.log(eventUserName);
		console.log(eventDate);
		console.log(eventDateTime);
		console.log(eventLocation);
		console.log(eventPhone);
		console.log(eventLink);
		$("#result").append("<div id='test12'>Nazwa wydarzenia:<p>" + eventtitle + "</p>Cena:<p>" + eventPrice + "</p>Email:<p>" + eventemail + "</p>Uzytkownik:<p>" + eventUserName +"</p>Data<p>" 
		+ eventDate +"</p><p>" + eventDateTime +"</p>Lokalizacja:<p>" + eventLocation + "</p>Telefon:<p>" + eventPhone +"</p>Link:<p>" + eventLink +'</p><p><button onclick="attendevent()">Weź udział</button></p></div>');
		//window.alert("no elo");
	});
	//dbRefObject.on('value', snap => console.log(snap.val()));
}

function findevent(title,loc){
	var rootRef = firebase.database().ref('events');
    $('#find_button').click(function(){
        rootRef.orderByChild("Location").equalTo($('#Location').val()).on('value',function(snapshot){
            snapshot.forEach(function(childSnapshot) {

                var titletemp = childSnapshot.val().Title;

                $("#Result").append(titletemp + "\n\r");
            })
        })
    })
}
