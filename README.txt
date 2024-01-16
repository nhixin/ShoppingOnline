## List of files and their purpose 
--> add.png: image for the add button
--> remove.png: image for the remove button
--> styles.css: contain CSS code related to the styles of the web page
--> order.html: the HTML file (generate the webpage)
--> client.js: JavaScript file containing all of the methods 


## Stylistic Design Decisions
--> When first loading, the website will be blank. The contents of the page will appear once you choose a vendor. 
--> If the cart is empty, the box for "Your Order" will not display fully. It only displays if there is at least 1 item in the cart.


## Design Decisions about Functionality
--> init(): hold the functions that display all contents when the page is load
--> genInfo(vendorName, vendorMinOrder, vendorDeliFee): the function to display general info of the page, which include the name, delivery fee and minimum order
--> displayKeys(vendorSupplies): contain information about the vendor's supplies
--> infoOnLeftSide(vendorSupplies): function for the categories with bookmark link 
--> receipt(vendorSupplies, vendorDeliFee, minOrder): this function contains and calls the other functions for "Your Order" on the right side
--> addingButton(prodName, prodPrice, prodStock): operating on the adding buttons
--> removeItem(index): remove the items when user clicks on remove.png
***** When click on the remove button, the item is not immediately removed. The item is removed when you add in other items. 
--> submitOrder(): function to submit order when click on the submit button
--> displayProducts(deliFee, orderMinimum): function to display general information of the box "Your Order"
--> genSelList(): create different vendors

## How to see the website
--> Click open with Google Chrome for order.html
