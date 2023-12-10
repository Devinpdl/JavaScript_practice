from bs4 import BeautifulSoup
import requests
try :
    source = requests.get ('https://dofe.gov.np/Recruting-Agences.aspx#')
    source.raise_for_status ()
    soup = BeautifulSoup(source.text,'html.parser')
    
    agency = soup.find('sfBodyContent',id='DetailshowTable')
    print(agency)

except Exception as e :
    print(e)