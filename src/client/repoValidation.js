
// This function validates that this repo is able to be operated on by this application
// The repository must be public and not too large
export async function repoValidation(input){
  if(!hasValueInField(input)){
    sendAlert("Enter A Valid URL");
    return false;
  }
  if(!isURL(input)){
    sendAlert("Enter A Valid URL");
    return false;
  }
  if(!isGitHubRepo(input)) {
    sendAlert("Not A Valid Repository");
    return false;
  }

  const repoVisibilityStatus = await getRepoVisibilityStatus(input);
  if(repoVisibilityStatus !== "Public") { // bug fixed: != comparison always returned true because a promise compared to a string is false
    sendAlert(repoVisibilityStatus);
    return false;
  }
  
  if(!checkRepoSize(input)){
    sendAlert("Repository too large to process");
    return false;
  }
  return true;
}

// ------------Helper Functions ---------------
function hasValueInField(input){
  // returns false if no string in input
  return typeof input === "string" && input.trim().length > 0;
}

function isURL(input) {
  try {
    new URL(input);
    return true;
  } catch (err) {
    return false;
  }
}

// Regex to match HTTPS and SSH GitHub repository URLs from
// https://stackoverflow.com/questions/23976019/how-to-verify-valid-format-of-url-as-a-git-repo
// /^(([A-Za-z0-9]+@|http(|s)\:\/\/)|(http(|s)\:\/\/[A-Za-z0-9]+@))([A-Za-z0-9.]+(:\d+)?)(?::|\/)([\d\/\w.-]+?)(\.git){1}$/i
// /^([A-Za-z0-9]+@|http(|s)\:\/\/)([A-Za-z0-9.]+(:\d+)?)(?::|\/)([\d\/\w.-]+?)(\.git)?$/i
function isGitHubRepo(input) {
  const githubRepoRegex = new RegExp(
    /^(https?:\/\/|git@)github\.com[\/:]([a-zA-Z0-9._-]+)\/([a-zA-Z0-9._-]+)(\.git)?\/?$/,'i' // i is case insensitivity flag
  );
  // test is a method in RegExp that returns true or false if the input string matches the expression
  return githubRepoRegex.test(input);
}

async function getRepoVisibilityStatus(input) {
  try {
      const response = await fetch(input);
      if (response.status === 200) {
          return "Public";
      } else if (response.status === 401 || response.status === 404) {
          // It could be private or simply not exist. Without authentication, we can't be sure.
          return "Private or Not Found (unauthenticated)";
      } else {
          return `Unexpected status: ${response.status}`;
      }
    } catch (error) {
    return "Network error occurred";
  }
}

// TODO Implement function
function checkRepoSize(input){ 
  return true;
}


function sendAlert(reason){
  alert(reason);
  console.log(reason);
}