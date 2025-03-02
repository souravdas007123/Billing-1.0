document.getElementById("toggle-btn").addEventListener("click", function () {
    let sidebar = document.getElementById("sidebar");
    let toggleIcon = document.getElementById("toggle-icon");
    let companyName = document.getElementById("company-name");
    sidebar.classList.toggle("collapsed");
    toggleIcon.classList.toggle("rotated");
    companyName.style.display = sidebar.classList.contains("collapsed") ? "none" : "block";
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
                document.getElementById("settings-container").innerHTML = html;
            })
            .catch(error => console.error("Error loading page:", error));
    }

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
