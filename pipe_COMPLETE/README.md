# pipe
**Category:** general
> During your adventure, you will likely encounter a situation where you need to process data that you receive over the network rather than through a file. Can you find a way to save the output from this program and search for the flag? Connect with `2018shell.picoctf.com 44310`.

---

Jika kita melakukan _netcat_ ke alamat dan port `2018shell.picoctf.com 44310` kita akan mendapatkan output string yang cukup banyak. Untuk mempermudah pencarian flag maka kita bisa menggunakan perintah `grep`.

```bash
nc 2018shell.picoctf.com 44310 | grep pico
```

flag : `picoCTF{almost_like_mario_a13e5b27}`