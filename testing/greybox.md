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

# Gray Box Testing

## Definisi

Gray Box Testing adalah metode pengujian yang menggabungkan pendekatan Black Box Testing dan White Box Testing. Penguji memiliki pengetahuan sebagian mengenai struktur internal sistem sehingga pengujian dapat dilakukan lebih efektif.

---

# Model Pengujian Gray Box Testing

```text
Gray Box Testing
├── Orthogonal Array Testing
├── Matrix Testing
├── Regression Testing
└── Pattern Testing
```

---

## 1. Orthogonal Array Testing

### Objek Uji : Login dan Token Ujian

| Email | Password | Token | Hasil |
|---------|----------|---------|---------|
| Valid | Valid | Valid | Berhasil |
| Valid | Tidak Valid | Valid | Login gagal |
| Tidak Valid | Valid | Valid | Login gagal |
| Tidak Valid | Tidak Valid | Tidak Valid | Gagal |

### Tujuan

Mengurangi jumlah kombinasi pengujian tanpa mengurangi cakupan pengujian.

---

## 2. Matrix Testing

### Relasi Antar Modul Sistem CBT

| Modul | Login | Soal | Nilai | User |
|---------|---------|---------|---------|---------|
| Login | ✓ | - | - | ✓ |
| Soal | - | ✓ | ✓ | - |
| Nilai | - | ✓ | ✓ | - |
| User | ✓ | - | - | ✓ |

### Tujuan

Memastikan integrasi antar modul berjalan dengan baik.

---

## 3. Regression Testing

### Objek Uji : calculateScore()

```javascript
export function calculateScore(correct,total){
    if(total <= 0){
        return 0;
    }

    return Math.round((correct/total)*100);
}
```

### Test Case

| Correct | Total | Hasil |
|----------|---------|---------|
| 5 | 10 | 50 |
| 8 | 10 | 80 |
| 10 | 10 | 100 |
| 5 | 0 | 0 |

### Hasil

Perbaikan bug pembagian dengan nol berhasil dilakukan dan tidak memengaruhi fungsi lainnya.

---

## 4. Pattern Testing

### Pola Kesalahan yang Ditemukan

| Pola Error | Penyebab |
|------------|------------|
| Login gagal berulang | Password salah |
| Token ditolak | Token tidak sesuai |
| Nilai Infinity | Total = 0 |
| Soal gagal ditambah | Input null |

### Solusi

- Menambahkan validasi token.
- Menambahkan validasi input soal.
- Menambahkan validasi pembagian pada perhitungan nilai.
- Menampilkan pesan error yang informatif.

---

# Ringkasan Hasil Gray Box Testing

| Metode | Status |
|---------|---------|
| Orthogonal Array Testing | Lulus |
| Matrix Testing | Lulus |
| Regression Testing | Lulus |
| Pattern Testing | Lulus |

---
