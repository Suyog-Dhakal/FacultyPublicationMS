# from selenium import webdriver
# from selenium.webdriver.common.keys import Keys
# from selenium.webdriver.common.by import By

# driver = webdriver.Firefox()
# driver.get("http://www.python.org")
# assert "Python" in driver.title
# elem = driver.find_element(By.NAME, "q")
# elem.clear()
# elem.send_keys("pycon")
# elem.send_keys(Keys.RETURN)
# assert "No results found." not in driver.page_source
# driver.close()

from cgitb import text
import json
from lib2to3.pgen2 import driver
from django import urls
from selenium.webdriver.chrome.service import Service
from selenium import webdriver
from selenium.webdriver.common.by import By

serv_obj = Service("C:\Program Files (x86)\chromedriver.exe")
driver = webdriver.Chrome(service=serv_obj)

driver.get("https://www.researchgate.net/profile/Aman-Shakya")
driver.maximize_window()

driver.find_element(By.PARTIAL_LINK_TEXT, "Publications").click()
#nova-legacy-v-publication-item__title
publications = driver.find_elements(By.CSS_SELECTOR, "div.nova-legacy-v-publication-item__title")
print(len(publications))
# print(type(publications))
list_of_pub = []
list_of_link = []

#links = driver.find_elements(By.CSS_SELECTOR, "div.nova-legacy-v-publication-item__title")
#print(links[1].get_attribute('itemprop'))
for publication in publications:
    #print(publication.text)
    list_of_pub.append(publication.text)
    link = publication.find_element(By.CSS_SELECTOR, ".nova-legacy-e-link--theme-bare")
    list_of_link.append(link.get_attribute('href'))
    #print(link.get_attribute('href'))


# print(list_of_pub)
# print(list_of_link)

pub_list_in_json = json.dumps(list_of_pub, indent= 10)
print(pub_list_in_json)
with open('publication_list.json', 'w') as f:
    json.dump(list_of_pub,f)

link_list_in_json = json.dumps(list_of_link, indent= 10)
print(link_list_in_json)
with open('link_list.json', 'w') as f:
    json.dump(list_of_link, f)







#print(publications[1].text)

