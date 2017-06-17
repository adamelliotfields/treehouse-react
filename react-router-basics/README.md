# About this Course
Learn to use React Router v4, a declarative routing solution for React, to manage navigation and rendering of components in your applications.

### What you'll Learn
Declaring routes  
Navigating between routes  
Nesting routes  
URL parameters  
404 error routes  
Changing routes programmatically  

### Notes
I've added server-side routing and rendering to make this a *universal* React app.  

In development, Webpack Dev Server is used with HTML Webpack Plugin and Style Loader to create an in-memory HTML page with styles injected.  

In production, CSS is minified with PostCSS CSSNano and extracted using Extract Text Webpack Plugin. The rendered components are injected into an EJS template (you could also use an ES2015 template literal).  

Morgan is used to log HTTP requests. When requesting a route manually (e.g., typing `http://localhost:8080/about` in the browser), you'll see the request logged to the command line. When accessing a route via a link in the app, no HTTP request is made, and React updates the components accordingly.  

Page titles are updated in the `componentDidMount()` lifecycle method.  

### Instructions
1. Download and extract the [zip](https://github.com/adamelliotfields/treehouse-react/raw/master/react-router-basics/react-router-basics.zip).
2. Run `npm install` or `yarn install`.
3. Run `npm run serve` or `yarn serve`.
