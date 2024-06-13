const arr = ['a', 'b', 'c', 'd'];

const word = arr.reduceRight((acc,cur) => acc+cur);
console.log(word);



const string = '3h 45min';
const num = string.split('').filter(letter => +letter).map(number => +number);
console.log(`${num[0]}h ${num[1]}${num[2]}min`);


const numbers = string.match(/\d+/g).map(number => +number);
console.log(`${numbers[0]}h ${numbers[1]}min`);






// module.exports = {
//    root: true,
//    env: { browser: true, es2020: true },
//    extends: [
//      'eslint:recommended',
//      'plugin:react/recommended',
//      'plugin:react/jsx-runtime',
//      'plugin:react-hooks/recommended',
//    ],
//    ignorePatterns: ['dist', '.eslintrc.cjs'],
//    parserOptions: {
//      ecmaVersion: 'latest',
//      sourceType: 'module',
//      ecmaFeatures: {
//        jsx: true,
//      },
//    },
//    settings: { react: { version: '18.2' } },
//    plugins: ['react', 'react-refresh', 'react-hooks'],
//    rules: {
//      'react-refresh/only-export-components': [
//        'warn',
//        { allowConstantExport: true },
//      ],
//      'react/prop-types': 'off',
//      'no-unused-vars': 'warn',
//      'react/jsx-filename-extension': [1, { extensions: ['.jsx'] }],
//      'react/react-in-jsx-scope': 'off',
//      quotes: ['warn', 'single'],
//      semi: ['warn', 'always'],
//      'no-console': 1,
//    },
//  };