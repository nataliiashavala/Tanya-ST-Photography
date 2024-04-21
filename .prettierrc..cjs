module.exports = {
  // maximum number of characters in a line
  printWidth: 100,
  // Specify the number of spaces per indentation level
  tabWidth: 2,
  // use tabs instead of spaces to indent lines
  useTabs: false,
  // Do you need a semicolon at the end of the statement
  semi: true,
  // whether to use single quotes
  singleQuote: true,
  // Print trailing commas when possible on multiple lines. (For example, single-line arrays will never have a trailing comma.) optional"<none|es5|all> ", default none
  trailingComma: "es5",
  // print spaces between parentheses in object literals
  bracketSpacing: true,
  // include parentheses around individual arrow function arguments always: (x) => x \ avoid: x => x
  arrowParens: "always",
  // Specify global whitespace sensitivity for HTML files css\strict\ignore
  htmlWhitespaceSensitivity: "css",
  // Plugins (TailwindCSS-Prettier)
  plugins: ["prettier-plugin-tailwindcss"],
};
