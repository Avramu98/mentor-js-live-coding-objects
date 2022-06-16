// let header = document.getElementById("header");
// console.log(header);
// console.log(document.body);

// document.body.innerHTML = name;

// let title = document.createElement("h1");
// title.innerHTML = 'text';
// document.body.appendChild(title);

// console.log(title);

// document.body.innerHTML = 'ceva';


// FACTORY FUNCTION TO CREATE THE PRICE TABLE OBJECT
let createPriceTableObjects = (title, description, price, operators) => {
    return {
        title, 
        description,
        price,
        operators
    }
}
// FACTORY FUNCTION TO CREATE THE PRICE TABLE OBJECT


// DECLARED THE PRICE TABLES AS VARIABLES
let freeTable = createPriceTableObjects('Free', 'Brief price description', '0$', 'Only 2 Operators');
let standardTable = createPriceTableObjects('Standard', 'Brief price description', '5$', '5+ Operators');
let premiumTable = createPriceTableObjects('Premium', 'Brief price description', '10$', '10+ Operators');
// DECLARED THE PRICE TABLES AS VARIABLES


// ADDED PRICE PRICE TABLES VARIABLES IN A PRICE TABLE ARRAY
let priceTableArray = [freeTable, standardTable, premiumTable];
console.log(priceTableArray);
// ADDED PRICE PRICE TABLES VARIABLES IN A PRICE TABLE ARRAY

// FUNCTION TO CREATE THE HTML ELEMENTS WITH THE VALUES
let createElements = (titleParam, descriptionParam, priceParam, operatorsParam) => {
    let container = document.createElement("div");
    let holderContainer = document.getElementById("holder");
    container.className = "container";
    holderContainer.appendChild(container);

    let title = document.createElement("h1");
    title.className = "title";
    title.innerHTML = titleParam;
    container.appendChild(title);

    let description = document.createElement("h1");
    description.className = "title";
    description.innerHTML = descriptionParam;
    container.appendChild(description);

    let price = document.createElement("h1");
    price.className = "title";
    price.innerHTML = priceParam;
    container.appendChild(price);

    let operators = document.createElement("h1");
    operators.className = "title";
    operators.innerHTML = operatorsParam;
    container.appendChild(operators);
}
// FUNCTION TO CREATE THE HTML ELEMENTS WITH THE VALUES


//THE PRICE TABLE ARRAY ITERATED TO CALL THE CREATE ELEMENTS FUNCTION FOR EVERY PRICE TABLE OBJECT IN THE ARRAY
priceTableArray.map((priceTable) => {
    createElements(priceTable.title, priceTable.description, priceTable.price, priceTable.operators)
})
//THE PRICE TABLE ARRAY ITERATED TO CALL THE CREATE ELEMENTS FUNCTION FOR EVERY PRICE TABLE OBJECT IN THE ARRAY

