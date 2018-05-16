

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
