const axios = require('axios');

const getAllProducts = async() => {
    try {
        const response = await axios.get("https://dummyjson.com/products");
        console.log("Products:", response.data.products);
    } catch (error) {
        console.error("Error fetching products:", error.message);
    }
};

// Panggil fungsi untuk mendapatkan semua produk
getAllProducts();