const scriptURL =
  "https://script.google.com/macros/s/AKfycbyORFLtkyToY5JWVcBPVNYZ7Ob1DvD2ahYPzlcy6gEoTeAfnpqxo-1W/exec";
const form = document.forms["google-sheet"];

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  console.log(await new FormData(form).getAll("name", "fathername"));
  fetch(scriptURL, {
    method: "POST",
    // headers: {
    //   Accept: "application/json",
    //   "Content-Type": "application/json"
    // },
    body: new FormData(form),
  })
    .then((response) => {
      console.log(response);
      alert("Thanks for Contacting us..! We Will Contact You Soon...");
    })
    .catch((error) => console.error("Error!", error.method));
});
