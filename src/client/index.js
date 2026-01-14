
import { userAuth } from "./users/userAuth.js"
import { repoUrlValidation } from "./repoValidation/repoUrlValidation.js"
import { repoSizeValidation } from "./repoValidation/repoSizeValidation.js"

document.addEventListener('DOMContentLoaded', () => {
  const uploadButton = document.getElementById("UploadRepoInput");
  const inputField = document.getElementById("UploadRepoButton");

  //Event listeners
  uploadButton?.addEventListener('click', () => {
    const url = inputField.value.trim()

    // Check that the user has not recently submitted another request for ddos prevention.
    if(!userAuth(user)){
      return false;
    }

    // Check if the url is a github repo and public
    if(!repoUrlValidation(url)) {
      return false;
    }

    // parse repo URL for user and repo name for git api
    const { owner, repo } = parseGitHubUrl(url);


    // check if the github repo is a vaild size to scan
    if(!repoSizeValidation(inputField.value.trim())) {
      return false;
    }
    return true;
  });
});



function parseGitHubUrl(url) {
  const match = url.match(/github\.com\/([^\/]+)\/([^\/]+)/);
    if (match) {
      return { owner: match[1], repo: match[2].replace('.git', '') };
    }
  throw new Error('Invalid GitHub URL');
}