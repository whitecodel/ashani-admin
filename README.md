# ashani-admin

### an admin panel with nodejs for backend development

## Demo: [https://ashani-admin.herokuapp.com](https://ashani-admin.herokuapp.com)

#### username and password:

    admin

    123456

### WhiteCodel presents you an admin panel with nodejs, ejs, express, mongoose to minimize your basic operations like

-   mvc architacture
-   jwt token authentication
-   jwt session authentication
-   send email
-   image filter
-   snackbar
-   routes management
-   api for app

## Get Started

#### INSTALLATION:

    git clone https://github.com/whitecodel/ashani-admin.git

    cd ashani-admin

    npm install

#### RUN:

    npm run dev

now code is running on internal ip 127.0.0.1 and port 3000

#### HOW IT WORKS:

-   As soon as the app starts, the index.js file is run, and inside it is the create admin function call, which creates the initial admin.
-   We are using ejs view engine with express.js in it.

#### BASIC CONFIGURSTIONS:

##### **file .env:**

**here you can setup**

-   mongo db uri
-   default port
-   salt round
-   token secret
-   session secret
-   admin default password

##### **file config/createAdmin.js:**

**in this file there is a function createadmin() this function is called as soon as the app is run which creates a new admin**

##### **file config/imageFilter.js:**

**in this file there is a function imageFilter() you can use this function with multer to validate a image**

##### **file config/mailer.js:**

**in this file there is a function sendEmail() You can use this function to send email**

    sendEmail({to, subject, body});

#### FOLDER STRUCTURE:

##### **folder middlewares:**

**There are 2 middleware files in it. Adminauth.js and Appauth.js have middleware made for admin and app respectively, you can create all your middlewares here.**

**NotLoggedIn => checking loggedin in both file**

##### **folder models:**

**You can create all your models here.**

##### **folder public:**

**In public folder you can put your static files like css, js, images**

##### **folder views:**

**In this folder you can create all your views for admin or app. If you do not know how to use ejs, then you can see the documentation by visiting its official website [ejs.co](https://ejs.co/).**

#### ROUTES:

##### **ADMIN ROUTES:**

-   make a file for your crud and other operation in routes/admin.
-   register this file into admin-routes.js

##### **APP ROUTES:**

-   make a file for your crud and other operation in routes/app.
-   register this file into app-routes.js

## Features

#### SNACKBAR:

success =>

    successSnackbar(msg);

failed =>

    failedSnackbar(msg);

default position is bottom-right if you want to change position you can pass extra parameter  
**EX:** `successSnackbar(msg, "bottom-right")`

#### SWITCH:

[gitbrent bootstrap4-toggle](https://gitbrent.github.io/bootstrap4-toggle/) is now enabled

**EX:**

    <input
        name="approved"
        type="checkbox"
        id="approved"
        data-width="100%"
        data-toggle="toggle"
        data-on="Approved"
        data-off="Not Approved"
        data-onstyle="success"
        data-offstyle="danger"
    />
