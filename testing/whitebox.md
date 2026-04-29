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
