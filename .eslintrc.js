module.exports = {
    "extends": "standard",
    "env": {
        "browser": true,
        "es6": true,
    },
    "parser": "babel-eslint",
    "parserOptions": {
        "ecmaFeatures": {
            "experimentalObjectRestSpread": true,
            "jsx": true
        },
        "sourceType": "module",
        "ecmaVersion": 2018
    },
    "plugins": [
        "react"
    ],
}
