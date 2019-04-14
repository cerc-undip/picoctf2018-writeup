# Reversing Warmup 1
**Category:** reverse engineering
> Throughout your journey you will have to run many programs. Can you navigate to /problems/reversing-warmup-1_2_a237211c4be8902c67102f827027e633 on the shell server and run this program to retreive the flag?

file : [Download](https://2018shell.picoctf.com/static/143bc640105d2b0befaa66f5a87cd085/run)

---

Pada reverse 1, kita diberikan 1 buah file binary. Langsung saja kita ubah menjadi _executable_ lalu jalankan.

```bash
chmod +x run
./run
```

flag : `picoCTF{welc0m3_t0_r3VeRs1nG}`

# Reversing Warmup 2
**Category:** reverse engineering
> Can you decode the following string dGg0dF93NHNfczFtcEwz from base64 format to ASCII?

---

Pada reverse 2, kita hanya perlu melakukan _decoding_ terhadap string yang diberikan. Kita bisa melakukannya menggunakan bash.
```bash
echo dGg0dF93NHNfczFtcEwz | base64 -d
```

Kemudian hasilnya dimasukkan kedalam format flag.

flag : `picoCTF{th4t_w4s_s1mpL3}`