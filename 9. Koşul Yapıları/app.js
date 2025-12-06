//Koşul yapıları



// let yas=54;


// if(yas>=18);
// {
// console.log("ehliyet alabilir");
// }
// lelse
// {
//     console.log("Alamaz");
// }





// let yas = Number(prompt("Yaşınız: "));
// let para = Number(prompt("Bütçeniz: "));

// if (yas >= 18 && para >= 300) {
//     alert("Ehliyet Sınavına katılabilirsin");
// }
// else {
//     alert("Katılamazsın");
// }





// Ders Ortalamsı bulma

// vize%30, vize2 %30 ,final %40

// let vize1 = Number(prompt("Vize 1 Notunuzu Giriniz"));
// let vize2 = Number(prompt("Vize 2 Notunuzu Giriniz"));
// let final = Number(prompt("Final Notunuzu Giriniz"));

// let ortalama = (vize1 * 0.3) + (vize2 * 0.3) + (final * 0.4);

// if (ortalama >= 60) {
//     alert("Dersten geçtiniz");
// }
// else {
//     alert("Kladınız,geçmiş olsun");
// }





// ÇOKLU İF KULLANIMI


let ad = promt("İsminizi Giriniz");
let tckn = prompt("TCKN giriniz");

kontrolEt(ad, tckn);

function kontrolEt(ad, tckn) {
    if (ad != "") {
        if (tckn.length == 11) {
            console.log("İsim ve tckn pronlemsiz girildi");
        }
        else {
            console.log("Lütfen tc nizi 11 karakter olarak giriniz")

        }
    } else {
        console.log("Lütfen isim alanını boş bırakmayın");
    }
}
