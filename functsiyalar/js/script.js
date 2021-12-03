"use strict";
/* KIRISH
Funksiyalar Javascriptning eng asosiy tushunchalaridir biri hisoblanadi. Dasturlashni endi o'raganayotganlar
 uchun Funksiyalar biroz qiyindek tuyulishi mumkin, sababi funksiyalar turli ko'rinishlarda keladi.
  Ushbu maqolada Javascript da funksiyani ta'riflash yo'llari va ularni qo'llanilishni batafsil yoritamiz.

Maqolani yaxshilab o'qib, tushunib, o'zlashtirib olsangiz, keyin React va Angular kabi frameworklarni
 o'rganishingizda katta foyda beradi.

Ushbu maqolani davom ettirishdan avval, Javascript Object haqidagi maqolamni o'qishni tavsiya qilaman.

Funksiya o'zi nima?
Javascript da funksiya, bu buyruqlarni ketma ketlikda bajaradigan sintakslar to'plami desak ham bo'ladi.

Oddiygina Funksiya
Oddiygina funksiya 'function' kalit so'zi, undan keyin funksiyaga berilgan nom, qavs (), va qiyshiq qavs {} dan 
tashkil topadi. Qavs ichiga funksiyada ishlatidagidan parameter lar yoziladi (pastroqda parameter lar haqida), 
qiyshiq qavs {} ichi esa funksiyaning asosiy qismi hisoblanadi, va bajarilishi kerak bo'lgan buyruqlar shuning 
ichida yoziladi. Misolda ko'ramiz */

// FUNCTION DECLARATION - funksiyani yasash, ushbu misolda parameterlarsiz
// Function kalit so'zi funksiyaning nomi bilan birga keladi
// Funksiya nomidan keyin qavs (), ixtiyoriy parameter larni oladi
// Qiyshiq qavs {} ichidagilar esa funksiyaning asosiy qismi hisoblanadi

function sovuq() {
    console.log("Xalqga gaz va elektr bering");
}

// funksiyani ishga tushirish esa uning nomi va qavs ni yozish orqali bo'ladi
sovuq();   // natija => Xalqga gaz va elektr bering


// FUNCTION DECLARATION - 1ta parameter bilan;
// Qavs () 1ta parameter qabul qilgandagi holati
// Backticks orqali `` biz var nomini string ichida ishlata olamiz. 
// `` ichida var nomini ${var_nomi} orqali ishlatish ES6 xususiyatlaridan biri

function bering(xalqmulki) {
    console.log(`Xalqga ${xalqmulki}ni bering`);
}

// bering() funksiyasini ishga tushirish
bering('gaz');   // natija: Xalqga gazni bering

function trendGaplar(trend1, trend2) {
    console.log(`Bu yildagi trend bo'lgan gaplar: ${trend1} va ${trend2}`)
}

trendGaplar('5600 som', 'kop gosht');    // natija: Bu yildagi trend bo'lgan gaplar: 5600 som va kop gosht

/* Funksiya o'zidan biron qiymat ham qaytarishi mumkin, 'return'
Yuqoridagi funksiyalarda funksiya {} ichidagi buyruqlarni bajarganini ko'rdik.
 Endi esa o'zidan value (qiymat) qaytaradigan 'return' funksiyaga qaraymiz. */

// 'color' parameter ni oluvchi oddiy funksiya
function nameFruitByColor(color) {
    if (color === 'red') {
        return 'apple';
    } else if (color === 'yellow') {
        return 'banana';
    } else if (color === 'green') {
        return 'watermelon';
    }
}

// nameFruitByColor funksiyadan qaytadigan qiymatni console da chiqarib berish:
console.log(nameFruitByColor('red'));   // natija: apple
console.log(nameFruitByColor('yellow'));   // natija: banana

/* Yuqoridagan funksiyadan biz oddiygina string value qaytardik (return). Aslida esa,
 nafaqat string, istalgan data, ya'ni string, number, object, boolean, array va boshqalarni return qilsa bo'ladi. */

/* Anonim funksiya
Agar funksiyaning o'ziga nom berilmasdan, funksiya const yoki let ga qiymat qilib berilgan bo'lsa, 
bunday funksiya anonim (Anonymous) funksiya deb nomlanadi. Anonim funksiya variable ga qiymat qilib
berilgan bo'lishi shart. */

// Anonim funksiya yasashda e`tibor berish kerak bo`lgan jihatlar
// Funksiya nomi yozilmaydi
// funksiya 'fullName' variable ga qiymat qilib berilgan

const fullName = function (firstName, lastName) {
    return `The full Name is ${firstName} ${lastName}`
}

// Agar 'fullName' o'zini console.log ichiga qo'ysak,
// bizga butun funksiyani console da chiqarib beradi
console.log(fullName);

// Agar hech qanday parameter siz console.log ga qo`ysak
console.log(fullName()); // natija => 'The Full Name is undefined undefined'

// Agar berilgan parameter larga qiymat berib console.log ga chiqarsak
console.log('John', 'Smith'); // natija => The Full Name is John Smith

/* Yuqoridagi syntax 'function expression' deb ham ataladi. Va 'fullName' ni funksiya nomi deb ham qarasak bo'ladi.

Endi esa, function expression o'zi nega kerak, oddiy funksiya ishlatish yaxshi emasmi degan savol keladi. 
Function expression,bizda funksiya variable da bo'lganligi uchun uni boshqa funksiyaga parameter qilib ishlata olamiz.
 Misol: */
 /* 
 1-qadam
2ta function expression yozib olamiz. 1chisi 2ta raqamni qo`shish uchun, 2chisi 2ta raqamni bir biridan ayirish uchun.
 Ikkala funksiya ham natija qiymatni qaytarishi kerak (return)
 
 2-qadam
Funksiyaga diqqat bilan e'tibor bering, bu yerda 'calculate' funksiyasi oddiy funksiya ko'rinishida,
 lekin 'func' funksiyasini parameter sifatida qabul qilmoqda. 'return' da esa 'func(a, b)' qismida, 
 parameter dagi 'func' funksiyasi ishga tushmoqda.

3-qadam
Endi esa quyidagi code da, bizda 2ta function expression, 'calculateSum' va 'calculateDifference' variable lari mavjud;

Quyidagi kodda 'calculate' funksiyasi 3ta parameter (add funksiyasi, 6 va 4 raqamlari bilan) bilan ishga tushmoqda. 
Funksiyaning natijasi esa 10 bo'ladi.

Quyida esa 'calculate' funksiyasi 'substract' funksiyasini, 6 va 4 raqamlarini parameter sifatida qabul qilmoqda.

Ushbu usul javascriptda AJAX da callback funksiyalarda ko'p ishlatiladi. AJAX da natija success yoki failure bo'lishiga
 qarab.
 */


const add = function (a, b) {
    return a + b;
}


const substract = function (a, b) {
    return a - b;
}
// 2 chi qadam
function calculate(func, a, b) {
    return func(a, b);
}
            //3chi qadam

// bu yerda 2ta funksiya ishga tushmoqda
// 1chi bo'lib calculate funksiyasi add, 6 4 parameter lari bilan ishga tushmoqda
// 2chi bo'lib esa add funksiyasi 6 va 4 parameterlari bilan ishga tushmoqda
const calculateSum = calculate(add, 6, 4); // calculate va add funksiyalari yuqorida qayd etilgan.

console.log(calculateSum); // natija => 10

const calculateDifference = calculate(substract, 6, 4);

console.log(calculateDifference);  // natija => 2


// Nested (Ichki) Funksiyalar
/* Nested (ichki) funksiyalar o'zining ichida boshqa bir va bir nechta funksiya bo'lgan funksiyalardir. */

// 'myWorld' nomli oddiy funksiya o'z ichida 2ta ichki funksiyasi bor

function myWorld() {

    // Hobbilarni ko'rsatuvchi ichki funksiya
     function myHobbies() {
       console.log('Coding and Reading');
     }
 
     // Bank balansini ko'rsatuvchi ichki funksiya
      function myBankBalance() {
        console.log('Hisobingizda mablag yetarli emas');
      }
 
     myHobbies();
 
  }
 
 // tashqi funksiyani ishga tushirish, uning ichidagi myHobbies funksiyasini ishga tushiradi
 myWorld(); // natija => Coding and Reading
 
 // quyidagi esa xato beradi => Cannot read property, chunki myBankBalance ichki funksiya bo'lganligi uchun
 myWorld().myBankBalance();

 //Immediately Invoked Function Expression (IIFE, o'qilishi 'iffy')
 /* FFE anonim function expression hisoblanadi, va funksiya yasalishi bilan darrov o'zi ishga tushadi.
  IFFE ni quyudagicha yozish mumkin: */

  // 1-sintaks
(function(parameter){
    //ishga tushishi kerak bo'lgan kod
}());

// 2-sintaks
(function(param){
    //ishga tushishi kerak bo'lgan kod
})();

(function() {
    console.log('Say Hello');
}());

 
