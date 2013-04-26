// JSHero

function onBodyLoad (){
	//alert("contacts onBodyLoad has fired!");
	document.addEventListener("deviceready", onDeviceReady, false);
}

function onDeviceReady (){
	//alert("Contacts onDeviceReady has fired!");
	Alert("New Contact John Doe, Plumber");
}

$('#saveContact').click(function(data) {
	alert("saveContact was clicked");
	var contact = navigator.contacts.create();
		contact.displayName = "Plumber";
		contact.nickname = "Plumber";
	var name = new ContactName();
		name.givenName="John";
		name.familyName="Doe";
		contact.name = name;
			contact.save(contactSuccess, contactError);
});

function contactSuccess(contact) {
	alert('Contact Saved');
}

function contactError() {
	alert("Error, contact not saved.");
}