export function checkFormError(param, errorParam) {
  if (!param.value) {
    errorParam.innerText = param.getAttribute("data-name") + ` cannot be empty`;

    errorParam.classList.add("error");
    return false;
  } else {
    errorParam.innerText = "";
    return true;
  }
}
