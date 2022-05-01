export function dragAndDrop() {
  // App
  const cards = document.querySelectorAll(".card");
  const dropzones = document.querySelectorAll(".dropzone");

  //our cards
  cards.forEach((card) => {
    card.addEventListener("dragstart", dragstart);
    card.addEventListener("drag", drag);
    card.addEventListener("dragend", dragend);
  });

  function dragstart() {
    // console.log("> CARD: Start dragging");
    dropzones.forEach((dropzone) => dropzone.classList.add("highlight"));

    this.classList.add("is-dragging");
  }

  function drag() {
    // console.log("> CARD: Is dragging");
  }

  function dragend(event) {
    // console.log("> CARD: Stop drag");
    dropzones.forEach((dropzone) => dropzone.classList.remove("highlight"));

    this.classList.remove("is-dragging");
  }

  // place where we will drop cards
  dropzones.forEach((dropzone) => {
    dropzone.addEventListener("dragenter", dragenter);
    dropzone.addEventListener("dragover", dragover);
    dropzone.addEventListener("dragleave", dragleave);
    dropzone.addEventListener("drop", drop);
  });

  function dragenter() {
    // console.log(">DROPZONE: Enter in zone");
  }
  function dragover() {
    // console.log(">DROPZONE: Over");

    this.classList.add("over");

    const cardBeingDragged = document.querySelector(".is-dragging");

    this.appendChild(cardBeingDragged);
  }
  function dragleave() {
    // console.log(">DROPZONE: Leave");
    this.classList.remove("over");
  }
  function drop() {
    // console.log(">DROPZONE: dropped");
    this.classList.remove("over");
  }
}
