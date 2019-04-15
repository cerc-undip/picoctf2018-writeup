# strings
**Category:** general
> Can you find the flag in this file without actually running it? You can also find the file in /problems/strings_2_b7404a3aee308619cb2ba79677989960 on the shell server.

file : [Download](https://2018shell.picoctf.com/static/22ef75638cf590f5fad3db45463883bb/strings)

---

Pada challenge kali ini kita diberikan 1 buah file binary _ELF 64-bit LSB executable_. Jika kita jalankan file ini, maka akan menampilkan pesan

```
Have you ever used the 'strings' function? Check out the man pages!
```

Dari sini kita bisa tahu bahwa kita hanya perlu menggunakan perintah `strings` dan mencari flag-nya dengan mudah. Cara ini merupakan cara yang sangat umum digunakan pada CTF.

```bash
strings strings | grep pico
```

flag : `picoCTF{sTrIngS_sAVeS_Time_3f712a28}`