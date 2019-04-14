# Crypto Warmup 1
**Category:** cryptography
> Crpyto can often be done by hand, here's a message you got from a friend, `llkjmlmpadkkc` with the key of `thisisalilkey`. Can you use this [table](https://2018shell.picoctf.com/static/473ce9eaadee554c711c65632bbca320/table.txt) to solve it?.

---

Ciphertext dari challenge ini dibentuk menggunakan sandi _Vigenere_ ([baca disini](https://id.wikipedia.org/wiki/Sandi_Vigen%C3%A8re)). Untuk melakukan decoding kita hanya perlu melihat huruf-huruf yang bersinggungan antara setiap huruf di _plaintext_ dengan _key_. Untuk lebih cepatnya bisa menggunakan tools online https://www.dcode.fr/vigenere-cipher.

flag : `picoCTF{SECRETMESSAGE}`

# Crypto Warmup 2
**Category:** cryptography
> Cryptography doesn't have to be complicated, have you ever heard of something called rot13? cvpbPGS{guvf_vf_pelcgb!}

---

Ciphertext dari challenge ini dibentuk menggunakan sandi _ROT13_ ([baca disini](https://id.wikipedia.org/wiki/ROT13)). Untuk melakukan decoding kita hanya perlu melakukan pergeseran huruf abjad sebanyak 13 kali untuk setiap huruf pada _ciphertext_. Untuk lebih cepatnya bisa menggunakan tools online https://www.rot13.com/.

flag : `picoCTF{this_is_crypto!}`