# Monsters Rolodex

Basic React Tutorial from [complete-react-developer-zero-to-mastery](https://www.udemy.com/course/complete-react-developer-zero-to-mastery)

## To Run

```shell
yarn start
```

## To Deploy in Github Pages

1. ``yarn add gh-pages``

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

3. ``yarn deploy``
4. ``git add -A``
5. ``git commit -m "adding files for github pages"``
6. ``ggpush`` If you don't have zsh shell, you will have to run: ``git push origin master``
7. See live github page <https://aambayec.github.io/tut-react-monsters/>.

## To Update React Packages

### Using Yarn

Check your version

```shell
yarn list react react-dom react-scripts
```

Modify your package.json, add `^` to enable updates without breaking changes

```shell
yarn upgrade
```

### Using NPM

Check your version

```shell
npm list react react-dom react-scripts
```

Modify your package.json, add `^` to enable updates without breaking changes

```shell
npm update
```

If you saw vulnerabilities run:

```shell
npm audit fix
```
