document.getElementById("toggle-btn").addEventListener("click", function () {
    let sidebar = document.getElementById("sidebar");
    let toggleIcon = document.getElementById("toggle-icon");
    let companyName = document.getElementById("company-name");
    let smallName = document.getElementById("name-small");
    sidebar.classList.toggle("collapsed");
    toggleIcon.classList.toggle("rotated");
    companyName.style.display = sidebar.classList.contains("collapsed") ? "none" : "block";
    smallName.style.display = sidebar.classList.contains("collapsed") ? "block" : "none";
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
