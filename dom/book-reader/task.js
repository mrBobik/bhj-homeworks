const sizeControls = Array.from(document.querySelectorAll(".font-size"));
const colorControls = Array.from(document.querySelector(".book__control_color").querySelectorAll(".color"));
const backgroundControls = Array.from(
  document.querySelector(".book__control_background").querySelectorAll(".color")
);
const book = document.querySelector(".book");

function switchSize(evt) {
  evt.preventDefault();
  sizeControls.forEach((control) =>
    control.classList.remove("font-size_active")
  );
  evt.target.classList.add("font-size_active");
  book.classList.remove("book_fs-big");
  book.classList.remove("book_fs-small");
  book.classList.add(`book_fs-${evt.target.dataset.size}`);
}


function switchColor(evt) {
  evt.preventDefault();
  colorControls.forEach((control) => control.classList.remove("color_active"));
  evt.target.classList.add("color_active");
  book.classList.remove("book_color-black");
  book.classList.remove("book_color-gray");
  book.classList.remove("book_color-whitesmoke");
  book.classList.add(`book_color-${evt.target.dataset.textColor}`);
}

function backgroundColor(evt) {
  evt.preventDefault();
  backgroundControls.forEach((control) =>
    control.classList.remove("color_active")
  );
  evt.target.classList.add("color_active");
  book.classList.remove("book_bg-black");
  book.classList.remove("book_bg-gray");
  book.classList.remove("book_bg-white");
  book.classList.add(`book_bg-${evt.target.dataset.bgColor}`);
}

sizeControls.forEach((control) => control.addEventListener("click", switchSize));
colorControls.forEach((control) => control.addEventListener("click", switchColor));
backgroundControls.forEach((control) =>
  control.addEventListener("click", backgroundColor)
);
