var dbPromised = idb.open("teams", 1, function(upgradeDb) {
    var ObjectStore = upgradeDb.createObjectStore("teamlist", {
      keyPath: "id"
    });
    ObjectStore.createIndex("name", "name", { unique: false });
});

function saveIDB(data) {
    dbPromised
      .then(function(db) {
        var tx = db.transaction("teamlist", "readwrite");
        var store = tx.objectStore("teamlist");
        console.log(data);
        store.add(data);

        return tx.complete;
      })
      .then(function() {
        console.log("Artikel berhasil di simpan.");
      });
}

function getAll() {
    return new Promise(function(resolve, reject) {
      dbPromised
        .then(function(db) {
          var tx = db.transaction("teamlist", "readonly");
          var store = tx.objectStore("teamlist");
          return store.getAll();
        })
        .then(function(articles) {
          resolve(articles);
        });
    });
}