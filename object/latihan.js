// Membuat Object Angkot
function Angkot(supir,trayek,penumpang,kas){
    this.supir =  supir;
    this.trayek = trayek;
    this.penumpang  = penumpang;
    this.kas = kas;

    this.penumpangNaik = function(namaPenumpang){
        this.penumpang.push(namaPenumpang);
        return this.penumpang;
    }

    this.penumpangTurun = function(namaPenumpang, bayar){
        if(this.penumpang.length === 0){
            alert('ANGKOT MASIH KOSONG!');
            return false
        }

        for(var i = 0; i < this.penumpang.length; i++){
            if(this.penumpang[i] == namaPenumpang){
                this.penumpang[i] = undefined;
                this.kas += bayar;
                return this.penumpang
            }
        }
    }
}

var angkot1 = new Angkot('Ega Nawwarasa',['Cicaheum','Cibiru'], [], 0);
var angkot2 = new Angkot('Budi Naufal',['Antapani','Ciroyom'], [], 0);


