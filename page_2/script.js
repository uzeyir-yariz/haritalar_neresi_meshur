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
    // var bölge = Selected_picture;

    let ft1 = document.getElementById("ftb_1"),
    ft2 = document.getElementById("ftb_2"),
    ft3 = document.getElementById("ftb_3");

    /* pict.forEach((picture) => {
      if (picture.getAttribute("title") === Selected_picture) {
        picture.style.backgroundColor = "green";
      }
    }); */
    
    
    if (userAnswer === Correct_answer) {
      alert("tebrikler, doğru cevap!");
      // bölge.backgroundColor  = 'blue';
      // bölge.body.style.backgroundColor = 'red';
      // Selected_picture.setAttribute("class" , "bg-color");

      if(ft1.getAttribute("title") === Selected_picture){
        ft1.style.backgroundColor = "green";
      }else if(ft2.getAttribute("title") === Selected_picture){
        ft2.style.backgroundColor = "green";
      }else if(ft3.getAttribute("title") === Selected_picture){
        ft3.style.backgroundColor = "green";
      }
      
    } else {
      alert("malesef, yanlış cevap! Doğru cevap > " + Correct_answer);
      if(ft1.getAttribute("title") === Selected_picture){
        ft1.style.backgroundColor = "red";
      }else if(ft2.getAttribute("title") === Selected_picture){
        ft2.style.backgroundColor = "red";
      }else if(ft3.getAttribute("title") === Selected_picture){
        ft3.style.backgroundColor = "red";
      }
    }
  }
  