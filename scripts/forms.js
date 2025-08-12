// Product data array
const products = [
    { id: "prod001", name: "Ultra HD Smart TV" },
    { id: "prod002", name: "Wireless Noise-Canceling Headphones" },
    { id: "prod003", name: "Smartphone Pro Max" },
    { id: "prod004", name: "4K Action Camera" },
    { id: "prod005", name: "Ergonomic Office Chair" },
    { id: "prod006", name: "Air Fryer Oven" },
    { id: "prod007", name: "Fitness Smartwatch" },
    { id: "prod008", name: "Bluetooth Speaker" },
    { id: "prod009", name: "Gaming Laptop" },
    { id: "prod010", name: "Robot Vacuum Cleaner" }
];

// Populate product select options
document.addEventListener('DOMContentLoaded', function() {
    const productSelect = document.getElementById('productName');
    
    // Clear any existing options (except the first one)
    while (productSelect.options.length > 1) {
        productSelect.remove(1);
    }
    
    // Add products to the dropdown
    products.forEach(product => {
        const option = document.createElement('option');
        option.value = product.id;
        option.textContent = product.name;
        productSelect.appendChild(option);
    });
    
    // Set today's date as default for installation date
    const today = new Date().toISOString().split('T')[0];
    document.getElementById('installDate').value = today;
    
    // Footer year and last modified date
    document.getElementById('year').textContent = new Date().getFullYear();
    document.getElementById('lastModified').textContent = document.lastModified;
});