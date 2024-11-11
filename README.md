# FEAngularAssignment

This app has been created for the Front-end Engineering Assignment from **Oper**.

You can check a [live version](https://antoinoum.github.io/)

<details close>
  <summary style="text-size:1.5rem;">&nbsp;&nbsp;&nbsp;Requirements</summary>

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

</details>

## Tech Stack

- Angular 18 (latest version)
- TypeScript
- RxJS
- Angular CLI
- Angular Material

## Presentation of the App

### Key Implementations

1. **Media Search Functionality with Tabbed Navigation**

   - The app has two main tabs—TV Shows and Movies—implemented using Angular Material Tabs. These tabs are part of the dashboard component that holds the media content for each tab.
   - By default, each tab displays the top 10 rated TV shows or movies, depending on the active tab.
   - When a user performs a search, the default content is replaced by search results for the selected tab.

2. **State Management with RxJS**

   - The search state is managed with an RxJS `BehaviorSubject`.
   - State is injected directly into components using the new `inject()` lightweight syntax as opposed to the constructor approach.
   - To manage search input debounce and responsiveness, RxJS `pipe` and `debounceTime` operators were implemented.

3. **Reusable and Configurable Components**

   - Components are designed to be reusable, using Angular’s signal input and output to handle communication between components.

4. **SCSS with BEM Syntax and Theme Customization**

   - Styles are written in SCSS using the BEM syntax to maintain a modular and scalable approach to styling.
   - The application is designed to be easily themed via modification of key scss files.

5. **Angular Animations and Container-Presenter Pattern**
6. **API Communication with `HttpClient` and Interceptors**
   - The app uses Angular's `HttpClient` to handle API requests.
   - An `HttpInterceptor` is implemented for managing authorization, automatically adding the required authorization headers to each request.
   - This approach centralizes API call configurations.

## Installation and Setup

1. **Clone the repository:**

   ```bash
   git clone https://github.com/AntoinouM/fe-angular-assignment.git
   cd fe-angular-assignment
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Run the app locally:**

   ```bash
   ng serve
   ```

   - The application run on `https://localhost:4200`

4. **Get the data:**

   The application use [TheMovieDB API](https://developers.themoviedb.org/3) with authorization token in order to gather data. If you want to run the app locally you need :

- create a `.env` file in the source folder of your app
  create a `.env` file in the source folder of your app. - Create an environment variable with the name `NG_APP_KEY`
  `bash
    NG_APP_KEY=YOUR_API_KEY
    `

## Folder Structure

```
/src/app/
│
├── core
│   ├── interceptors
│   ├── models
│   └── services
├── features
│   ├── dashboard
│   ├── media-detail
│   ├── medias
│   └── search-view
├── shared
│   ├── actor-card
│   ├── footer
│   ├── ...
│   └── pipes
│
```

In features you will find all the **_main_** views that handles data logic and rely on the **_global_** components to present the data by passing it via Inputs.

## Limitation / Future Improvements

- Add more robust error handling and notifications.
- Add caching via Interceptors to improve performance
- Create infinite scrolling [example](https://dev.to/krivanek06/angular-infinite-scrolling-2jab)

## License

This project is licensed under the MIT License - see the LICENSE file for details.
