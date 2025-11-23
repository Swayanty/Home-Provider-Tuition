document.addEventListener("DOMContentLoaded", function () {
  let btn = document.getElementById("btnSubmit");

  if (btn) {
    btn.addEventListener("click", function () {
      let name = document.getElementById("name").value.trim();
      let cls = document.getElementById("class").value.trim();
      let sub = document.getElementById("subject").value.trim();

      if (name === "" || cls === "" || sub === "") {
        alert("Please fill all required fields!");
      } else {
        alert("Form submitted (UI only).");
      }
    });
  }
});
