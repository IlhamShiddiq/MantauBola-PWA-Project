import idb from "./idb.js";

const dbPromised = idb.open("teams", 1, upgradeDb => {
    const ObjectStore = upgradeDb.createObjectStore("teamlist", {
      keyPath: "id"
    });
});

const saveIDB = data => {
    dbPromised
      .then(db => {
        const tx = db.transaction("teamlist", "readwrite");
        const store = tx.objectStore("teamlist");
        store.put(data);

        return tx.complete;
      })
      .then(() => {
        console.log("Artikel berhasil di simpan.");
        M.toast({html: 'Team ditambah ke daftar favorit'});
      });
}

const deleteTeam = data => {
    dbPromised.then(db => {
        const tx = db.transaction('teamlist', 'readwrite');
        const store = tx.objectStore('teamlist');
        store.delete(data.id);
        return tx.complete;
      }).then(() => {
        console.log('Team dihapus');
        M.toast({html: 'Team dihapus dari daftar favorit'});
      });
}

const getAll = () => {
    return new Promise((resolve, reject) => {
      dbPromised
        .then(db => {
          const tx = db.transaction("teamlist", "readonly");
          const store = tx.objectStore("teamlist");

          return store.getAll();
        })
        .then(datanya => {
          resolve(datanya);
        });
    });
}

const checkingIDB = id => {

  return new Promise((resolve, reject) => {
    dbPromised
      .then(db => {
        const tx = db.transaction("teamlist", "readonly");
        const store = tx.objectStore("teamlist");

        return store.get(id);
      })
      .then(datanya => {
        resolve(datanya)
      });
  });
}

export {
  saveIDB,
  deleteTeam,
  getAll,
  checkingIDB
};