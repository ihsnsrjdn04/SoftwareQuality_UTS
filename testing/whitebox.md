# White Box Testing

## Definisi
White Box Testing adalah metode pengujian yang dilakukan dengan melihat dan memahami struktur kode program. Pengujian ini fokus pada logika, alur program, dan proses internal sistem.

---

## Penerapan pada Sistem CBT
Pengujian dilakukan pada bagian kode JavaScript, khususnya pada controller dan fungsi logika sistem.

---

## Controller / Fungsi yang diuji
- AuthController → login & registrasi  
- ExamController → token ujian & perhitungan nilai  
- AdminController → kelola soal & user  

---

## Struktur Data yang digunakan
- user  
- soal  
- jawaban  
- nilai  

---

## Tujuan
- Memastikan logika program berjalan dengan benar  
- Memastikan proses penyimpanan data sesuai  
- Memastikan perhitungan nilai akurat  

---

## Contoh

### 1. Login
Jika email dan password benar:
- user masuk ke dashboard  

Jika salah:
- sistem menampilkan error  

---

### 2. Token Ujian
Jika token = CBT2024:
- ujian dimulai  

Jika salah:
- muncul error  

---

### 3. Perhitungan Nilai
Jika jawaban benar:
- nilai dihitung (correct / total * 100)  
- hasil ditampilkan  

---

### 1. Desk Checking
Modul Login (script.js)

Hasil Desk Checking

| Input Email                               | Input Password | Output         |
| ----------------------------------------- | -------------- | -------------- |
| [admin@gmail.com](mailto:admin@gmail.com) | password123    | Login berhasil |
| [admin@gmail.com](mailto:admin@gmail.com) | salah          | Login gagal    |
| [user@gmail.com](mailto:user@gmail.com)   | password123    | Login gagal    |
| kosong                                    | kosong         | Login gagal    |


Kesimpulan: Logika percabangan berjalan sesuai kebutuhan.
### 2. Code Walkthrough
Fungsi startExam()
Alur Program
User memasukkan token.
Sistem membandingkan token dengan "CBT2024".
Jika sesuai → return true.
Jika tidak sesuai → return false.

Hail walkthrough
| Skenario    | Hasil |
| ----------- | ----- |
| Token benar | true  |
| Token salah | false |

3. Formal Inspection
Temuan Kode
Fungsi calculateScore()
export function calculateScore(correct, total){

    return Math.round((correct / total) * 100);
   
}
Potensi Bug

Jika:

calculateScore(5,0)

akan menghasilkan:

Infinity

Rekomendasi

if(total === 0){
    return 0;
}

