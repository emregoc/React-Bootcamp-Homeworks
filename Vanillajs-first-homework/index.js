//var cardNumber =1000000000000001;
var cardNumber = prompt("Lütfen kart numaranızı giriniz."); // kullanicidan kart numarasi istenildi
function isCreditCardNumberValid(cardNumber){
    var sum = 0; // kart numarasinin toplami icin
    var count=0; // kart numarasi farkliysa 
    var strCard = cardNumber.toString(); // cart numarasi stringe cevrildi girilen degerlere ulasabilmek icin
    if (cardNumber && strCard.length === 16 && !isNaN(cardNumber)) { // cart numarasi icin kontrolelr yapildi
        for (let i = 0; i < strCard.length; i++) { // cart uzunlugu kadar for olusturuldu
            var element = strCard[i]; // her eleman baska bir degiskene atildi
            sum +=parseInt(element); // element degiskeni integer'a cevrilip her rakam toplandi
            if (strCard[i] !== strCard[i+1]) { // kart numarasi esit degilse countu 1 arttir.
                count++; // ilk seferde NaN gibi bir deger ile ilk elemani karsilastirdigi icin 
            }             // count kesinlikle 1 oluyor
        }
        if (count === 1 ) { // count 1 e esitse kart numarasi esittir, 1 den farkliysa zaten buraya girmez
            console.log("Kart numaraları en az bir rakam farklı olmalı"); 
        }
        if (sum < strCard.length ) { // rakam toplamlari 16 dan kucukse uyari verir
            console.log("Kart Numarasının rakamlarının toplamı 16'dan küçük olamaz.")
        }
        if (element % 2 == 1) { //numaranın son hanesinin 2 ye bolumunden kalan bir ise hata verir.
            console.log("Kart Numarasının son hanesi tek olamaz.");
        }
       
    }else{ // kart numarasi 16 hane degilse ve 0 ile baslarsa else calisir
        console.log("Kart Numarası 16 haneden küçük veya büyük olamaz veya Sıfır ile başlayamaz.");
    }

}

isCreditCardNumberValid(cardNumber);