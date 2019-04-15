# grep 2
**Category:** general
> This one is a little bit harder. Can you find the flag in /problems/grep-2_2_413a577106278d0711d28a98f4f6ac28/files on the shell server? Remember, grep is your friend.

---

Koneksikan dengan server challenge menggunakan `ssh`
```bash
ssh yourusername@2018shell.picoctf.com
```

Pada folder `/problems/grep-2_2_413a577106278d0711d28a98f4f6ac28/files` terdapat banyak sekali folder dan file di dalamnya. Untuk mempercepat pencarian flag kita bisa menggunakan perintah rekursif `grep`.

```bash
grep -R picoCTF
```


flag : `picoCTF{grep_r_and_you_will_find_8eb84049}`