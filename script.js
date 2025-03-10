document.getElementById("toggle-btn").addEventListener("click", function () {
    let sidebar = document.getElementById("sidebar");
    let toggleIcon = document.getElementById("toggle-icon");
    let companyName = document.getElementById("company-name");
    let smallName = document.getElementById("name-small");
    sidebar.classList.toggle("collapsed");
    toggleIcon.classList.toggle("rotated");
    companyName.style.display = sidebar.classList.contains("collapsed") ? "none" : "block";
    smallName.style.display = sidebar.classList.contains("collapsed") ? "block" : "none";
});

function toggleDarkMode() {
    document.documentElement.classList.toggle("dark-mode"); // Apply to the root element
    const isDarkMode = document.documentElement.classList.contains("dark-mode");
    localStorage.setItem("theme", isDarkMode ? "dark" : "light");
}

// Apply dark mode on page load if it was previously enabled
(function () {
    if (localStorage.getItem("theme") === "dark") {
        document.documentElement.classList.add("dark-mode");
    }
})();

function loadPage(page) {
    fetch(page)
        .then(response => response.text())
        .then(html => {
            document.getElementById("contain").innerHTML = html;
        })
        .catch(error => console.error("Error loading page:", error));
}

// Attach event listeners to sidebar menu items
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("productPageLink").addEventListener("click", function () {
        loadPage("Product.html");
    });

    document.getElementById("settingsPageLink").addEventListener("click", function () {
        loadPage("setting.html");
    });
    document.getElementById("vendorPageLink").addEventListener("click", function () {
        loadPage("vendor.html");
    });
});


// Navigation for the setting page 
    function showTab(tabId) {
        // Hide all settings sections
        document.querySelectorAll('.settings-section').forEach(section => {
            section.classList.remove('active');
        });

        // Show the selected section
        const activeTab = document.getElementById(tabId);
        if (activeTab) {
            activeTab.classList.add('active');
        } else {
            console.error(`Tab with ID "${tabId}" not found.`);
        }
    }



    document.addEventListener("DOMContentLoaded", function () {
        console.log("JavaScript loaded.");
    
        function loadProducts() {
            console.log("Checking for product table...");
    
            const productTableBody = document.getElementById("productTableBody");
    
            if (!productTableBody) {
                console.error("Table body not found! Retrying...");
                setTimeout(loadProducts, 500); // Try again after a short delay
                return;
            }
    
            console.log("Table body found. Inserting products...");
    
            const products = [
                { name: "Solid Lapel Neck Blouse", category: "CLOTHING", sku: "TS38790", variant: "Varies on Size, Color", price: "$24", status: "Active" },
                { name: "Point Toe Heeled Pumps", category: "SHOES", sku: "TS38843", variant: "Varies on Size", price: "$56", status: "Out of Stock" },
                { name: "Crop Tank Top", category: "CLOTHING", sku: "TS97545", variant: "Varies on Size, Material", price: "$19", status: "Active" },
                { name: "Minimalist Flap Chain Bag", category: "BAG", sku: "TS00213", variant: "2 Sizes", price: "$32", status: "Active" },
                { name: "Front Crop Top", category: "CLOTHING", sku: "TS36940", variant: "Varies on Color", price: "$17", status: "Active" },
                { name: "Schiffy Drawstring Crop Top", category: "CLOTHING", sku: "TS31366", variant: "Varies on Color", price: "$21", status: "Active" },
                { name: "Pineapple Earrings", category: "JEWELRY", sku: "TS84323", variant: "Varies on Size", price: "$8", status: "Out of Stock" }
            ];
    
            productTableBody.innerHTML = ""; // Clear existing data
            products.forEach(product => {
                const row = document.createElement("tr");
                row.innerHTML = `
                    <td>${product.name}</td>
                    <td>${product.category}</td>
                    <td>${product.sku}</td>
                    <td>${product.variant}</td>
                    <td>${product.price}</td>
                    <td><span class="status ${product.status === 'Active' ? 'active' : 'out-of-stock'}">${product.status}</span></td>
                `;
                productTableBody.appendChild(row);
            });
    
            console.log("Products loaded successfully.");
        }
    
        // Run the function after a delay to ensure dynamic content is loaded
        setTimeout(loadProducts, 500);
    });



// navigation for the vendor page 
    function showSection(sectionId) {
        let sections = document.querySelectorAll('.content-wrapper');
        sections.forEach(section => section.style.display = 'none');
        document.getElementById(sectionId).style.display = 'block';
    }

    function buyNow() {
        alert("Thank you for your purchase!");
    }

    // Show the products section by default
    showSection('products');
    
