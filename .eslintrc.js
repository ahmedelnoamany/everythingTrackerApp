module.exports = {
    "extends": "airbnb",
    "rules": {
      "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
      indent: ['error', 2],
      'react/jsx-indent': [2,2],
      'jsx-quotes': ["error", "prefer-single"],
      "react/self-closing-comp": ["error", {
        "component": true,
        "html": false
      }],
      "class-methods-use-this": ["error", { "exceptMethods": ["buildTrackerObject"] }],
      "react/forbid-prop-types": ["disabled"],

    },
};
