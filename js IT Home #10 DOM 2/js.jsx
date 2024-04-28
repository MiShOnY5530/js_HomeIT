let users = [
    {firstName: 'Олександр', lastName: 'Засадюк:', email: 'zasadiuk@example.com'},
    {firstName: 'Михайло', lastName: 'Нюкін:', email: 'niukin@example.com'},
];

let table = document.createElement('table');
users.forEach(user => {
    let row = document.createElement('tr');
    Object.values(user).forEach(text => {
        let cell = document.createElement('td');
        cell.textContent = text;
        row.append(cell);
    });
    table.append(row);
});
document.getElementById('table').append(table);


//2
document.getElementById('filterButton').addEventListener('click', () => {
    let filter = document.getElementById('filterInput').value.trim().toLowerCase();
    document.querySelectorAll('#list li').forEach(li => {
        if (li.textContent.toLowerCase().includes(filter)) {
            li.style.display = '';
        } else {
            li.style.display = 'none';
        }
    });
});


//3
document.getElementById('openModal').addEventListener('click', () => {
    let modal = document.createElement('div');
    let form = document.createElement('form');
    let close = document.createElement('button');
    close.textContent = 'Закрити';
    close.addEventListener('click', () => modal.remove());
    form.appendChild(close);
    modal.appendChild(form);
    document.getElementById('modalContainer').append(modal);
});


//4
document.getElementById('commentForm').addEventListener('submit', (event) => {
    event.preventDefault();
    let comment = document.createElement('p');
    let deleteButton = document.createElement('button');
    deleteButton.textContent = 'Видалити';
    deleteButton.addEventListener('click', () => comment.remove());
    comment.textContent = document.getElementById('commentInput').value;
    comment.appendChild(deleteButton);
    document.getElementById('comments').appendChild(comment);
    document.getElementById('commentInput').value = '';
});
