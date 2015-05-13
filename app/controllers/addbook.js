var myBooks = Alloy.Collections.books;
function addBook(){
	var book = Alloy.createModel('books',{
		titulo : $.titleInput.value,
		autor : $.authorInput.value
	});
	myBooks.add(book);
	book.save();
	$.addbook.close();
}
