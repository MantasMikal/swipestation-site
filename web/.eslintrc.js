module.exports = {
    globals: {
        __PATH_PREFIX__: true
    },
    plugins: ['prettier'],
    rules: {
        'prettier/prettier': 'error'
    },
    extends: ['react-app', 'plugin:prettier/recommended']
};
