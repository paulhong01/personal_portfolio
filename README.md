# personal_portfolio
A new [personal website](https://paulhong01.github.io/personal_portfolio) using React


## Deploy as a Github page
1. Install ```gh-page``` package by using ```npm install gh-page```
2. Add some properties to the ```package.json```
   - Add the ```homepage``` field .  
   ```"homepage": https://{github_id}.github.io/{github_repo}```
   - Add ```predeploy``` and ```deploy``` under scripts .  
   ```
   "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "predeploy": "yarn run build",
		"deploy": "gh-pages -d build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"},
3. Run ```npm run deploy``` to deploy the website!
