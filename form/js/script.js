import { CreateColumn } from "../js/components/create-column.js";
import { checkFormError } from "../js/utils/checkFormError.js";

const firstName = document.querySelector("#first_name");
const lastName = document.querySelector("#last_name");
const email = document.querySelector("#email");
const phoneNumber = document.querySelector("#phone_number");
const country = document.querySelector("#country");
const submitButton = document.querySelector("#submit_button");
const usersTableBody = document.querySelector("#users_list");

const formFields = [firstName, lastName, email, country, phoneNumber];

const firstNameError = document.querySelector("#err_first_name");
const lastNameError = document.querySelector("#err_last_name");
const emailError = document.querySelector("#err_email");
const phoneNumberError = document.querySelector("#err_phone_number");
const countryError = document.querySelector("#err_country");

const errorFields = [
  firstNameError,
  lastNameError,
  emailError,
  countryError,
  phoneNumberError,
];
submitButton.addEventListener("click", function (event) {
  event.preventDefault();
  let allFilled = [];

  for (let i = 0; i < formFields.length; i++) {
    allFilled.push(checkFormError(formFields[i], errorFields[i]));
  }

  const row = document.createElement("tr");

  if (!allFilled.includes(false)) {
    for (const field of formFields) {
      const column = CreateColumn(field.value);
      row.appendChild(column);
    }
    usersTableBody.appendChild(row);
  }
});
