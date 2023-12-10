from bs4 import BeautifulSoup
import requests
try :
    source = requests.get (' https://www.imdb.com/chart/top123456/')
    source.raise_for_status ()
    soup = BeautifulSoup(source.text,)
except Exception as e :
    print(e)