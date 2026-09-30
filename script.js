const showInfoBtn = document.getElementById("showInfoBtn");
const outputCard = document.getElementById("outputCard");
const fullNameInput = document.getElementById("fullName");
const emailInput = document.getElementById("email");
const ageInput = document.getElementById("age");
const phoneInput = document.getElementById("phone");
const birthdayInput = document.getElementById("birthday");
const addressInput = document.getElementById("address");
const occupationInput = document.getElementById("occupation");
const bioInput = document.getElementById("bio");
const favColorSelect = document.getElementById("favColor");
const newsletterCheckbox = document.getElementById("newsletter");

const pageHeading = document.querySelector(".page-header h1");
const contactRadios = document.querySelectorAll(".contact-radio");

const panels = document.getElementsByClassName("panel");

function getSelectedContactMethod() {
  let selected = "Not specified";
  contactRadios.forEach((radio) => {
    if (radio.checked) {
      selected = radio.value;
    }
  });
  return selected;
}

function buildRow(label, value) {
  const row = document.createElement("div");
  row.className = "card-row";

  const labelSpan = document.createElement("span");
  labelSpan.className = "label";
  labelSpan.textContent = label;

  const valueSpan = document.createElement("span");
  valueSpan.className = "value";
  valueSpan.textContent = value || "—";

  row.appendChild(labelSpan);
  row.appendChild(valueSpan);
  return row;
}

showInfoBtn.addEventListener("click", function () {
  outputCard.innerHTML = "";

  const heading = document.createElement("h3");
  heading.textContent = fullNameInput.value.trim() || "Your Card";
  outputCard.appendChild(heading);

  outputCard.appendChild(buildRow("Full Name", fullNameInput.value));
  outputCard.appendChild(buildRow("Email", emailInput.value));
  outputCard.appendChild(buildRow("Age", ageInput.value));
  outputCard.appendChild(buildRow("Phone", phoneInput.value));
  outputCard.appendChild(buildRow("Birthday", birthdayInput.value));
  outputCard.appendChild(buildRow("Address", addressInput.value));
  outputCard.appendChild(buildRow("Occupation", occupationInput.value));
  outputCard.appendChild(buildRow("Bio", bioInput.value));
  outputCard.appendChild(buildRow("Favorite Color", favColorSelect.value));
  outputCard.appendChild(
    buildRow("Preferred Contact", getSelectedContactMethod()),
  );
  outputCard.appendChild(
    buildRow(
      "Newsletter",
      newsletterCheckbox.checked ? "Subscribed" : "Not subscribed",
    ),
  );

  outputCard.classList.remove("empty");

  const colorMap = {
    "Steel Blue": "#3f6b8f",
    "Forest Green": "#2f6b3f",
    "Sunset Orange": "#c1622d",
    "Royal Purple": "#5b3f8f",
    Charcoal: "#3a3a3a",
  };
  heading.style.color = colorMap[favColorSelect.value] || "#2c4d67";
  outputCard.style.borderStyle = "solid";
  outputCard.style.borderColor = colorMap[favColorSelect.value] || "#3f6b8f";

  outputCard.setAttribute("data-generated", "true");
  showInfoBtn.setAttribute(
    "title",
    "Info updated at " + new Date().toLocaleTimeString(),
  );

  Array.from(panels).forEach((panel) => {
    panel.style.borderColor = "#3f6b8f";
  });
  setTimeout(() => {
    Array.from(panels).forEach((panel) => {
      panel.style.borderColor = "";
    });
  }, 400);
});
