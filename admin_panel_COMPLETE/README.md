# admin panel
**Category:** forensic
> We captured some traffic logging into the admin panel, can you find the password?

file : [Download](https://2018shell.picoctf.com/static/19129d64f5676ff5661da65b9772aff5/data.pcap)

---

Untuk menyelesaikan challenge ini saya menggunakan tools `tcpflow`. Soal jenis _packet capture_ juga bisa diselesaikan dan juga umumnya menggunakan [Wireshark](https://www.wireshark.org/).

```
data.pcap: tcpdump capture file (little-endian) - version 2.4 (Ethernet, capture length 65535)
```

Langsung saja buat folder untuk output dan ekstrak paket TCP-nya.

```bash
mkdir out
tcpflow -r data.pcap -o out
cd out
```

Terdapat banyak paket yang berhasil diekstrak. Untuk lebih mudah mencari flag kita gunakan perintah `grep`.

```bash
grep -R pico
```

flag : `picoCTF{n0ts3cur3_894a6546}`