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
}

function showQuestion_marmara() {
  document.getElementById("Question_text").textContent = Questions.marmara["question"];
  document.getElementById("choise").innerHTML = "";

  Questions.marmara["choices"].forEach((choice) => {
    const li = document.createElement("li");
    const input = document.createElement("input");

    input.type = "radio";
    input.name = "choice";
    input.value = choice;

    li.appendChild(input);
    li.appendChild(document.createTextNode(choice));

    document.getElementById("choise").appendChild(li);
  });

  document.getElementById("Submit").innerHTML = "Gönder";
  document.getElementById("Submit").onclick = checkAnswer_marmara;

  CSS_btn();
}

function checkAnswer_marmara() {
  const selectedAnswer = document.querySelector('input[name="choice"]:checked').value;
  const correctAnswer = Questions.marmara.answer;

  if (selectedAnswer === correctAnswer) {
    alert("Tebrikler, doğru cevap!");
    console.log("doğru cevap");
  } else {
    alert("Maalesef, yanlış cevap.");
    console.log("yanlış cevap");
  }
}

/* ayrım bölgesi ---------------------------------------*/

function showQuestion_ege(){
  document.getElementById("Question_text").textContent = Questions.ege["question"];
  document.getElementById("choise").innerHTML = "";

  Questions.ege["choices"].forEach((choice) => {
    const li = document.createElement("li");
    const input = document.createElement("input");

    input.type = "radio";
    input.name = "choice";
    input.value = choice;

    li.appendChild(input);
    li.appendChild(document.createTextNode(choice));

    document.getElementById("choise").appendChild(li);
  });

  document.getElementById("Submit").innerHTML = "Gönder";
  document.getElementById("Submit").onclick = checkAnswer_ege;
  
  CSS_btn();
}

function checkAnswer_ege() {
  const selectedAnswer = document.querySelector('input[name="choice"]:checked').value;
  const correctAnswer = Questions.ege.answer;

  if (selectedAnswer === correctAnswer) {
    alert("Tebrikler, doğru cevap!");
    console.log("doğru cevap");
  } else {
    alert("Maalesef, yanlış cevap.");
    console.log("yanlış cevap");
  }
}

/* ayrım bölgesi ---------------------------------------*/

function showQuestion_akdeniz() {
  document.getElementById("Question_text").textContent = Questions.akdeniz["question"];
  document.getElementById("choise").innerHTML = "";

  Questions.akdeniz["choices"].forEach((choice) => {
    const li = document.createElement("li");
    const input = document.createElement("input");

    input.type = "radio";
    input.name = "choice";
    input.value = choice;

    li.appendChild(input);
    li.appendChild(document.createTextNode(choice));

    document.getElementById("choise").appendChild(li);
  });

  document.getElementById("Submit").innerHTML = "Gönder";
  document.getElementById("Submit").onclick = checkAnswer_akdeniz;

  CSS_btn();
}

function checkAnswer_akdeniz() {
  const selectedAnswer = document.querySelector('input[name="choice"]:checked').value;
  const correctAnswer = Questions.akdeniz.answer;

  if (selectedAnswer === correctAnswer) {
    alert("Tebrikler, doğru cevap!");
    console.log("doğru cevap");
  } else {
    alert("Maalesef, yanlış cevap.");
    console.log("yanlış cevap");
  }
}

/* ayrım bölgesi ---------------------------------------*/

function showQuestion_güneyDoguAnadolu() {
  document.getElementById("Question_text").textContent = Questions.güneyDoguAnadolu["question"];
  document.getElementById("choise").innerHTML = "";

  Questions.güneyDoguAnadolu["choices"].forEach((choice) => {
    const li = document.createElement("li");
    const input = document.createElement("input");
    
    input.type = "radio";
    input.name = "choice";
    input.value = choice;
    
    li.appendChild(input);
    li.appendChild(document.createTextNode(choice));

    document.getElementById("choise").appendChild(li);
  });

  document.getElementById("Submit").innerHTML = "Gönder";
  document.getElementById("Submit").onclick = checkAnswer_güneyDoguAnadolu;

  CSS_btn();
}

function checkAnswer_güneyDoguAnadolu() {
  const selectedAnswer = document.querySelector('input[name="choice"]:checked').value;
  const correctAnswer = Questions.güneyDoguAnadolu.answer;
  
  if (selectedAnswer === correctAnswer) {
    alert("Tebrikler, doğru cevap!");
    console.log("doğru cevap");
  } else {
    alert("Maalesef, yanlış cevap.");
    console.log("yanlış cevap");
  }
}

/* ayrım bölgesi ---------------------------------------*/

function showQuestion_doguAnadolu() {
  document.getElementById("Question_text").textContent = Questions.doguAnadolu["question"];
  document.getElementById("choise").innerHTML = "";

  Questions.doguAnadolu["choices"].forEach((choice) => {
    const li = document.createElement("li");
    const input = document.createElement("input");

    input.type = "radio";
    input.name = "choice";
    input.value = choice;

    li.appendChild(input);
    li.appendChild(document.createTextNode(choice));

    document.getElementById("choise").appendChild(li);
  });

  document.getElementById("Submit").innerHTML = "Gönder";
  document.getElementById("Submit").onclick = checkAnswer_doguAnadolu;

  CSS_btn();
}

function checkAnswer_doguAnadolu() {
  const selectedAnswer = document.querySelector('input[name="choice"]:checked').value;
  const correctAnswer = Questions.doguAnadolu.answer;

  if (selectedAnswer === correctAnswer) {
    alert("Tebrikler, doğru cevap!");
    console.log("doğru cevap");
  } else {
    alert("Maalesef, yanlış cevap.");
    console.log("yanlış cevap");
  }
}

/* ayrım bölgesi ---------------------------------------*/

function showQuestion_karadeniz() {
  document.getElementById("Question_text").textContent = Questions.karadeniz["question"];
  document.getElementById("choise").innerHTML = "";

  Questions.karadeniz["choices"].forEach((choice) => {
    const li = document.createElement("li");
    const input = document.createElement("input");

    input.type = "radio";
    input.name = "choice";
    input.value = choice;
    
    li.appendChild(input);
    li.appendChild(document.createTextNode(choice));
    
    document.getElementById("choise").appendChild(li);
  });
  
  document.getElementById("Submit").innerHTML = "Gönder";
  document.getElementById("Submit").onclick = checkAnswer_karadeniz;

  CSS_btn();
}

function checkAnswer_karadeniz() {
  const selectedAnswer = document.querySelector('input[name="choice"]:checked').value;
  const correctAnswer = Questions.karadeniz.answer;
  
  if (selectedAnswer === correctAnswer) {
    alert("Tebrikler, doğru cevap!");
    console.log("doğru cevap");
  } else {
    alert("Maalesef, yanlış cevap.");
    console.log("yanlış cevap");
  }
}

/* ayrım bölgesi ---------------------------------------*/

function showQuestion_anadolu() {
  document.getElementById("Question_text").textContent = Questions.anadolu["question"];
  document.getElementById("choise").innerHTML = "";

  Questions.anadolu["choices"].forEach((choice) => {
    const li = document.createElement("li");
    const input = document.createElement("input");

    input.type = "radio";
    input.name = "choice";
    input.value = choice;

    li.appendChild(input);
    li.appendChild(document.createTextNode(choice));

    document.getElementById("choise").appendChild(li);
  });

  document.getElementById("Submit").innerHTML = "Gönder";
  document.getElementById("Submit").onclick = checkAnswer_anadolu;

  CSS_btn();
}

function checkAnswer_anadolu() {
  const selectedAnswer = document.querySelector('input[name="choice"]:checked').value;
  const correctAnswer = Questions.anadolu.answer;

  if (selectedAnswer === correctAnswer) {
    alert("Tebrikler, doğru cevap!");
    console.log("doğru cevap");
  } else {
    alert("Maalesef, yanlış cevap.");
    console.log("yanlış cevap");
  }
}
