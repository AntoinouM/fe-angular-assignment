# FEAngularAssignment

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.2.11.
It is an assignment for the hiring process of Oper.

## Project

The app needs to have the functionalities of displaying the top 10 rated TV shows
and top 10 movies, a search function for both and a detailed view for individual
items.

Please use TheMovieDB API found at https://developers.themoviedb.org/3 to
implement this.

## Requirements

### Functional requirements

- Think of the user experience from the start, responsive design is a must but consider how you would use the app and make the UX easy to use
- When the app loads, the TV SHOWS tab should be selected.
- Clicking on a tab loads the top 10 MOVIES/TV SHOWS depending on the
  selected tab.
- The search is performed only when there are 3 or more characters in the
  search bar and it should be triggered only one second after the user has
  stopped typing.
- The search field should be live and react to any change in the input field.
- The search should use the search endpoint from TMDB.
- When the search is performed, results should appear under the search box.
- Switching between tabs while searching should trigger the search again with
  the same search term for the selected tab and update the results.

- Bonus: make the screen infinite scrollable by loading new items as user
  reaches the bottom of the page, keep the sorting order while new items are
  loaded.
- Bonus: make any default choices/numbers configurable.

### Technical requirements

- Latest stable version of Angular should be used
- Use SCSS with BEM syntax when writing style classes
- Application should be easily themed
- For the state management use Angular services with RxJS or NgRx store
- Each page should be its own route
- Make use of RxJS operators, Angular Signals (Input and Output signals with
  computed variables) and new syntax
- Make components reusable with input and output params
- Use Angular animations
- Bonus: Use Angular container-presenter pattern

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
