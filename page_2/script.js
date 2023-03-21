// nesneler tanımlama
const sorular = {
    FTB_1: {
      soru: "ilk önce hangisi gelir",
      secenekler: ["1", "2"],
      cevap: "1",
    },
    FTB_2: {
      soru: "*evet* makine dilinde ne demek",
      secenekler: ["1", "0"],
      cevap: "1",
    },
    FTB_3: {
      soru: "*hayır* makine dilinde ne demek",
      secenekler: ["0", "1"],
      cevap: "0",
    },
  };
  
  // değişkenleri tanımlama
  var info, Correct_answer, User_answer, Selected_picture, Area, Ques, secenekler;
  
  Area = document.getElementsByTagName("figure");
  for (let i = 0; i < Area.length; i++) {
    Area[i].addEventListener("click", () => {
      Selected_picture = Area[i].getAttribute("title");
      show_ques(Selected_picture);
    });
  }
  
  function show_ques(Selected_picture) {
    info = sorular[Selected_picture];
    Ques = info["soru"];
    secenekler = info["secenekler"];
    Correct_answer = info["cevap"];
  
    document.getElementById("soru_metni").textContent = Ques;
    document.getElementById("list").innerHTML = "";
  
    secenekler.forEach((secenek) => {
      const btn = document.createElement("input");
  
      btn.type = "button";
      btn.name = "new_btn";
      btn.value = secenek;
  
      btn.addEventListener("click", () => {
        User_answer = secenek;
        cevabiKontrolEt(User_answer);
      });
  
      document.getElementById("list").appendChild(btn);
    });
  }
  
  function cevabiKontrolEt(userAnswer) {
    if (userAnswer === Correct_answer) {
      alert("Tebrikler, doğru cevap!");
    } else {
      alert("Maalesef, yanlış cevap! Doğru cevap: " + Correct_answer);
    }
  }
  