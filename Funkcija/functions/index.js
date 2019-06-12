'use strict'


const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase);


exports.sendNotification = functions.database.ref('/Notification/{receiver_user_id}/{notification_id}')
.onWrite((data, context) =>
{
	const receiver_user_id = context.params.receiver_user_id;
	const notification_id = context.params.notification_id;


	console.log('We have a notification to send to :' , receiver_user_id);


	if (!data.after.val()) 
	{
		console.log('A notification has been deleted :' , notification_id);
		return null;
	}
	
    const TextMessage = admin.database().ref(`/Notification/${receiver_user_id}/${notification_id}/text`).once('value');
	
	return TextMessage.then(fromUserText=>
	{
		const textMess=fromUserText.val() 
		
		
		
		
		
	const DeviceToken = admin.database().ref(`/Waiters/${receiver_user_id}/devToken`).once('value');
	

	return DeviceToken.then(result => 
	{
		const token_id = result.val();

		const payload = 
		{
			notification:
			{
				title: "Novi poziv",
				body: `${textMess}`,
				icon: "default"
			}
		};

		return admin.messaging().sendToDevice(token_id, payload)
		.then(response => 
			{
				console.log('This was a notification feature.');
			});
	});
	
	
});
	

});