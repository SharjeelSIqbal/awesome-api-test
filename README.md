# typescript-node-template
Typescript node template with Jest, Express, Eslint, Prettier, Husky and Docker




# Docker Setup
Install Docker https://docs.docker.com/get-docker/

Once installed go into your terminal

```
  docker build -t flash-resume-dev .
  docker run -p 3001:3001 -v $(pwd):/usr/src/app flash-resume-dev
```
This might take a few minutes


Navigate to http://localhost:3001/

Congratulations Docker is now set up!
