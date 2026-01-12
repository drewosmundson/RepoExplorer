import { repoVailidation } from "./repoValidation.js"


document.addEventListener('DOMContentLoaded', () => {
  const uploadButton = document.getElementById("UploadRepoInput");
  const inputField = document.getElementById("UploadRepoButton");

  //Event listeners
  uploadButton?.addEventListener('click', () => {
    repoVailidation(inputField.value.trim());
  });
});