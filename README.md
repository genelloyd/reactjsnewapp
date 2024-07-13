
## Get Started with React Todo

Setup:
Clone the project by running the command below:
`https://github.com/genelloyd/reactjsnewapp.git`

then run:

`composer install`

`npm install`

rename `.env.example` to `.env`
then run:

`php artisan key:generate`


in the env file , uncomment this: change the DB connection to your desired database in my end I'm using mysql ---
rename the database name, username and password if any: 

DB_CONNECTION=mysql
# DB_HOST=127.0.0.1
# DB_PORT=3306
# DB_DATABASE=laravel
# DB_USERNAME=root
# DB_PASSWORD=


now you can run migrations:

`php artisan migrate`

then start the application:

`php artisan serve`

