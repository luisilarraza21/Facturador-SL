document.addEventListener('DOMContentLoaded', function() {
    // Navbar
    const userDisplayName = document.getElementById('userDisplayName');
    const logoutButton = document.getElementById('logoutButton');

    // Dashboard Stats
    const availableInvoices = document.getElementById('availableInvoices');
    const issuedInvoices = document.getElementById('issuedInvoices');
    const totalAmount = document.getElementById('totalAmount');
    const lastInvoiceNumber = document.getElementById('lastInvoiceNumber');

    // Tabs
    const tabInvoices = document.getElementById('tabInvoices');
    const tabClients = document.getElementById('tabClients');
    const tabProfile = document.getElementById('tabProfile');

    const contentInvoices = document.getElementById('contentInvoices');
    const contentClients = document.getElementById('contentClients');
    const contentProfile = document.getElementById('contentProfile');

    // Invoice Form
    const newInvoiceBtn = document.getElementById('newInvoiceBtn');
    const invoiceForm = document.getElementById('invoiceForm');
    const invoiceList = document.getElementById('invoiceList');
    const addItemBtn = document.getElementById('addItemBtn');
    const itemsTableBody = document.getElementById('itemsTableBody');

    // Invoice Preview
    const invoicePreview = document.getElementById('invoicePreview');

    // Modal
    const modal = document.getElementById('myModal');
    const closeModalBtn = document.getElementById('closeModalBtn');

    // Functions to simulate data loading and tab switching
    function loadUserData() {
        // Simulate loading user data
        setTimeout(() => {
            userDisplayName.textContent = 'Usuario Ejemplo';
        }, 500);
    }

    function loadDashboardStats() {
        // Simulate loading dashboard stats
        setTimeout(() => {
            availableInvoices.textContent = '10';
            issuedInvoices.textContent = '5';
            totalAmount.textContent = '1500.00 Bs';
            lastInvoiceNumber.textContent = '000001';
        }, 800);
    }

    function switchTab(tabId) {
        contentInvoices.style.display = 'none';
        contentClients.style.display = 'none';
        contentProfile.style.display = 'none';

        tabInvoices.classList.remove('active');
        tabClients.classList.remove('active');
        tabProfile.classList.remove('active');

        document.getElementById('content' + tabId.substring(3)).style.display = 'block';
        document.getElementById(tabId).classList.add('active');
    }

    // Event listeners
    logoutButton.addEventListener('click', function() {
        alert('Cerrando sesión...');
    });

    tabInvoices.addEventListener('click', function() {
        switchTab('tabInvoices');
    });

    tabClients.addEventListener('click', function() {
        switchTab('tabClients');
    });

    tabProfile.addEventListener('click', function() {
        switchTab('tabProfile');
    });

    newInvoiceBtn.addEventListener('click', function() {
        invoiceForm.classList.remove('hidden');
        invoiceList.classList.add('hidden');
    });

    closeModalBtn.addEventListener('click', function() {
        modal.style.display = 'none';
    });

    // Initial loading
    loadUserData();
    loadDashboardStats();
    switchTab('tabInvoices');
});
