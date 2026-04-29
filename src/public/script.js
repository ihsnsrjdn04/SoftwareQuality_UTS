function login(){
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    if(email === "admin@gmail.com" && password === "password123"){
        alert("Login berhasil");
        window.location = "dashboard.html";
    } else {
        alert("Login gagal");
    }
}

function goExam(){
    let token = prompt("Masukkan Token:");
    if(token === "CBT2024"){
        window.location = "exam.html";
    } else {
        alert("Token salah");
    }
}

let score = 0;

function jawab(val){
    score += val;
    alert("Jawaban disimpan");

    let nilai = score * 100;
    alert("Nilai kamu: " + nilai);
}