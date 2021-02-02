const lookUpTitles = function () {
  const xhr = new XMLHttpRequest();

  const bookTitle = document.getElementById("bookTitle").value;

  xhr.open(
    "GET",
    `https://www.googleapis.com/books/v1/volumes?q=title:${bookTitle}?json`
  );
  xhr.send(); // asynchronous

  xhr.onreadystatechange = function () {
    if (xhr.readyState !== 4) return;

    const data = JSON.parse(xhr.responseText);

    data.items.forEach(function (book) {
      const info = book.volumeInfo;

      // get the book title [t]
      const t = document.createElement("p");
      t.innerHTML = info.title;
      document.body.appendChild(t);

      // get the book sub-title [s]
      const s = document.createElement("p");
      s.innerHTML = info.subtitle || null;
      document.body.appendChild(s);

      // get the book description [d]
      const d = document.createElement("p");
      d.innerHTML = info.description || null;
      document.body.appendChild(d);

      // get the book category [c]
      const c = document.createElement("p");
      c.innerHTML = info.authors || null;
      document.body.appendChild(c);

      // get the book image [i]
      const i = document.createElement("img");

      i.src = info.imageLinks.thumbnail;

      document.body.appendChild(i);

      console.log(info);
    });
  };
};

document.getElementById("lookUp").addEventListener("click", lookUpTitles);

// function addElement() {
//   // create a new div element
//   const newDiv = document.createElement("div");
//   // and give it some content
//   const newContent = document.createTextNode(info.description || null);
//   // add the text node to the newly created div
//   newDiv.appendChild(newContent);
//   // add the newly created element and its content into the DOM
//   const currentDiv = document.getElementById("div1");
//   document.body.insertAdjacentHTML(newDiv, currentDiv);
// }
