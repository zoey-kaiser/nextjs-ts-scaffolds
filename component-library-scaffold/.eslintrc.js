module.exports = {
    root: true,
    parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true,
        },
    },
    env: {
        browser: true,
        node: true,
        es6: true,
    },
    settings: {
        react: {
            version: 'detect',
        },
        'import/resolver': {
            node: {
                extensions: ['.js', '.jsx', '.ts', '.tsx'],
            },
        },
    },
    plugins: ['@typescript-eslint'],
    extends: [
        'plugin:@typescript-eslint/recommended',
        'airbnb',
        'prettier',
        'plugin:tailwind/recommended',
        'plugin:jsx-a11y/recommended',
        'plugin:prettier/recommended',
        'plugin:sonarjs/recommended',
        'plugin:security/recommended',
    ],
    rules: {
        'import/no-extraneous-dependencies': 'off',
        'no-console': ['warn', { allow: ['warn', 'error', 'info'] }],
        '@typescript-eslint/ban-ts-comment': 'off',
        'react/button-has-type': 'off',
        'global-require': 'off',
        'no-undef': 'off',
        '@typescript-eslint/no-unused-vars': 'error',
        '@typescript-eslint/no-explicit-any': 'error',
        'react/react-in-jsx-scope': 'off',
        'react/jsx-filename-extension': [
            1,
            {
                extensions: ['.ts', '.tsx', '.js', '.jsx'],
            },
        ],
        'react/jsx-props-no-spreading': 'off',
        'import/extensions': [
            'error',
            'ignorePackages',
            {
                js: 'never',
                jsx: 'never',
                ts: 'never',
                tsx: 'never',
            },
        ],
        'jsx-a11y/anchor-is-valid': [
            'error',
            {
                components: ['Link'],
                specialLink: ['hrefLeft', 'hrefRight'],
                aspects: ['invalidHref', 'preferButton'],
            },
        ],
        'no-nested-ternary': 'off',
        'import/prefer-default-export': 'off',
    },
};
