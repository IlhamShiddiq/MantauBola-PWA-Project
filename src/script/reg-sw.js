// REGISTER SERVICE WORKER
if ("serviceWorker" in navigator) {
    window.addEventListener("load", () => {
      navigator.serviceWorker
        .register("/sw.js")
        .then(() => {
          console.log("work!");
        })
        .catch(() => {
          console.log("not work!");
        });
        requestPermission();
    });
  } else {
    console.log("ServiceWorker belum didukung browser ini.");
}

const requestPermission = () => {
  if ('Notification' in window) {
      Notification.requestPermission().then(result => {
          if (result === "denied") {
              console.log("Fitur notifikasi tidak diijinkan.");
              return;
          } else if (result === "default") {
              console.error("Pengguna menutup kotak dialog permintaan ijin.");
              return;
          }
          
          if (('PushManager' in window)) {
              navigator.serviceWorker.getRegistration().then(registration => {
                  registration.pushManager.subscribe({
                      userVisibleOnly: true,
                      applicationServerKey: urlBase64ToUint8Array("BF242A2AjW8_CKBA3UjQeD2dOrSOrZR85UsXPVX5z7U9P618sMuCXt0h4PGSNyAE6WPqEtkA_d5cIH8IG_fwLDM")
                  }).then(subscribe => {
                      console.log('Berhasil melakukan subscribe dengan endpoint: ', subscribe.endpoint);
                      console.log('Berhasil melakukan subscribe dengan p256dh key: ', btoa(String.fromCharCode.apply(
                          null, new Uint8Array(subscribe.getKey('p256dh')))));
                      console.log('Berhasil melakukan subscribe dengan auth key: ', btoa(String.fromCharCode.apply(
                          null, new Uint8Array(subscribe.getKey('auth')))));
                  }).catch(e => {
                      console.error('Tidak dapat melakukan subscribe ', e.message);
                  });
              });
          }
      });
  }
}

const urlBase64ToUint8Array = base64String => {
  const padding = '='.repeat((4 - base64String.length % 4) % 4);
  const base64 = (base64String + padding)
      .replace(/-/g, '+')
      .replace(/_/g, '/');
  const rawData = window.atob(base64);
  const outputArray = new Uint8Array(rawData.length);
  for (let i = 0; i < rawData.length; ++i) {
      outputArray[i] = rawData.charCodeAt(i);
  }
  return outputArray;
}