var webPush = require('web-push');
 
const vapidKeys = {
   "publicKey": "BF242A2AjW8_CKBA3UjQeD2dOrSOrZR85UsXPVX5z7U9P618sMuCXt0h4PGSNyAE6WPqEtkA_d5cIH8IG_fwLDM",
   "privateKey": "rYuGd9xV4n9y7ptMjOE5t9yK7j5mVDuBM-ZKeNQUy0E"
};
 
 
webPush.setVapidDetails(
   'mailto:example@yourdomain.org',
   vapidKeys.publicKey,
   vapidKeys.privateKey
)
var pushSubscription = {
   "endpoint": "https://fcm.googleapis.com/fcm/send/ddo9DNe0Tlw:APA91bF6Y9El9k5Lo8aHpx9OQUCpKeJIMXZapG3XUXRNe28NUX7wgXOUQ_tPmH7Ad_98H9IzdnAL4tsRUXsRS7OtX-RAmVdDlzW91z3Z2B6s36mTbeabdRKus99Cx9VfClzRethWgpj2",
   "keys": {
       "p256dh": "BBASfoPdzeyd/aG2znWF6IrdXzIeMeg3RP799520mDXZ4xP1OBrzPuiupMRJRHYx9hdPlBxXlsf7yWKoOQ+jPcg=",
       "auth": "UNrN74MIioMuMUDbquUhIQ=="
   }
};
var payload = 'Notifikasi Aktif!';
 
var options = {
   gcmAPIKey: '25471312385',
   TTL: 60
};
webPush.sendNotification(
   pushSubscription,
   payload,
   options
);