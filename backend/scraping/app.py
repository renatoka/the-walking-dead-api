import requests
import json
import time
from bs4 import BeautifulSoup

""" Scraped every link to the character into char_urls.json """

# URL = 'https://walkingdead.fandom.com/wiki/TV_Series_Characters'
# page = requests.get(URL)

# char_urls = []

# soup = BeautifulSoup(page.content, 'html.parser')


# results = soup.find_all('div', {'style': 'position: absolute; top: 0px; left: 1px; z-index: 2'})

# for result in results:
#     char_url = result.find('a', href=True)
#     char_urls.append(
#         {
#             'url': 'https://walkingdead.fandom.com' + char_url['href']
#         }
#     )

# with open('char_urls.json', 'w') as outfile:
#     json.dump(char_urls, outfile)

# print(char_urls)


# CHAR_URL = 'https://walkingdead.fandom.com/wiki/Duane_Jones_(TV_Series)'
# page = requests.get(CHAR_URL)
# soup = BeautifulSoup(page.content, 'html.parser')

# char_information = []
# character = {}

# nameElement = soup.find_all(
#     'h2', {'class': 'pi-item pi-item-spacing pi-title pi-secondary-background'})
# name = nameElement[0].text

# category = soup.find_all('h3', {'class': 'pi-data-label pi-secondary-font'})
# categoryValue = soup.find_all('div', {'class': 'pi-data-value pi-font'})

# for i in range(len(category)):
#     x = 1
#     if (category[i].text == 'Age' or category[i].text == 'Occupation' or category[i].text == 'Family' or category[i].text == 'Series Lifespan' or category[i].text == 'Status' or category[i].text == 'Actor'):
#         pass
#     else:
#         if (i == 1):
#             character['id'] = x
#             character['Name'] = name.replace('\u00a0\u00a0', '')

#         character['id'] = x
#         character[category[i].text] = categoryValue[i].text

#         x+=1

# char_information.append(character)

# with open('char_information.json', 'w') as outfile:
#     json.dump(char_information, outfile)


with open('char_urls.json', 'r') as f:
    data = json.load(f)
    char_information = []
    start = time.time()

    for i in range(len(data)):

        character = {}

        CHAR_URL = data[i]['url']
        page = requests.get(CHAR_URL)
        soup = BeautifulSoup(page.content, 'html.parser')

        nameElement = soup.find_all(
            'h2', {'class': 'pi-item pi-item-spacing pi-title pi-secondary-background'})
        name = nameElement[0].text
        imageElement = soup.find_all('img', {'class': 'pi-image-thumbnail'})
        image = imageElement[0]['src']

        category = soup.find_all(
            'h3', {'class': 'pi-data-label pi-secondary-font'})
        categoryValue = soup.find_all(
            'div', {'class': 'pi-data-value pi-font'})

        for y in range(len(category)):

            if (category[y].text == 'Age' or category[y].text == 'Occupation' or category[y].text == 'Family' or category[y].text == 'Series Lifespan' or category[y].text == 'Actor'):
                continue
            else:
                if (y == 1):
                    character['id'] = i
                    character['Name'] = name.replace('\u00a0\u00a0', '')

                character['id'] = i
                character[category[y].text] = categoryValue[y].text.replace("\"", "")
                character['Image'] = image

        char_information.append(character)
        print("Scraped: " + name)


end = time.time()
print("Scraped all characters and that took " + str(end - start) + " seconds")

with open('char_information.json', 'w') as outfile:
    json.dump(char_information, outfile)
