from cgitb import text
import json
from lib2to3.pgen2 import driver
from django import urls
from selenium.webdriver.chrome.service import Service
from selenium import webdriver
from selenium.webdriver.common.by import By
import re
import time

serv_obj = Service("C:\Program Files (x86)\chromedriver.exe")
driver = webdriver.Chrome(service=serv_obj)

driver.get("https://www.researchgate.net/profile/Sanjivan-Satyal/research")
driver.maximize_window()

driver.find_element(By.PARTIAL_LINK_TEXT, "Publications").click()
#nova-legacy-v-publication-item__title
publications = driver.find_elements(By.CSS_SELECTOR, "div.nova-legacy-v-publication-item__title")
print(len(publications))
# print(type(publications))
list_of_link = []

for publication in publications:
    link = publication.find_element(By.CSS_SELECTOR, ".nova-legacy-e-link--theme-bare")
    list_of_link.append(link.get_attribute('href'))

# driver.get(list_of_link[0]+"/citation/download")
# citation = driver.find_element(By.ID, "citation-preview")
# print(citation.text)

list_of_citation = {}

i = 0
for link in list_of_link:
    single_citation = {}
    driver.get(link)
    #driver.get(list_of_link[0])
    #h1.research-detail-header-section__title
    pub = driver.find_element(By.CSS_SELECTOR, "h1.research-detail-header-section__title")


    single_citation["Title"] = pub.text
    single_citation["URL"] = link
    authors = driver.find_elements(By.CSS_SELECTOR, "div.nova-legacy-v-person-list-item__title")
    authorlist=""
    for author in authors:
        authorlist = authorlist + author.text + ", "

    single_citation["Authors"] = authorlist
    citation = driver.find_elements(By.CSS_SELECTOR, "div.nova-legacy-e-text--color-grey-700")
    #single_citation["Publication date"] = citation[0].text
    # print(citation[0].text) 
    # print(citation[1].text) 
    # print(citation[2].text) 
    if driver.find_element(By.CSS_SELECTOR, "div.nova-legacy-c-nav__item-label"):
        single_citation["Total Citations"] = driver.find_element(By.CSS_SELECTOR, "div.nova-legacy-c-nav__item-label").text
    else:
        single_citation["Total Citations"] = 0
    
    #single_citation["Total Citations"] = driver.find_element(By.CSS_SELECTOR, "div.nova-legacy-c-nav__item-label").text
    
    #div.nova-legacy-c-nav__item-label
    # cite = driver.find_element(By.CSS_SELECTOR, "div.nova-legacy-c-nav__item-label").text
    # textOfCitation = "Citations ("
    # substring_in_list = any(textOfCitation in string for string in cite)
    # if(substring_in_list):
    #     h = cite.split("Citations (")[2]
    #     j = h[0]
    #     k = j.split(")")[1]
    #     single_citation["Number of citation"] = k[0]

    driver.implicitly_wait(10)
    driver.get(link+"/citation/download")
    driver.implicitly_wait(10)
    time.sleep(10)
    #div.nova-legacy-e-textarea
    text = driver.find_element(By.CSS_SELECTOR, "div.nova-legacy-e-textarea").text

    

    print(text)



    b= text.split("\n")
    #rint(b)

    a = "JO  - " 
    substring_in_list = any(a in string for string in b)
    if(substring_in_list):

        x = [string for string in b if a in string]
        print(x)
        print(x[0])
        #rint(x[0])
        m = x[0]
        #print(x)


        # Get the string after "th"
        y = m.split("JO  - ", 1 )[1]
        #rint(y)


        # Consider the string

        # Get the string after "th"
        subString =  m.partition("- ")[2]
        #print(subString)
        single_citation["Publisher"] = subString
    else:
        single_citation["Publisher"] = "-"

    a1 = "PY  - "
    substring_in_list1 = any(a1 in string for string in b)
    if(substring_in_list1):

        x1 = [string for string in b if a1 in string]
        #print(x)
        #print(z[0])
        #rint(x[0])
        m1 = x1[0]
        #print(x)


        # Get the string after "th"
        y1 = m1.split("PY  - ", 1 )[1]
        #rint(y)


        # Consider the string

        # Get the string after "th"
        subString1 =  m1.partition("- ")[2]
        #print(subString)
        single_citation["Publication date"] = subString1
    else:
        single_citation["Publication date"] = "N/A"


    

    list_of_citation[i] = single_citation
    i = i+1

    #div.nova-legacy-v-person-list-item__title
    #print(single_citation)
    #print(list_of_citation)

    
# for link in list_of_link:
#     driver.get(link[0])
#     citation = driver.find_element(By.ID, "citation-preview")
#     print(link)
#     print(citation.text)
#     print("")
#     list_of_citation.append(citation.text)

# print(list_of_pub)
# print(list_of_link)

# cite_list_in_json = json.dumps(list_of_citation, indent= 10)
# print(pub_list_in_json)
with open('citation_list.json', 'w') as f:
    json.dump(list_of_citation,f)



# print(list_of_link)







#print(publications[1].text)

