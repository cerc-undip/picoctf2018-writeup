# Forensics Warmup 2
**Category:** forensic
> Hmm for some reason I can't open this PNG? Any ideas?

file : [Download](https://2018shell.picoctf.com/static/0fde1a3e09824365348827194db9cdde/flag.png)

---

Pada challenge kali ini kita diberikan 1 file gambar berekstensi `.png`. Jika kita buka file ini menggunakan image viewer ataupun `eog` maka kita akan mendapatkan error.

Ketika kita teliti, hal yang menyebabkan error adalah karena ekstensi file dengan jenis file yang sebenarnya tidak sama. Dengan menggunakan perintah `file flag.png` kita akan mendapatkan jenis file sebagai berikut:
```
flag.png: JPEG image data, JFIF standard 1.01, resolution (DPI), density 75x75, segment length 16, baseline, precision 8, 909x190, frames 3
```

Karena jenis file sebenarnya adalah JPEG, maka kita hanya perlu mengganti ekstensinya dengan `.jpg` ataupun `.jpeg`.

flag : `picoCTF{extensions_are_a_lie}`