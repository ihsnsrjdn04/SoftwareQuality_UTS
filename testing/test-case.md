# Test Case Sistem CBT

---

## 1. Login Berhasil

| ID | TC-01 |
|----|------|
| Deskripsi | Login berhasil |
| Input | Email & password valid |
| Expected | Masuk ke dashboard |

---

## 2. Login Gagal

| ID | TC-02 |
|----|------|
| Deskripsi | Login dengan password salah |
| Input | Email benar, password salah |
| Expected | Muncul pesan error |

---

## 3. Registrasi Berhasil

| ID | TC-03 |
|----|------|
| Deskripsi | Registrasi user |
| Input | Email valid, password ≥ 8 |
| Expected | Akun berhasil dibuat |

---

## 4. Registrasi Gagal

| ID | TC-04 |
|----|------|
| Deskripsi | Input tidak valid |
| Input | Email salah / password pendek |
| Expected | Muncul validasi error |

---

## 5. Input Token Ujian

| ID | TC-05 |
|----|------|
| Deskripsi | Memasukkan token |
| Input | Token CBT2024 |
| Expected | Masuk ke halaman ujian |

---

## 6. Token Salah

| ID | TC-06 |
|----|------|
| Deskripsi | Token tidak valid |
| Input | Token salah |
| Expected | Muncul error |

---

## 7. Mengerjakan Soal

| ID | TC-07 |
|----|------|
| Deskripsi | Menjawab soal |
| Input | Memilih jawaban |
| Expected | Jawaban tersimpan |

---

## 8. Submit Ujian

| ID | TC-08 |
|----|------|
| Deskripsi | Mengakhiri ujian |
| Input | Klik submit |
| Expected | Nilai ditampilkan |

---

## 9. Perhitungan Nilai

| ID | TC-09 |
|----|------|
| Deskripsi | Menghitung skor |
| Input | Jawaban benar |
| Expected | Nilai sesuai hasil |

---

## 10. Ranking

| ID | TC-10 |
|----|------|
| Deskripsi | Menampilkan ranking |
| Input | Data nilai peserta |
| Expected | Urut dari nilai tertinggi |

---

## 11. Akses Dashboard

| ID | TC-11 |
|----|------|
| Deskripsi | Masuk dashboard |
| Input | Login berhasil |
| Expected | Dashboard tampil |

---

## 12. Logout

| ID | TC-12 |
|----|------|
| Deskripsi | Keluar dari sistem |
| Input | Klik logout |
| Expected | Kembali ke halaman login |

---
