function openModal(id) {
  document.getElementById(id).style.display = "block";
}
function closeModal(id) {
  document.getElementById(id).style.display = "none";
}

function filter(value) {
  const allSections = document.querySelectorAll(".kelas");

  allSections.forEach((section) => {
    if (value === "all") {
      section.style.display = "block";
    } else {
      if (section.id === value) {
        section.style.display = "block";
      } else {
        section.style.display = "none";
      }
    }
  });
}
