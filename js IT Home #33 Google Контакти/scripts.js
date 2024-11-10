let contacts = JSON.parse(localStorage.getItem('contacts')) || [];
let currentPage = 1;
const itemsPerPage = 5;
let editIndex = -1;

function updateContactCount() {
    const contactCount = document.getElementById('contactCount');
    contactCount.textContent = `(${contacts.length})`;
}

function saveContact() {
    const name = document.getElementById('name').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const email = document.getElementById('email').value.trim();
    const description = document.getElementById('description').value.trim();
    let isValid = true;

    clearValidationErrors();

    if (name === "") {
        showValidationError('name', 'Назва обов’язкова');
        isValid = false;
    }

    if (!/^\+?\d{10,15}$/.test(phone)) {
        showValidationError('phone', 'Невірний формат телефону');
        isValid = false;
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
        showValidationError('email', 'Невірний формат email');
        isValid = false;
    }

    if (description.length > 21) {
        showValidationError('description', 'Опис не може бути довшим за 21 символ');
        isValid = false;
    }    

    if (isValid) {
        const contact = { name, phone, email, description };

        if (editIndex === -1) {
            contacts.push(contact);
        } else {
            contacts[editIndex] = contact;
            editIndex = -1;
        }

        localStorage.setItem('contacts', JSON.stringify(contacts));
        clearForm();
        displayContacts();
        updateContactCount();
    }
}

function editContact(index) {
    editIndex = index;
    const contact = contacts[index];
    document.getElementById('name').value = contact.name;
    document.getElementById('phone').value = contact.phone;
    document.getElementById('email').value = contact.email;
    document.getElementById('description').value = contact.description;
}

function deleteContact(index) {
    contacts.splice(index, 1);
    localStorage.setItem('contacts', JSON.stringify(contacts));
    displayContacts();
    updateContactCount();
}

function clearValidationErrors() {
    document.getElementById('nameError').textContent = '';
    document.getElementById('phoneError').textContent = '';
    document.getElementById('emailError').textContent = '';
}

function showValidationError(id, message) {
    document.getElementById(id + 'Error').textContent = message;
}

function clearForm() {
    document.getElementById('contactForm').reset();
    clearValidationErrors();
    editIndex = -1;
}

function displayContacts(filteredContacts = contacts) {
    const list = document.getElementById('contacts-list');
    list.innerHTML = '';
    const start = (currentPage - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    const pageContacts = filteredContacts.slice(start, end);

    pageContacts.forEach((contact, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${contact.name}</td>
            <td>${contact.email}</td>
            <td>${contact.phone}</td>
            <td>${contact.description || '—'}</td>
            <td>
                <button class="btn btn-sm btn-outline-success" onclick="editContact(${start + index})">
                    <i class="fas fa-pencil-alt"></i>
                </button>
                <button class="btn btn-sm btn-outline-danger" onclick="deleteContact(${start + index})">
                    <i class="fas fa-trash-alt"></i>
                </button>
            </td>
        `;
        list.appendChild(row);
    });

    document.getElementById('noResults').style.display = filteredContacts.length === 0 ? 'block' : 'none';
    renderPagination(filteredContacts.length);
    updateContactCount();
}

function renderPagination(totalItems) {
    const pageCount = Math.ceil(totalItems / itemsPerPage);
    const pagination = document.querySelector('.pagination');
    pagination.innerHTML = '';

    for (let i = 1; i <= pageCount; i++) {
        const li = document.createElement('li');
        li.classList.add('page-item');
        li.innerHTML = `<a class="page-link" href="#" onclick="goToPage(${i})">${i}</a>`;
        pagination.appendChild(li);
    }
}

function goToPage(page) {
    currentPage = page;
    displayContacts();
}

function searchContacts() {
    const query = document.getElementById('search').value.toLowerCase();
    const category = document.getElementById('searchCategory').value;
    const filteredContacts = contacts.filter(contact => contact[category].toLowerCase().includes(query));
    displayContacts(filteredContacts);
}

function sortContacts(order) {
    const sortedContacts = [...contacts];
    sortedContacts.sort((a, b) => {
        if (order === 'asc') {
            return a.name.localeCompare(b.name);
        } else {
            return b.name.localeCompare(a.name);
        }
    });
    displayContacts(sortedContacts);
}

document.addEventListener('DOMContentLoaded', function() {
    displayContacts();
    updateContactCount();
});