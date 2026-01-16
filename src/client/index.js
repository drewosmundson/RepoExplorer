
import { userAuth } from "./users/userAuth.js"
import { repoUrlValidation } from "./repoValidation/repoUrlValidation.js"
import { repoSizeValidation } from "./repoValidation/repoSizeValidation.js"

document.addEventListener('DOMContentLoaded', () => {
  const uploadButton = document.getElementById("UploadRepoInput");
  const inputField = document.getElementById("UploadRepoButton");

  //Event listeners
  uploadButton?.addEventListener('click', () => {
      const url = inputField.value.trim()
  });
});



