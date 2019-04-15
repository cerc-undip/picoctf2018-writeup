# Aca-Shell-A
**Category:** general
> It's never a bad idea to brush up on those linux skills or even learn some new ones before you set off on this adventure! Connect with `nc 2018shell.picoctf.com 27833`.

---

Challenge ini cukup membutuhkan pengetahuan _command_ linux dasar. Cukup perhatikan setiap perintahnya maka akan mengarahkan kita flag.

> Perintah dasar yang dipakai adalah : `ls`, `cd`, `rm`, `echo`, `whoami`, `cp`, `cat`


```
Sweet! We have gotten access into the system but we aren't root.
It's some sort of restricted shell! I can't see what you are typing
but I can see your output. I'll be here to help you along.
If you need help, type "echo 'Help Me!'" and I'll see what I can do
There is not much time left!

~/$ ls
blackmail
executables
passwords
photos
secret

~/$ cd secret
Now we are cookin'! Take a look around there and tell me what you find!

~/secret$ ls
intel_1
intel_2
intel_3
intel_4
intel_5
profile_ahqueith5aekongieP4ahzugi
profile_ahShaighaxahMooshuP1johgo
profile_aik4hah9ilie9foru0Phoaph0
profile_AipieG5Ua9aewei5ieSoh7aph
profile_bah9Ech9oa4xaicohphahfaiG
profile_ie7sheiP7su2At2ahw6iRikoe
profile_of0Nee4laith8odaeLachoonu
profile_poh9eij4Choophaweiwev6eev
profile_poo3ipohGohThi9Cohverai7e
profile_Xei2uu5suwangohceedaifohs
Sabatoge them! Get rid of all their intel files!

~/secret$ rm intel_*
Nice! Once they are all gone, I think I can drop you a file of an exploit!
Just type "echo 'Drop it in!' " and we can give it a whirl!

~/secret$ echo 'Drop it in!'
Drop it in!
I placed a file in the executables folder as it looks like the only place we can execute from!
Run the script I wrote to have a little more impact on the system!

~/secret$ cd ..

~/$ ls
blackmail
executables
passwords
photos
secret

~/$ cd executables

~/executables$ ls
dontLookHere

~/executables$ ./dontLookHere
 b0ee 0873 faa1 c37e 707a a7e9 8672 5a6d 064f 76a6 3e7c f454 f42a 1c4b 8f3f 6426 59d9 a821 3c53 956d baf7 e6eb ec60 bae8 c115
 c99c 5fb2 b5fc 8f58 f4ce 34d9 a0a6 7a23 caa1 34d1 4e89 29ae ad82 c47c e739 54d4 51e6 fb4c 160e d8d4 c738 8cd7 2473 a03e b572
 0cb0 b1e9 6495 5ba2 d329 7278 f69a 70a2 3fbd 3711 af15 c89d d8aa c57b 9771 be6f b249 0ca6 b472 a178 c79d d14a e50c 981f 1b57
 6c16 0a12 4506 d10e 1bef efd8 512a 93ed 2465 7fae 62fc 5586 ebb3 f457 82a3 834d 7859 1e97 44b0 cdaa 0526 69a4 ed9d f6b2 1bc6
 1657 79c2 99ec b4aa 58ee 0862 4942 e6f6 7567 fd0d f68d e33a 4489 da99 3dba 396c f54d dde9 3096 53c4 39f3 7359 5f2c e4a4 4625
 a576 8535 152f f785 b223 a72c 50c7 febc f55c 2824 a5d5 b34a 6d9e c3fa e68c 59b7 ce93 cea6 0b15 e6d0 7817 f248 921a c423 46a6
 3956 42e0 a920 1521 69a8 7026 4610 87ca 5fc4 17d9 613d 003c 9adb f0f9 9fd4 da74 2c06 d3d3 2b9d af4b 4f63 b3d1 1e95 c1f6 c58e
 4999 8738 6a61 a0fb 3e1b 55f1 a09e ac6a c8d5 f150 e363 d362 a9e5 8e5a 44ad 3692 4a3b b341 6055 fdb7 a536 aba3 fc05 e57f 118b
 5f65 62a4 b7f6 cdea b970 b5f3 51eb 8961 995d b72e d10f 0718 48de fc76 110c f909 792c ae36 ebcb 21df 53d6 92af 9106 ff99 09e7
 41dc 6ff3 6f9b 94b4 e4c8 4112 9372 8739 c6ae aa9b cb20 bbb0 baf0 800d a8da e5b1 d87e 576a ec45 8d16 e9e0 2579 aa76 8e59 f5fa
 e6c8 c0e5 7892 e222 22a5 e73f 70aa 876a 3163 5370 cec7 13f7 98bc e634 b01e 5b92 8023 6acf fb53 b404 dc37 4883 a3cc b66e 521c
 0014 a715 a4a1 d20f 75b6 b15a 671c 8e21 9972 a8ad 8c05 3b49 86d4 694b c009 bdd3 6120 3ad3 adf2 e86a a84b 1d5c 26c9 3e64 96fb
 5e25 e4ea 2955 42f6 da7c 585c f768 8421 4eb5 0113 52e0 cf63 ff8a b3a9 81c3 3b98 e94d b118 5ac5 0436 0545 6ecb ca75 0c8f 7a96
 97fb d5f7 f863 d44a c44b 7fc7 4714 816b bca5 bddc 6d5e 5ebe 2a76 8bc6 82a3 3f3d 2dcb 1a9f b99c fa3c ea2b c7a8 1f5c 5da2 8d97
 6caf fd3a 0115 1406 0b49 6b33 271d a5c5 193b f4b6 a478 bf36 78bb b34d a2e3 bf41 247d a815 be66 b8ba 13e4 905f e0ef 8cce dfbe
 f7fb 612d 37c2 ce65 87cc ea0f f0a0 fac7 f87c b266 d845 844d 509d 2b34 80d9 e7f1 e4f4 0cb5 7488 901c 39c0 d73f dc0d bbbc cc88
 a1a8 b19f d27b b38b a5a5 3b8a cc74 83af 84c1 bf69 f56a 9073 c614 0086 2a6d 5fcb 3cfb 636a 51b6 de01 3d80 608d bec8 25ed 4581
 c395 0a47 ed7c b4a8 03d8 ade2 8610 5890 fb67 8385 c756 fb53 2b05 8f3c de6d 0b02 b120 586e cc3a 79db 6f4a 42e4 a87a 3aa4 b40b
 09c6 7bbb e294 9278 a0fb e78e 7092 067d a2d8 d0b4 bdb4 ad0d eb8a 054b f56b fe64 a40c 4e2d c212 f8ee bf45 573c ee26 eb13 1a75
 cf2a b1cd 8a1f e051 ee36 972f 2a0b 8ecc b279 f563 d499 3ae7 df3d 9cce f9dd 28f7 b306 8f4b f2c1 b479 c95b 43e0 4f45 aa52 25ca
 e04a f494 a041 81be 5cb6 9b97 c597 4635 e4c2 4c6c 16cc 589f 4382 2b7b d4c3 a14b 8e68 b30b 21b8 20d3 45e9 e1c2 c95c 4663 6e4c
 e9cf cebc 35f5 4436 a017 f4f8 e50a bb59 b391 5daa ae5a dbdf 778d 761e f6f0 f847 611f 7300 72fb 5495 ad66 5db4 f71e 137e f5eb
 61d5 f1b1 4b2d 72d5 3bfd 74a6 8e43 ea24 c9d5 a9ee 65bb 1adc 8035 cbae 9639 7d13 61de 92a3 b7bd 7253 c202 9972 8f8f 1ad3 c21d
 65f9 11c9 7f46 078d 34e0 c9e2 3e59 f987 8bdf 336b 78c5 4d1a a1f1 9344 9edc 562e 5253 c0e7 b369 40af ec26 da7e be1e d3e5 81a5
 1e95 f0ea 193f 2778 64a6 89dc 839d 55f9 373b fdfe fd26 7238 764a c741 9a91 81d4 7cdd 16b0 8658 b3c2 0cbc cf30 ab36 5750 de75
 c589 947d 7b8d c379 a347 15bd a4c7 5cea 3d17 a746 f0ff 07c7 7f2e 5b6b da7a becb 778a 17fe 667e d653 c95d 3ab1 365b 7138 d578
 c8b1 5d97 7fe5 5ef9 a6ae 1210 1af6 54bd cb73 f5f7 07af 7a87 a2bd d388 c650 de88 2674 41e3 205d 720d e18c b400 1b80 eb68 27bc
 a1ae f7ae 57d4 58f9 33de 1610 be11 086c 2b80 2938 8004 ae23 969b 5214 7d9b 886f fe38 3392 186f ee7b b5b4 1f86 4970 02a1 c3c1
 ce90 ca1a a17c 867f c86f a64e 723d cc04 ecc8 d220 7997 c739 d02c 22f0 d4f8 9e9a 72d3 9b66 11ed 3527 1f91 4852 33d6 b2a3 f5c2
 7336 b650 5afe 489a f47a 39c9 f9f7 84c0 15a1 af21 c31d 12ad e1bd 15a6 3fa6 8a2b e0b3 e2e0 b0cd a996 bf6f e7ad c10f 1ff2 e932
 b537 e27b 1227 2ec0 2b0d ad4c f5f3 ef36 a1cf 6f32 912b c1b6 9792 8d53 9d66 e98d e0aa 811d 1818 1fe5 70d5 3d4a 7ab8 57ca 71f8
Looking through the text above, I think I have found the password. I am just having trouble with a username.
Oh drats! They are onto us! We could get kicked out soon!
Quick! Print the username to the screen so we can close are backdoor and log into the account directly!
You have to find another way other than echo!

~/executables$ whoami
l33th4x0r
Perfect! One second!
Okay, I think I have got what we are looking for. I just need to to copy the file to a place we can read.
Try copying the file called TopSecret in tmp directory into the passwords folder.

~/executables$ cp /tmp/TopSecret ../passwords
Server shutdown in 10 seconds...
Quick! go read the file before we lose our connection!

~/executables$ cd ..

~/$ cd passwords

~/passwords$ ls
TopSecret

~/passwords$ cat TopSecret
Major General John M. Schofield's graduation address to the graduating class of 1879 at West Point is as follows: The discipline which makes the soldiers of a free country reliable in battle is not to be gained by harsh or tyrannical treatment.On the contrary, such treatment is far more likely to destroy than to make an army.It is possible to impart instruction and give commands in such a manner and such a tone of voice as to inspire in the soldier no feeling butan intense desire to obey, while the opposite manner and tone of voice cannot fail to excite strong resentment and a desire to disobey.The one mode or other of dealing with subordinates springs from a corresponding spirit in the breast of the commander.He who feels the respect which is due to others, cannot fail to inspire in them respect for himself, while he who feels,and hence manifests disrespect towards others, especially his subordinates, cannot fail to inspire hatred against himself.
picoCTF{CrUsHeD_It_17ab99f5}
```

flag : `picoCTF{CrUsHeD_It_17ab99f5}`