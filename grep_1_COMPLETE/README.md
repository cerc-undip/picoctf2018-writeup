# grep 1
**Category:** general
> Can you find the flag in file? This would be really obnoxious to look through by hand, see if you can find a faster way. You can also find the file in /problems/grep-1_4_0431431e36a950543a85426d0299343e on the shell server.

file : [Download](https://2018shell.picoctf.com/static/f2e1fdcd5c405ca4170af1a8973b365b/file)

---

Pada challenge ini kita diberika 1 file dengan kumpulan huruf karakter ASCII yang sangat panjang. Untuk menyelesaikannya kita hanya perlu menggunakan perintah `grep` untuk menemukan flag yang kita cari. Cara ini adalah cara yang sangat umum digunakan pada CTF.

```bash
cat file | grep pico
```

flag : `picoCTF{grep_and_you_will_find_d66382d8}`