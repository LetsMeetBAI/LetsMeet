var config = {
    authDomain: "inetigor-e1f83.firebaseapp.com",
  apiKey: "AIzaSyCqbeDdhopUNN0JQfXX33QbuFR3jyN80p4",
  databaseURL: "https://inetigor-e1f83.firebaseio.com",
  projectId: "inetigor-e1f83",
  storageBucket: "inetigor-e1f83.appspot.com",
  messagingSenderId: "977823789350"
};
firebase.initializeApp(config);

function addevent(title,loc,link,zuser,date,datetime,email,phone){
	
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

    var myRef = ref.child("events");

    var newData={
        Title: titletemp,
        Location: loctemp,
        Link: eventLink,
        Date: eventStartDate,
        DateTime: eventEndDate,
        UserN: userName,
        Email : userMail,
        Phone : userPhone
    }
    
    myRef.push(newData);
}
var rootRef = firebase.database().ref('events');

function findevent(title,loc,link,zuser,date,datetime,email,phone){
    $('#find_button').click(function(){
        rootRef.orderByChild("Location").equalTo($('#Location').val()).on('value',function(snapshot){
            snapshot.forEach(function(childSnapshot) {

                var titletemp = childSnapshot.val().Title;
                var eventLink = childSnapshot.val().Link;
                var loctemp = childSnapshot.val().Location;
                var userName = childSnapshot.val().UserN;
                var eventStartDate = childSnapshot.val().Date;
                var eventEndDate = childSnapshot.val().DateTime;
                var userMail = childSnapshot.val().Email;
                var userPhone = childSnapshot.val().Phone;

                $("#Result").append(titletemp + "\n\r");
                $("#Result").append(eventLink + "\n\r");
                $("#Result").append(loctemp + "\n\r");
                $("#Result").append(userName + "\n\r");
                $("#Result").append(eventStartDate + "\n\r");
                $("#Result").append(eventEndDate + "\n\r");
                $("#Result").append(userMail + "\n\r");
                $("#Result").append(userPhone+ "\n\r");
            })
        })
    })
}

function addmeeting(title,loc,link,zuser,date,datetime,email,phone){
	
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

    var myRef = ref.child("meetings");

    var newData={
        Title: titletemp,
        Location: loctemp,
        Link: eventLink,
        Date: eventStartDate,
        DateTime: eventEndDate,
        UserN: userName,
        Email : userMail,
        Phone : userPhone
    }
    
    myRef.push(newData);
}


function findmeet(){
    
    var rootRef = firebase.database().ref('meetings');
   
    $('#find_button').click(function(){
        rootRef.orderByChild("Location").equalTo($('#Location').val()).on('value',function(snapshot){
            snapshot.forEach(function(childSnapshot) {

                var titletemp = childSnapshot.val().Title;
                var eventLink = childSnapshot.val().Link;
                var loctemp = childSnapshot.val().Location;
                var userName = childSnapshot.val().UserN;
                var eventStartDate = childSnapshot.val().Date;
                var eventEndDate = childSnapshot.val().DateTime;
                var userMail = childSnapshot.val().Email;
                var userPhone = childSnapshot.val().Phone;

                $("#Result").append(titletemp + "\n\r");
                $("#Result").append(eventLink + "\n\r");
                $("#Result").append(loctemp + "\n\r");
                $("#Result").append(userName + "\n\r");
                $("#Result").append(eventStartDate + "\n\r");
                $("#Result").append(eventEndDate + "\n\r");
                $("#Result").append(userMail + "\n\r");
                $("#Result").append(userPhone+ "\n\r");
            })
        })
    })
}