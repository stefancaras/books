let title = document.querySelector('#title');
let author = document.querySelector('#author');
let isbn = document.querySelector('#isbn');
let button = document.querySelector('button');
let table = document.querySelector('table');

isbn.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
      button.click();
    }
});

button.addEventListener('click', Ul.add());
table.addEventListener('click', Ul.remove());

class Book{
	constructor(title, author, isbn){
		this.title = title;
		this.author = author;
		this.isbn = isbn;
	}
}

class Ul{
	constructor(){
	}
	static add() {
		let book1 = new Book("Catch22", "Joseph Heller", 5325432423)
		console.log(book1)
		if (title.value != "" && author.value != "" && isbn.value != "") {
			let row = table.insertRow(1);
			let cell1 = row.insertCell(0);
			let cell2 = row.insertCell(1);
			let cell3 = row.insertCell(2);
			let cell4 = row.insertCell(3);
			cell1.innerText = title.value;
			cell2.innerText = author.value;
			cell3.innerText = isbn.value;
			cell4.innerHTML = `<i class="fas fa-window-close" id="x"></i>`;
			title.value = "";
			author.value = "";
			isbn.value = "";
		}
	}
	static remove(event) {
		const clickedElement = event.target;
		const td1 = clickedElement.parentNode.parentNode.firstChild;
		if (clickedElement.id == 'x') {
			clickedElement.parentNode.parentNode.remove();
		}
	}
}
