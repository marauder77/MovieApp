
let currentId = 0;
//Creates the array to add the movie list into.
const movieList = [];



$(function() {



$("#submitForm").on("submit", function(evt) {
evt.preventDefault();
let title = $("#title").val();
let rating = $("#rating").val();

let movieInfo = { title, rating, currentId }
//not understanding this part
const HTMLtoAppend = createMovieDataHTML(movieInfo);

currentId++
movieList.push(movieInfo);

$("#table-body").append(HTMLtoAppend);
$("#submitForm").trigger("reset");

})

$("#table-body").on("click", ".btn.btn-danger", function(evt) {
    let remove = movieList.findIndex(movie => movie.currentId === +$(evt.target).data("deleteId"))

    movieList.splice(remove, 1);

    $(evt.target).closest("tr").remove();

});

})

function createMovieDataHTML(data) {
    return `
    <tr>
      <td>${data.title}</td>
      <td>${data.rating}</td>
      <td>
        <button class="btn btn-danger" data-deleteId=${data.currentId}>
          Delete
        </button>
      </td>
    <tr>
  `;
}