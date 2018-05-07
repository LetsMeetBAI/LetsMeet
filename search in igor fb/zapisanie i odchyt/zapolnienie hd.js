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

function findevent(title,loc){
    $('#find_button').click(function(){
        rootRef.orderByChild("Location").equalTo($('#Location').val()).on('value',function(snapshot){
            snapshot.forEach(function(childSnapshot) {

                var titletemp = childSnapshot.val().Title;

                $("#Result").append(titletemp + "\n\r");
            })
        })
    })
}
