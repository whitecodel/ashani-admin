# ashani-admin

### an admin panel with nodejs for backend development

## Get Started

#### INSTALLATION:
    git clone https://github.com/whitecodel/ashani-admin.git

    cd ashani-admin

    npm install

#### RUN:
    npm run dev

now code is running on internal ip 127.0.0.1 and port 3000

#### BASIC CONFIGURSTIONS:

##### **file .env:**  
**here you can setup**  
- mongo db uri
- default port
- salt round
- token secret
- session secret
- admin default password

##### **file config/createAdmin.js:** 
**in this file there is a function createadmin() this function is called as soon as the app is run which creates a new admin**

##### **folder public:** 
**In public folder you can put your static files like css, js, images**

## Features

#### SNACKBAR: 
success => `successSnakbar(msg)`  
failed => `failedSnakbar(msg)`  

default position is bottom-right if you want to change position you can pass extra parameter  
**EX:** `successSnakbar(msg, "bottom-right")`

