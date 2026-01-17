// let metin="Mehaba Javascript"
// let harf=prompt("Harfi giriniz");

// let sonuc=bul(harf);
// alert("Harf Sayısı:"+sonuc);

// function bul(harf){
//     let toplam=0;
//     for(let i=0; i<metin.length; i++){
//         if(metin.charAt(i).toLowerCase()===harf.toLowerCase()){
//             toplam+=1;
//         }
//     }
//     return toplam;
// }




// sesssiz harf sayısını bulma
let sonuc = sessizHarfSay("Merhaba JavaScript");
alert("Sessiz harf sayısı: " + sonuc);


function sessizHarfSay(metin) {
    let sessizler = "bcçdfgğhjklmnprsştvyz";
    toplam = 0;

    for (let i = 0; i < metin.length; i++) {
        let harf = metin.charAt(i).toLowerCase();

        if (sessizler.includes(harf)) {
            toplam++;
        }
    }
    return toplam;
}