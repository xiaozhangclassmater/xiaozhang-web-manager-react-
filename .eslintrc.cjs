module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended'
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh'],
  rules: {
    'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
    '@typescript-eslint/no-explicit-any': 'off',
    'react-refresh/only-export-components': 'off',
    'no-multiple-empty-lines': ['error', { max: 1 }],
    'comma-spacing': [
      2,
      {
        // 强制在逗号前后使用一致的间距  例  a , b   or a, b
        before: false,
        after: true
      }
    ],
    'key-spacing': [
      2,
      {
        // 在对象文本属性中的键和值之间强制实施一致的间
        beforeColon: false,
        afterColon: true
      }
    ],
    '@typescript-eslint/no-non-null-asserted-optional-chain': 'off',
    'accessor-pairs': 2, // 在对象和类中强制实施 getter 和 setter 对.
    'block-spacing': 1, // 块间距   return  { a : 'a' }  --> always   , default : return {a:'a'}
    'keyword-spacing': [
      2,
      {
        // 关键字的 前后空格  例如 if else  import
        before: true,
        after: true
      }
    ],
    'no-var': 'error',
    curly: [2, 'multi-line'],
    eqeqeq: ['error', 'always', { null: 'ignore' }], //要求使用 === 和 !==   不允许出现  a == b  or  a != b
    'space-unary-ops': [
      2,
      {
        // 在一元运算符之前或之后强制使用一致的间距 typeof !foo 而不是 typeof!foo;
        words: true,
        nonwords: false
      }
    ],
    'semi-spacing': [
      2,
      {
        // 强制分号前后的间距一致
        before: false,
        after: true
      }
    ],
    indent: 'off',
    // 'indent-legacy': ['error', 'tab'],
    'no-empty': 0
  }
}
