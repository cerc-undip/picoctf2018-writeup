# Reading Between the Eyes
**Category:** forensic
> Stego-Saurus hid a message for you in this image, can you retreive it?

file : [Download](https://2018shell.picoctf.com/static/9129761dbc4bf494c47429f85ddf7434/husky.png)

---

Disediakan 1 file gambar anjing berekstensi `.png`. Setelah dilakukan mencoba menggunakan `strings`, `file`, `stegsolve.jar`, `exiftool`, dkk tidak bisa menemukan flag. Namun setelah menggunakan tools `zsteg` _fortunately_ kita dapatkan flag-nya.

[Download zsteg](https://github.com/zed-0xff/zsteg)

```bash
zsteg husky.png
```

![](./ss01.png)

flag : `picoCTF{r34d1ng_b37w33n_7h3_by73s}`