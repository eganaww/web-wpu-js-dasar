let tanya = true;

while (tanya) {
    let player = prompt('Selamat Datang di Suit Jawa \n (gajah,semut,orang)');
    const pilihan = ['gajah', 'semut', 'orang'];

    var rand = Math.random();
    let computer = rand;

    if (computer < 0.34) {
        computer = pilihan[0];
    } else if (computer >= 0.34 && computer < 0.67) {
        computer = pilihan[1];
    } else {
        computer = pilihan[2];
    }

    // Hasil Suwit JAWA

    var hasil;
    if (player === computer) {
        hasil = 'SERI';
    } else if (player === pilihan[0]) {
        hasil = (computer == pilihan[2]) ? 'MENANG' : 'KALAH';
    } else if (player === pilihan[1]) {
        hasil = (computer == pilihan[0]) ? 'MENANG' : 'KALAH';
    } else if (player === pilihan[2]) {
        hasil = (computer == pilihan[1]) ? 'MENANG' : 'KALAH';
    } else {
        hasil = 'SALAH';
    }

    alert(`Pilihan kamu adalah ${player} dan Computer adalah ${computer} \nHasilnya adalah ${hasil}`);
    
    tanya = confirm('Mau main lagi?');

}

alert('TERIMAKASIH YA TELAH BERMAIN!!!!');
