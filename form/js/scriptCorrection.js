import { CreateColumn } from "./components/create-column.js";
const firstName = document.querySelector("#first_name");
const lastName = document.querySelector("#last_name");
const email = document.querySelector("#email");
const phoneNumber = document.querySelector("#phone_number");
const country = document.querySelector("#country");
const submitButton = document.querySelector("#submit_button");
const usersTableBody = document.querySelector("#users_list");

const formFields = [firstName, lastName, email, country, phoneNumber];

// # Tant que tous les champs ne sont pas remplis, ne rien ajouter au tableau
// # Les messages d'erreurs doivent disparaitre pour les champs remplis
//     Si dans une précédente validation ces champs étaient vides

submitButton.addEventListener("click", function (event) {
  event.preventDefault();

  if (!isFormValid1(formFields)) {
    for (const field of formFields) {
      displayErrorMessages(field);
    }
    return;
  }

  const row = document.createElement("tr");
  for (const field of formFields) {
    displayErrorMessages(field);
    const column = CreateColumn(field.value);
    row.appendChild(column);
  }

  const btn = document.createElement("button");
  btn.innerHTML = "Delete";
  btn.classList.add("deleteRow");
  row.appendChild(btn);

  usersTableBody.appendChild(row);
  const deleteRow = document.querySelectorAll(".deleteRow");

  emptyForm(formFields);
  for (const row of deleteRow) {
    row.addEventListener("click", function (event) {
      event.preventDefault();
      this.parentElement.remove();
    });
  }
});

function displayErrorMessages(field) {
  const fieldDisplayName = field.getAttribute("data-name");
  const errorField = document.querySelector(`#err_${field.name}`);
  if (!field.value) {
    errorField.innerText = `${fieldDisplayName} cannot be empty`;
    errorField.classList.add("error");
  } else {
    errorField.innerText = "";
  }
}

function isFormValid1(formFields) {
  // return formFields.every((field) => field.value);
  return formFields.every((field) => field.value !== "");
}

function isFormValid2(formFields) {
  for (const field of formFields) {
    if (!field.value) {
      return false;
    }
  }
  return true;
}

function emptyForm(formFields) {
  for (const field of formFields) {
    field.value = "";
  }
}
