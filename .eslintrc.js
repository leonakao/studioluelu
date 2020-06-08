module.exports = {
    root: true,
    env: {
        browser: true,
        node: true
    },
    parserOptions: {
        parser: 'babel-eslint'
    },
    extends: [
        '@nuxtjs',
        'plugin:nuxt/recommended',
        "plugin:vue/recommended"
    ],
    // required to lint *.vue files
    plugins: ["vue"],
    // add your custom rules here
    rules: {
        quotes: ["error", "double"],
        indent: ["error", 4],
        semi: ["error", "always"],
        "vue/html-indent": ["error", 4, {
            "attribute": 1,
            "baseIndent": 1,
            "closeBracket": 0,
            "alignAttributesVertically": true,
            "ignores": []
        }]
    }
}
