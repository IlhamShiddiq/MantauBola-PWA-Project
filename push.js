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
   "endpoint": "https://fcm.googleapis.com/fcm/send/du4_kDR3QR0:APA91bGrcdCS_uTIsMi7c7XBmsL7UKz2pveE8k4-ZAv76p-eYW4kMNX3wMRpBVpPLDkqDrzul_bMVg-AD230fPrpZtqgQ4HoipA-r5GNOdF1KE40e_6pNbm1hM1bjOHlvNlZRI-q5IZ-",
   "keys": {
       "p256dh": "BC6UCNi+MS8M3l/hj+iSfIbAQdossZwUgq2oIa3O4NfJ7/7eoL8w9WueE1BLQRQmSk+cFy6Y+vM4ePe/g0038iA=",
       "auth": "LRiJoGAwD1DncLUDDcuyRg=="
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