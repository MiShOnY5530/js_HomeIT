// 4
let currentLight = 0;
const lights = ['red', 'yellow', 'green'];

        function changeLight() {
            document.getElementById(lights[currentLight]).classList.remove(lights[currentLight]);
            currentLight = (currentLight + 1) % lights.length;
            document.getElementById(lights[currentLight]).classList.add(lights[currentLight]);
        }


// 5
document.addEventListener('DOMContentLoaded', () => {
    const books = document.querySelectorAll('.book');
    books.forEach(book => {
        book.addEventListener('click', () => {
            books.forEach(b => b.classList.remove('selected'));
            book.classList.add('selected');
        });
    });
});


// 7
document.querySelectorAll('#directoryTree li').forEach(function(li) {
    li.addEventListener('click', function(event) {
        event.stopPropagation();
        let nestedList = this.querySelector('.nested');
        if (nestedList) {
            nestedList.classList.toggle('active');
        }
    });
});