
let vendor01 = {
	name: "Staples",
	min_order: 20,
	delivery_fee: 5,
	supplies: {
		"Paper": {
			0: {
				name: "Printer Paper",
				description: "odio semper cursus. Integer mollis.",
				stock: 3,
				price: 5.50
			},
			1: {
				name: "Copy Paper",
				description: "elit pede, malesuada vel, venenatis.",
				stock: 6,
				price: 6.00
			},
			2: { 
				name: "Specialty Paper",
				description: "tellus sem mollis dui, in",
				stock: 15,
				price: 11.50
			},
			3: {
				name: "Notebook",
				description: "sit amet nulla. Donec non",
				stock: 45,
				price: 3.99
			},
			4: {
				name: "Cardstock",
				description: "Lorem ipsum dolor sit amet,",
				stock: 45,
				price: 10.50
			},
			5: {
				name: "Calendar",
				description: "Aliquam tincidunt, nunc ac mattis",
				stock: 6,
				price: 7.00
			}
		},
		"Writing Supplies": {
			6: {
				name: "Pen",
				description: "tellus. Aenean egestas hendrerit neque",
				stock: 60,
				price: 4.99
			},
			7: {
				name: "Mechanical Pencil Lead",
				description: "magna, malesuada vel, convallis in,",
				stock: 8,
				price: 4.00
			},
			8: {
				name: "Pencils (pack of 10)",
				description: "nec quam. Curabitur vel lectus.",
				stock: 33,
				price: 9.75
			},
			9: {
				name: "Markers",
				description: "Aliquam tincidunt, nunc ac mattis",
				stock: 4,
				price: 13.33

			},
			10: {
				name: "Eraser",
				description: "odio. Etiam ligula tortor, dictum",
				stock: 17,
				price: 1.50
			},
			11: {
				name: "Pencil Sharpener",
				description: "tincidunt, nunc ac mattis ornare,",
				stock: 2,
				price: 3.99
			},
			12: {
				name: "Fine Writing Pen Case",
				description: "Sed pharetra, felis eget varius",
				stock: 6,
				price: 15.99
			}
		},
		"Accessories": {
			13: {
				name: "Scissors",
				description: "Nam tempor diam dictum sapien.",
				stock: 10,
				price: 9.99
			},
			14: {
				name: "Glue Sticks (pack of 3)",
				description: "ipsum primis in faucibus orci",
				stock: 19,
				price: 4.99
			},
			15: {
				name: "3-Digit Combination Lock",
				description: "aliquet. Proin velit. Sed malesuada",
				stock: 4,
				price: 11.99
			}
		}
	}
}

let vendor02 = {
	name: "Indigo",
	min_order: 15,
	delivery_fee: 3.99,
	supplies: {
		"Creativity": {
			0: {
				name: "ABT MARKERS, PINK 5PK",
				description: "Sed auctor odio a purus.",
				stock: 30,
				price: 10.50
			},
			1: {
				name: "SET 0F 12 DUSTLESS CHALK",
				description: "quis arcu vel quam dignissim",
				stock: 10,
				price: 12.55
			},
			2: {
				name: "SET OF 12 DUAL ENDED COLOURING PENCILS",
				description: "diam luctus lobortis. Class aptent",
				stock: 11,
				price: 12.99
			}
		},
		"Journals": {
			3: {
				name: "SET OF 3 SPIRAL NOTEBOOKS, LAVENDER",
				description: "eget, volutpat ornare, facilisis eget",
				stock: 8,
				price: 15.00
			},
			4: {
				name: "COPTIC TAB NOTEBOOK, PINK",
				description: "euismod enim. Etiam gravida molestie",
				stock: 9,
				price: 11.00
			},
			5: {
				name: "A5 3-SUBJECT SPIRAL NOTEBOOK, ABSTRACT",
				description: "Donec vitae erat vel pede",
				stock: 14,
				price: 12.99
			}
		}
	}
}

let vendor03 = {
	name: "Grand and Toy",
	min_order: 35,
	delivery_fee: 8,
	supplies: {
		"Whiteboards": {
			0: {
				name: "Cork Board",
				description: "Nunc sed orci lobortis augue",
				stock: 7,
				price: 19.00
			},
			1: {
				name: "Glass Dry-Erase Board",
				description: "nisl. Quisque fringilla euismod enim.",
				stock: 2,
				price: 149.00
			},
			2: {
				name: "Planning Board",
				description: "arcu. Sed et libero. Proin",
				stock: 19,
				price: 11.99
			}

		},
		"Organizers": {
			3: {
				name: "Desk Pad",
				description: "euismod enim. Etiam gravida molestie",
				stock: 4,
				price: 4.50
			},
			4: {
				name: "Document Holder",
				description: "lobortis quis, pede. Suspendisse dui",
				stock: 19,
				price: 5.99
			},
			5: {
				name: "Cubicle Hook",
				description: "lobortis quam a felis ullamcorper",
				stock: 11,
				price: 1.99
			}
		},
		"Paper": {
			6: {
				name: "Coloured Printer Paper",
				description: "sed pede. Cum sociis natoque",
				stock: 6,
				price: 7.00
			},
			7: {
				name: "Photo Paper",
				description: "Nunc laoreet lectus quis massa.",
				stock: 19,
				price: 17.70
			},
			8: {
				name: "Thermal Roll",
				description: "Donec egestas. Duis ac arcu.",
				stock: 4,
				price: 6.99
			}
		},
		"Craft Supplies": {
			9: {
				name: "Stickers (pack of 100)",
				description: "luctus ut, pellentesque eget, dictum",
				stock: 60,
				price: 3.99
			},
			10: {
				name: "Pom Poms (pack of 300)",
				description: "Nam ac nulla. In tincidunt",
				stock: 3,
				price: 8.00
			},
			11: {
				name: "Glitter Glue (300ml)",
				description: "interdum enim non nisi. Aenean",
				stock: 40,
				price: 5.99
			}
		},
		"Writing Supplies": {
			12: {
				name: "Highlighters (pack of 5)",
				description: "Phasellus dolor elit, pellentesque a,",
				stock: 19,
				price: 7.95
			},
			13: {
				name: "Blue Ink Pens (pack of 10)",
				description: "fames ac turpis egestas. Aliquam",
				stock: 3,
				price: 11.50
			},
			14: {
				name: "Sharpie Markers (pack of 3)",
				description: "aliquet odio. Etiam ligula tortor,",
				stock: 5,
				price: 5.99
			},
			15: {
				name: "Pen Refills (pack of 20)",
				description: "semper, dui lectus rutrum urna,",
				stock: 67,
				price: 10.58
			}
		},
		"Storage": {
			16: {
				name: "Storage Box",
				description: "at auctor ullamcorper, nisl arcu",
				stock: 9,
				price: 5.78
			},
			17: {
				name: "Binding Cases (pack of 10)",
				description: "penatibus et magnis dis parturient",
				stock: 39,
				price: 7.99
			},
			18: {
				name: "File Storage Drawer",
				description: "Pellentesque ut ipsum ac mi",
				stock: 2,
				price: 46.50
			},
			19: {
				name: "Portable Plastic File/Storage Box",
				description: "rhoncus. Proin nisl sem, consequat",
				stock: 5,
				price: 16.79
			}
		},
		"Security": {
			20: {
				name: "Key Cabinet",
				description: "mus. Donec dignissim magna a",
				stock: 1,
				price: 115.00
			},
			21: {
				name: "Key Safe",
				description: "cursus. Integer mollis. Integer tincidunt",
				stock: 5,
				price: 57.99
			}
		}
	}
}


let vendors = { "Staples": vendor01, "Indigo": vendor02, "Grand and Toy": vendor03 };
let select = document.getElementById("vendor-select");
const order = [];
let subtotal = 0;
let tax = 0;
let total = 0;


function init() {
	//console.log("init");
	document.getElementById("vendor-select").innerHTML = genSelList();

 	select.addEventListener("change", () => {
		if (confirm("Press ok to change vendor. Caution: you will lose every information on this page!") == true) {
			document.getElementById("right").innerHTML = " ";
			order.length = 0;

			let x = select.value;
			if (x == 'Staples') {
				genInfo(vendor01.name, vendor01.min_order, vendor01.delivery_fee);
				displayKeys(vendor01.supplies);
				infoOnLeftSide(vendor01.supplies);
				receipt(vendor01.supplies, vendor01.delivery_fee, vendor01.min_order);
			} else if (x == "Indigo") {
				genInfo(vendor02.name, vendor02.min_order, vendor02.delivery_fee);
				displayKeys(vendor02.supplies);
				infoOnLeftSide(vendor02.supplies);
				receipt(vendor02.supplies, vendor02.delivery_fee, vendor02.min_order);
			} else {
				genInfo(vendor03.name, vendor03.min_order, vendor03.delivery_fee);
				displayKeys(vendor03.supplies);	
				infoOnLeftSide(vendor03.supplies);
				receipt(vendor03.supplies, vendor03.delivery_fee, vendor03.min_order);
			}
		} else {
			alert("You choose to stay.");
		}
	}); 
}


// Function to display general info about the vendor
function genInfo(vendorName, vendorMinOrder, vendorDeliFee) {
	// Initialize the text variable 
	let textInfo = `<h1>${vendorName}</h1><br><p>Minimum order: $${vendorMinOrder}</p><p>Delivery fee: $${vendorDeliFee}</p>`;

	// Put info onto the website
	document.getElementById("info").innerHTML = textInfo;
}


// Function to display supplies
function displayKeys(vendorSupplies) {  
	// Initialize the text variable 
	let textMiddle = `<br>`;

	// List of categories
	let categories = Object.keys(vendorSupplies);
	let numList = Object.keys(categories);	

	// Display every supplies in the vendor
	for (categories in vendorSupplies) {
		textMiddle += `<p id="${categories}"><strong>` + categories + `</strong></p>`;
		for (numList in vendorSupplies[categories]) {	
			let textForButton = `<button class="allAddButtons" style="background-color:inherit;border:none;cursor:pointer;"><img src="add.png" alt="add button" style="width:30px;height:30px;vertical-align:middle;"></button>`;
			textMiddle += `<p>` + vendorSupplies[categories][numList].name + ` ($${vendorSupplies[categories][numList].price.toFixed(2)}, stock = ${vendorSupplies[categories][numList].stock}) ` + textForButton + `</p>`;
			textMiddle += `<p>` + vendorSupplies[categories][numList].description + `</p><br>`;
		}
	}

	// Put text to the middle
	document.getElementById("middle").innerHTML = textMiddle;
}


// Display information of the left side (Categories)
function infoOnLeftSide(vendorSupplies) {
	// Initialize the text variable 
	let textLeft = `<br><h3>Categories</h3>`;

	// List of categories
	let categories = Object.keys(vendorSupplies);

	// Display the type of supply for the vendor (with link to the section of each specific supply)
	for (categories in vendorSupplies) {
		textLeft += `<p><a href="#${categories}">${categories}</a></p>`;
	}

	// Put text to the left
	document.getElementById("left").innerHTML = textLeft;
}


// Information inside the user's cart 
function receipt(vendorSupplies, vendorDeliFee, minOrder) {
	// Get the properties of vendor's supplies
	let typeOfProd = Object.keys(vendorSupplies);
	let prodList = Object.keys(typeOfProd); 

	// Array of name, price and stock
	let nameArr = [];
	let priceArr = [];
	let stockArr = [];
	for (typeOfProd in vendorSupplies) {
		for (prodList in vendorSupplies[typeOfProd]) {
			nameArr.push(vendorSupplies[typeOfProd][prodList].name);
			priceArr.push(vendorSupplies[typeOfProd][prodList].price);
			stockArr.push(vendorSupplies[typeOfProd][prodList].stock);
		}
	}

 	// Operation on the add buttons and submit button
	const addButtons = document.getElementsByClassName("allAddButtons");
	for (let n = 0; n < addButtons.length; n++) {
		addButtons[n].addEventListener("click", () => {
			addingButton(nameArr[n], priceArr[n], stockArr[n]);
			displayProducts(vendorDeliFee, minOrder);
		});
	}
}


// Function to operate on adding buttons
function addingButton(prodName, prodPrice, prodStock) {
	// Add chosen items into order array
	for (let i = 0; i < order.length; i++){
		if (order[i].name === prodName) {
			if (order[i].stock === 0) {
				alert("Item is out of stock!");
				return;
			}
			order[i].stock -= 1;
			order[i].quantity += 1;
			return;
		}
	}
	order.push({name: prodName, price: prodPrice, stock: prodStock-1, quantity: 1});
} 


// function to remove item from order list
function removeItem(index) {
	// Deduce the quantity when user clicks buttons or remove the items when quanitity = 0
 	for (let i = 0; i < order.length; i++) {
		if (order[i].name === order[index].name) {
			order[i].quantity -= 1;
			order[i].stock += 1;
			if (order[index].quantity < 1) {
				order.splice(i, 1);
				alert("You removed this item from the cart.");
			}
/* 			if (order.length == 0) {
				document.getElementById("right").innerHTML = " ";
			} 
*/
		}
	}
	console.log("Hello");
}


// Function to submit order 
function submitOrder() {
	document.getElementById("right").innerHTML = " ";
	order.length = 0;
	alert("Your order is submitted. Thank you for shopping with us!");
}


// Display the product to the web page
function displayProducts(deliFee, orderMinimum) {
	let text = `<h1>Your Order</h1><br>`;
	// Order list
 	for (let i = 0; i < order.length; i++) {
		let totalPrice = order[i].price * order[i].quantity; 
		let textForRemoveButton = `<button class="allRemoveButtons" onclick="removeItem(${i})"><img src="remove.png" alt="remove button" style="width:30px;height:30px;vertical-align:middle;"></button>`;
		text += `<p>${order[i].name} x ${order[i].quantity} ($${totalPrice.toFixed(2)}) ${textForRemoveButton}</p>`;
	} 

	// Subtotal
	let subtotal = 0;
	for (let i = 0; i < order.length; i++) {
		subtotal += order[i].price * order[i].quantity;
	}
	text += `<br><p>Subtotal: ${subtotal.toFixed(2)}</p>`;

	// Tax 
	let taxValue = subtotal * 0.1;
	text += `<p>Tax: ${taxValue.toFixed(2)}</p>`;

	// Delivery fee
	text += `<p>Delivery fee: ${deliFee.toFixed(2)}</p>`;

	// Total
	let total = deliFee + taxValue + subtotal;
	text += `<p>Total: ${total.toFixed(2)}</p>`;

	// If the customer does not meet the minimum order
	if (total < orderMinimum) {
		text += `<p>You will need a minimum of $${orderMinimum.toFixed(2)} in your cart to proceed with the order</p>`;
	}

	// Submit button
	if (total > orderMinimum) {
		text += `<p><button id="submitButton" onclick="submitOrder()">Submit</button></p>`;
	}

	document.getElementById("right").innerHTML = text;
}


function genSelList() {
	let result = '<select name="vendor-select" id="vendor-select">';
	Object.keys(vendors).forEach(elem => {
		result += `<option value="${elem}">${elem}</option>`;
	});
	result += "</select>";
	return result;
}
