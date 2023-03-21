// obje tanımlama
const Questions = {
  marmara: {
    question: "Hangi iller Marmara Bölgesi'nde yer almaktadır ?",
    choices: ["Ankara", "İstanbul", "İzmir", "Bursa"],
    answer: "İstanbul"
  },
  ege: {
    question: "Hangi şehir, Ege Bölgesinde yer almaz ?",
    choices: ["İzmir", "Aydın", "Bursa", "Denizli"],
    answer: "Bursa"
  },
  akdeniz: {
    question: "Hangi Akdeniz Bölgesi ilimizde bulunmaz ?",
    choices: ["Mersin", "Antalya", "Adana", "İzmir"],
    answer: "İzmir"
  },
  güneyDoguAnadolu: {
    question: "Hangi şehir Güney Doğu Anadolu Bölgesi'nde değildir ?",
    choices: ["Şanlıurfa", "Adıyaman", "Muğla", "Mardin"],
    answer: "Muğla"
  },

  doguAnadolu: {
    question: "Hangi şehir Doğu Anadolu Bölgesi'nde değildir?",
    choices: ["Kars", "Muş", "Şanlıurfa", "Ağrı"],
    answer: "Şanlıurfa"
  },

  karadeniz: {
    question: "Hangi şehir Karadeniz Bölgesi'nde yer almaz ?",
    choices: ["Trabzon", "Ordu", "Kars", "Rize"],
    answer: "Kars"
  },

  anadolu: {
    question: "Hangi İç Anadolu illeri Türkiye'nin tahıl ambarı olarak anılır ?",
    choices: ["Konya", "Ankara", "Kayseri", "Sivas"],
    answer: "Konya"
  }
};

function CSS_btn(){
  var button = document.getElementById("Submit");
  button.classList.add("my-button");
  button.textContent = "Submit";
}

// değişken tanımlama
let info, soru, correctAnswer, secenekler, userAnswer, alanlar, secilenBölge;

// belirlemek
alanlar = document.getElementsByTagName("area");
[...alanlar].forEach((alan /*,index burada index olması gerekirdi*/) => {
    alan.addEventListener("click",() =>{
        secilenBölge = alan.getAttribute("title");
        show_question(secilenBölge);
    });
});

// soruyu göstermek
function show_question(secilenBölge){
    // True -- alert("neredeyim ben " + secilenBölge + " burası"); 

    info = Questions[secilenBölge];

    soru = info["question"];
    secenekler = info["choices"];
    correctAnswer = info["answer"];

    // True -- alert(correctAnswer);

    document.getElementById("Question_text").textContent = soru;
    document.getElementById("choise").innerHTML = "";

    secenekler.forEach((secenek) => {
        const new_li = document.createElement("li");
        const new_input = document.createElement("input");

        new_li.innerHTML = secenek;

        new_input.type = "radio";
        new_input.name = "new_choices"
        new_input.value = secenek;

        new_li.appendChild(new_input);
        document.getElementById("choise").appendChild(new_li);
    });

    CSS_btn();
}

// cevabı kontrol eden düğme
function kontrol(){
    userAnswer = document.querySelector('input[name="new_choices"]:checked').value;

    // true alert("cevabım " + userAnswer);

    if(userAnswer == correctAnswer){
        alert("tebrikler, doğru cevap verdiniz");
    } else{
        alert("malesef, yanlış cevap verdiniz");
    }
}

