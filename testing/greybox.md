# Grey Box Testing

## Definisi
Grey Box Testing adalah metode pengujian yang merupakan kombinasi antara Black Box dan White Box Testing. Tester mengetahui sebagian struktur sistem, seperti penyimpanan data dan alur sistem, tetapi tidak seluruh kode program.

---

## Penerapan pada Sistem CBT
Tester mengetahui:
- sistem menggunakan localStorage sebagai penyimpanan data  
- alur sistem dari login → ujian → perhitungan nilai  

---

## Contoh Pengujian

### 1. Login
Input: email & password  
Proses: sistem menyimpan data user di localStorage  
Output: berhasil login  

---

### 2. Ujian
Input: token ujian (CBT2024)  
Proses: sistem memvalidasi token dan memulai ujian  
Output: halaman ujian tampil  

---

### 3. Penyimpanan Jawaban
Input: memilih jawaban  
Proses: jawaban disimpan ke localStorage  
Output: data tersimpan  

---

### 4. Perhitungan Nilai
Input: submit ujian  
Proses: sistem menghitung jumlah jawaban benar  
Output: nilai ditampilkan  
