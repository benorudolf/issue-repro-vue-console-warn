# Brief
This is a demo app for triggering a Vue 3 console.warn recursion/infinite loop inside the development console causing the browser tab to freeze. It requires a very specific setup. **It might not be a Vue 3 issue!**

# Get started

**Clone the repo:**
```
$ git clone git@github.com:benorudolf/issue-repro-vue-console-warn.git
```

**Install dependencies:**
```
$ npm install
```

**Run local dev server:**
```
$ npm run dev
```
The local dev server will host the app at `http://localhost:7777`. Port can be changed in `/vite.config.js`. 

# Reproduce issue 

1. Open the page in the browser; it should direct you to the Page component route `/page`. 
2. Open the development console and make sure you have the *Warnings* log level checked.
3. Open `Page.vue` in an editor. Create any sort of error inside the template e.g. change `{{ name }}` to `{{ nam }}`.
4. Return to the browser.

If the replication was successful you should see console warnings being created infinitely and your browser tab freezing. 

# Current findings

This only seems to happen:
 * On errors inside the component `<template>`.
 * If the reporting 3rd party widget is initialized.
 * On route components. Trying to do this on the root `App.vue` component will not trigger the recursion. It will also not trigger on a direct child component of the root `App.vue` component.
* Using Vite's HMR. The issue will no happen on page reload/refresh. Trying to replicate with webpack and HMR wasn't successful. 

There are 3 different repeating warnings being printed in random capacity: 
* `Property "__obj_id" was accessed during render but is not defined on instance.` 
* `[Vue warn]: Avoid app logic that relies on enumerating keys on a component instance. The keys will be empty in production mode to avoid performance overhead.` 
* `[Vue warn]: Property "hasOwnProperty" was accessed during render but is not defined on instance.` 
* The first warning (`Property "__obj_id"...`) seems to only appear in the beginning then it doesn't occur anymore. 

This is a minimal reproduction version. In the original project there were cases where the recursion would stop at some point or be very brief. 

The console warnings appear after the error or warning. As mentioned in the previous point; in cases where the recursion stopped, the error log would be the last thing printed.  

# Environment 

OS: MacOS BigSur 11.6 (20G165)  
Browser: Brave 1.41.100 Chromium: 103.0.5060.134 (Official Build) (x86_64)  
Node: v16.14.0  
