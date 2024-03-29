
let titlePages = {"algos-one":1677};
let currentPage = {"algos-one":1};
let bookSelector = document.getElementById('book-selector');
let textPage = document.getElementById('current-page')

function updateDetails() {
  let selectedBook = document.getElementById('book-selector').value
  let formatBox = "/" + titlePages[selectedBook];
  let textBox = document.getElementById('text-input');
  textPage = document.getElementById('current-page')
  textBox.value = formatBox
  currentPage = {"algos-one":localStorage.getItem(selectedBook)};
  textPage.value = currentPage[selectedBook]
  textBox.disabled = 'true';
}

function updateCurrentPage() {
  selectedBook = document.getElementById('book-selector').value
  currentPage[selectedBook] = textPage.value;
  localStorage.setItem(selectedBook, currentPage[selectedBook])
}



bookSelector.addEventListener('click', updateDetails);
textPage.addEventListener('change', updateCurrentPage);