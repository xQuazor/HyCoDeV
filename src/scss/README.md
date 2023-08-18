# Main file

The main file `main.scss` should be the only `.scss` file not to begin with an underscore, so that it compiles into normal CSS. This file should contain all your imported partials folders using the `@use` rule and it's compiled css file should be linked in all pages of your application (files in the `pages/` folder can be also made to be compiled to link each compiled CSS stylesheet to it's respective page).