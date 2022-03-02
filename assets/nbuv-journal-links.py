from selenium import webdriver
import csv


def main():
    scrapelink = 'http://nbuv.gov.ua/j-tit/aktit'
    with open('result.csv', 'w') as file:
        wr = csv.writer(file)
        browser = webdriver.Firefox()
        browser.get(scrapelink)
        element = browser.find_element_by_xpath("//b[contains(text(), ' НАДХОДЖЕННЯ:')]")
        if element:
            links = browser.find_elements_by_xpath("//b[contains(text(), ' НАДХОДЖЕННЯ:')]/following-sibling::table[1]//a")
            for link in links:
                link.click()
            linklist = browser.find_elements_by_xpath("//b[contains(text(), ' НАДХОДЖЕННЯ:')]/following-sibling::table[3]//font//a")
            hrefs = []
            for link in linklist:
                ltext = link.get_attribute('href')
                hrefs.append(ltext)
                print('Found link:\n' + ltext + '\n Saving to file...')
                wr.writerow([ltext])


            morehrefs = []
            for linkpage in hrefs:
                    browser.get(linkpage)
                    allas = browser.find_elements_by_xpath("//td[contains(@class, 'main_content')]//table[last()]//ol//a")
                    for a in allas[2:]:
                        item = a.get_attribute('href')
                        wr.writerow([item])
                        print('Found link:\n' + item + '\n Saving to file...')


if __name__ == '__main__':
    main()