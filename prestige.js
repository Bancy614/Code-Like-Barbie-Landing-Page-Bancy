function bookNow(event) {
  // event.preventDefault();
  let name = prompt("What is your first name?");
  let days = prompt("Booking for how many days");

  if (name !== null) {
    name = name;
  } else {
    name = "Guest";
  }

  if (days !== null) {
    days = days;
  } else {
    days = "-";
  }

  alert(
    `Hi ${name}, welcome for ${days} days at Prestige guest lodge. Please forward the details including your telephone number to prestigeguestlodge@yahoo.com Thank you. `
  );
}
let bookNowBtn = document.querySelector("#button");
bookNowBtn.addEventListener("click", bookNow);
