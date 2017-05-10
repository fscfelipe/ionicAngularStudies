## About the app:
It is a GitHub user's search.
This app was built with this [tutorial](https://scotch.io/tutorials/build-a-mobile-app-with-angular-2-and-ionic-2).

Since Ionic 2 provides a starter template we quickly scaffold
a simple app, we start the project with:
> ionic start githubIonic tutorial --v2

To see the app running in different SO you can run the command:
> ionic serve -l

or if you already started the serve, you can do:
> ...//localhost:8100/ionic-lab

You will see, on your project structure, there is a lot of files and folders
we will spend most of the time on the "src" folder, because there is where
the application logic is.

The whole app, is usually loaded from a simple src/index.html file. which
during build is copied to the "www" folder.

The *src/app/app.component.ts* is the root component of our app. It is loaded/declared in the *src/app/app.module.ts*, which simply represents our whole app as a module, which is the loaded in the app/main.dev.ts or app/main.prod.ts, depending on which build you do. 

