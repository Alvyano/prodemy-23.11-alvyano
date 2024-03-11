const products = [{
        "id": 1,
        "nama": "Kopi Susu Gula Aren",
        "harga": "18.000"
    },
    {
        "id": 2,
        "nama": "Cappucino",
        "harga": "20.000"
    },
    {
        "id": 3,
        "nama": "Strawberry Latte",
        "harga": "23.000"
    },
    {
        "id": 4,
        "nama": "Americano",
        "harga": "15.000"
    },
    {
        "id": 5,
        "nama": "Chocolatte",
        "harga": "23.000"
    },
    {
        "id": 6,
        "nama": "Avocado Coffee",
        "harga": "23.000"
    }

];

function addProducts() {
    const newProducts = [{
            "id": 7,
            "nama": "Vanilla Latte",
            "harga": "25.000"
        },
        {
            "id": 8,
            "nama": "Espresso",
            "harga": "12.000"
        },
        {
            "id": 9,
            "nama": "Hazelnut Mocha",
            "harga": "22.000"
        }

    ];

    products.push(...newProducts);

    console.log("After Add Products:");
    console.table(products);
}

function editProducts(id) {
    const newCoffeeMenu = {
        "id": 10,
        "nama": "Iced Latte",
        "harga": "21.000"

    };

    products.forEach((item, index) => {
        if (item.id === id) {
            products[index] = newCoffeeMenu;
        }
    });

    console.log(`After Edit Products: (id:${id})`);
    console.table(products);
}

function deleteProducts(id) {
    const filteredProducts = products.filter((item) => item.id != id);
    console.log(`After Delete Products: (id:${id})`);
    console.table(filteredProducts);
}

console.log("Before Add Products:");
console.table(products);
addProducts();
editProducts(3);
deleteProducts(8);