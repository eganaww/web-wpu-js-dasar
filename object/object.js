// Object Literal
var mhs1 = {
    nama :  'Ega  Nawwarasa',
    nrp : '1232331231',
    email : 'example.com',
    jurusan : 'Rekayasa Perangkat Lunak'
}

var mhs2 = {
    nama :  'Budi Naufal',
    nrp : '1232331231',
    email : 'example.com',
    jurusan : 'Teknik Sipil'
}

// Function Declaration
function createMahasiwa(nama,nrp,email,jurusan){
    var mhs = {};
    mhs.nama = nama;
    mhs.nrp = nrp;
    mhs.email = email;
    mhs.jurusan = jurusan;
    return mhs;
}

var mhs3 = createMahasiwa('Sebastian Raffi', '231231233', 'example@email.com','DKV');


// Constructor
function Mahasiswa(nama,nrp,email,jurusan){
    this.nama = nama;
    this.nrp = nrp;
    this.email = email;
    this.jurusan = jurusan;
}

var mhs4 = new Mahasiswa('Atan Alfathar', '2321323123', 'example@email.com', 'Kedokteran');