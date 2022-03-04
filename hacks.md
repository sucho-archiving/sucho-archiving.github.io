---
layout: default
permalink: hacks
title: Useful Hacks
---
## Concatenating URLs in Excel or Sheets
If you are going to be grabbing more than just a few URLs to upload to the Internet Archive using the [Google Sheets tool](https://www.sucho.org/ia-gsheets) then these hacks might be useful to you!

* When you find an item that has multiple PDF links, for example, a journal, you can take a look at the filename to see if there is a consistent pattern that will allow you to easily generate all of the URLs in a spreadsheet without having to copy and paste them individually.
* Take a look at this journal, for example: [http://nbuv.gov.ua/j-tit/UZTNU_istor](http://nbuv.gov.ua/j-tit/UZTNU_istor)
    * Select one of the years (2013) and then an issue (2013 Т. 26(65); 1)
    * Hover over the first item in the table of contents (Титул) and you will see a filename: [http://nbuv.gov.ua/j-pdf/UZTNU_istor_2013_26(65)_1_1.pdf](http://nbuv.gov.ua/j-pdf/UZTNU_istor_2013_26(65)_1_1.pdf)
    * You'll notice that the first part of the URL is going to be consistently used by each item following the first item
    * When you get to the third article in the table of contents you will see a slightly different filename: [http://nbuv.gov.ua/UJRN/UZTNU_istor_2013_26(65)_1_3](http://nbuv.gov.ua/UJRN/UZTNU_istor_2013_26(65)_1_3)
    * Let's compare:
      * http://nbuv.gov.ua/j-pdf/UZTNU_istor_2013_26(65)_1_1.pdf
      * http://nbuv.gov.ua/UJRN/UZTNU_istor_2013_26(65)_1_3
    * The /j-pdf/ is not present in the filenames for articles #3 down and they do not include the .pdf extension.
  * So if you have 20 articles within a journal, such as in the *Вчені записки Таврійського національного університету імені В. І. Вернадського.* you can break up the filepath in a spreadsheet and use the concatenate formula to automatically populate the sheet with the URLs rather than manually copying and pasting.
  * If we use the journal example above - you can break up the filename like this across columns (from left to right)
      * Prefix: http://nbuv.gov.ua/j-pdf/UJRN/UZTNU_istor_
      * Year_Vol_Iss: 2013_26(65)_1_
      * Article_Number: 1.pdf
      * Full Link: http://nbuv.gov.ua/j-pdf/UJRN/UZTNU_istor_2013_26(65)_1_1.pdf
  * The concatenate formula would be entered into the "full link" column and the general formula is: =CONCATENATE(A2,"",B2,"",C2)
      * The letter and number combo refers to the column and row number
* As you enter the information for each of the columnn (Prefix, Year_Vol_Iss, Article_Number) you will then fill down each column automatically.
* Here is [a template that you can use for your needs](https://docs.google.com/spreadsheets/d/1KwWIg_Y_pkj7cJ_j8nW2cjpr8DZt048z1jqbIKPXZAU/edit?usp=sharing).


   
