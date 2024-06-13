var penumpang = ['ega',undefined, 'galih'];

var tambahPenumpang = function (namaPenumpang, penumpang) {
    // Jika Array Kosong
    if (penumpang.length == 0) {
        // tambah Penumpang
        penumpang.push(namaPenumpang);
        return penumpang; // Menampilkan array
    } else {
        for (var i = 0; i < penumpang.length; i++) {
            if (penumpang[i] == undefined) {
                penumpang[i] = namaPenumpang;
                return penumpang;
            } else if (penumpang[i] == namaPenumpang) {
                console.log(`${namaPenumpang} sudah ada di dalam Angkot!`);
                return penumpang;
            } 
        }
        penumpang.push(namaPenumpang);
        return penumpang;
    }
}

var hapusPenumpang = function(namaPenumpang, penumpang){
    // Jika Array kosong
    if(penumpang.length == 0){
        console.log('Angkot kosong!');
        return
    } else {
        for(i = 0; i < penumpang.length; i++){
            if(penumpang[i] == namaPenumpang){
                penumpang[i] = undefined;
                return penumpang;
            } else if (i == penumpang.length -1){
                console.log(`${namaPenumpang} tidak ada dalam angkot!`);
                return penumpang;
            }
        }
        
        return penumpang;
    }
}