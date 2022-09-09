class Book {
	constructor(title, author, isbn){
		this.title = title;
		this.author = author;
		this.isbn = isbn;
	}
}

class UI {
	static createBook() {
		const title = document.querySelector('#title').value;
		const author = document.querySelector('#author').value;
		const isbn = document.querySelector('#isbn').value;
		if (title != "" && author != "" && isbn != "") {
			const book = new Book(title, author, isbn);
			UI.add(book);
			UI.clearFields();
			UI.message('confirm');
		} else {
			UI.message('error');
		}
	}
	static add(book) {
		let row = table.insertRow(1);
		let cell1 = row.insertCell(0);
		let cell2 = row.insertCell(1);
		let cell3 = row.insertCell(2);
		let cell4 = row.insertCell(3);
		cell1.innerText = book.title;
		cell2.innerText = book.author;
		cell3.innerText = book.isbn;
		cell4.innerHTML = `<i class="fas fa-window-close" id="x"></i>`;
	}
	static remove(el) {
		if (el.id == 'x') {
			el.parentNode.parentNode.remove();
		}
	}
	static clearFields() {
        document.querySelector('#title').value = '';
        document.querySelector('#author').value = '';
        document.querySelector('#isbn').value = '';
    }
	static message(msg) {
		const form = document.querySelector('#form');
		const p = document.createElement('p');
		if (msg === 'confirm') {
			p.innerText = 'Cartea a fost adăugată.'
		} else {
			p.innerText = 'Completează toate câmpurile.'
			p.classList.add('error');
		}
		form.appendChild(p);
		//remove message/error after 2 seconds
		const paragraph = document.querySelector('p');
		setTimeout(()=>paragraph.remove(),2000);
	}
	static clickButtonOnEnter(event) {
		if (event === 'Enter') {
			button.click();
		}
	}
}

let button = document.querySelector('button');
let table = document.querySelector('table');

button.addEventListener('click', () => UI.createBook());
table.addEventListener('click', (e) => UI.remove(e.target));
isbn.addEventListener('keypress', (e) => UI.clickButtonOnEnter(e.key));