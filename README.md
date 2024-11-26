![Screenshot 2024-11-26 230857](https://github.com/user-attachments/assets/f13ca112-4ee2-404e-a1ab-e9789ae1bd10)# LabMobile8_Rifqi-Alrasid_C
projek ke-3 ionic


# SCREENSHOT APLIKASI
![Screenshot 2024-11-26 223016](https://github.com/user-attachments/assets/7b9476d3-34d2-4932-a741-1e287804638c)
![Screenshot 2024-11-26 223054](https://github.com/user-attachments/assets/a0e79172-09cd-45e2-bc64-51ebca0499f0)
![Screenshot 2024-11-26 223133](https://github.com/user-attachments/assets/2b890439-2bf5-4160-b4cf-ce17e6fd0b88)
![Screenshot 2024-11-26 223152](https://github.com/user-attachments/assets/cba62895-446e-4b52-810b-28bb6ac9639c)

# SCREENSHOT CRUD BESERTA PENJELASAN
READ (Tampil Data)
![Screenshot 2024-11-26 230637](https://github.com/user-attachments/assets/0fa37861-ed21-4735-b691-39fb900fcdfe)
![Screenshot 2024-11-26 230652](https://github.com/user-attachments/assets/0eea6bbc-2b47-44aa-b23b-8ab3aee88b44)

- Panggil getMahasiswa() saat halaman dimuat
- Tampilkan data menggunakan *ngFor
- Setiap data ditampilkan dalam ion-card

CREATE (Tambah Data)
![Screenshot 2024-11-26 230749](https://github.com/user-attachments/assets/ce80ecb7-0242-449f-9436-693f0ef2922c)

- Gunakan modal untuk input
- Trigger tambahMahasiswa()
- Kirim data ke API via service
- Refresh list setelah berhasil

DELETE (Hapus Data)
![Screenshot 2024-11-26 230857](https://github.com/user-attachments/assets/0c0eaac7-c9d2-4d1e-9f01-9d405acb7f67)
- Button hapus di setiap item
- Panggil hapusMahasiswa(id)
- Konfirmasi & hapus via API
- Refresh list

UPDATE (Edit Data)

![Screenshot 2024-11-26 230836](https://github.com/user-attachments/assets/ee037bb0-3816-4918-aa54-1d96c4938182)
- Button edit di setiap item
- Buka modal edit
- Ambil data dengan ambilMahasiswa(id)
- Edit & simpan dengan editMahasiswa()
- Refresh list
