
display_notes();

let add_btn = document.getElementById('add_btn');
add_btn.addEventListener("click", function (e) {
      let add_txt = document.getElementById("add_txt");
      let notes = localStorage.getItem("notes");
      if (notes == null) {
            notes_object = [];
      }
      else {
            notes_object = JSON.parse(notes);
      }
      notes_object.push(add_txt.value);
      localStorage.setItem("notes", JSON.stringify(notes_object));
      add_txt.value = "";
      console.log(notes_object);
      display_notes();
})

function display_notes() {
      let notes = localStorage.getItem("notes");
      if (notes == null) {
            notes_object = [];
      }
      else {
            notes_object = JSON.parse(notes);
      }
      let html = "";
      notes_object.forEach(function (element, index) {
            html += ` <div class="my-2 mx-2 card xyzw" style="width: 18rem;">
                        <div class="card-body">
                              <h5 class="card-title">Note ${index + 1}</h5>
                              <p class="card-text">${element}</p>
                              <button id="${index}" onclick="delete_note(this.id)" class="btn btn-primary">Delete Note</button>
                        </div>
                       </div>`
      });

      let notes_element = document.getElementById('notes');
      if (notes_object.length != 0) {
            notes_element.innerHTML = html;
      }
      else {
            notes_element.innerHTML = 'Add Notes';
      }
}

function delete_note(index) {
      let notes = localStorage.getItem("notes");
      if (notes == null) {
            notes_object = [];
      }
      else {
            notes_object = JSON.parse(notes);
      }

      notes_object.splice(index, 1);
      localStorage.setItem("notes", JSON.stringify(notes_object));
      display_notes();
}

let search = document.getElementById('search_bar');

search.addEventListener('input', function () {

      let input_value = search.value.toLowerCase();
      let card = document.getElementsByClassName('xyzw');
      Array.from(card).forEach(function (element) {

            let card_text = element.getElementsByTagName('p')[0].innerText;

            if (card_text.includes(input_value)) {
                  element.style.display = 'block';
            }

            else {
                  element.style.display = 'none';
            }
      })

})