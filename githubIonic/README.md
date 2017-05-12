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

To generate new pages, erase the ones in the project and use the commands
> ionic g pages (name)

To get the response from github api, we need to generate a provider:
> ionic g provider github-users

To Build/Run the application you have to add android:
> ionic platform add android
> ionic build android
> ionic run android

If any error occur, check those links
[Cordova docs](https://cordova.apache.org/docs/en/latest/guide/platforms/android/#requirements-and-support)
[Ionic Fórum](https://forum.ionicframework.com/t/error-could-not-find-gradle-wrapper-within-android-sdk/79527)
[Link1 - stackoverflow](http://stackoverflow.com/questions/36198165/failed-to-find-android-home-environment-variable)
[Link2 - stackoverflow](http://stackoverflow.com/questions/42613882/error-could-not-find-gradle-wrapper-within-android-sdk-might-need-to-update-yo)


some build info:
[New: Better Error Reporting for Ionic Apps](http://blog.ionic.io/improvements-to-ionic-build-process/)