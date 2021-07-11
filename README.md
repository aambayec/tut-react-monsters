# Monsters Rolodex

Basic React Tutorial from [complete-react-developer-zero-to-mastery](https://www.udemy.com/course/complete-react-developer-zero-to-mastery)

## To Run

```shell
yarn start
```

## To Deploy in Github

1. ``$ yarn add gh-pages``

2. In `package.json` add these new items.

     ```json
     {
         "homepage": "https://<your-github-username>.github.io/<your-github-repo-name>",
             "scripts": {
                 "predeploy": "yarn build",
                 "deploy": "gh-pages -d build"
         },
     }
     ```

3. ``$ yarn deploy``
4. ``$ git add -A``
