
import { Router } from 'express';



const router = Router();

router.post('/click', (req, res) => {
  console.log('Button clicked:', req.body);
  res.json({ ok: true });
});

export default router;




function userSubmittedRepoUrl(){
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
}