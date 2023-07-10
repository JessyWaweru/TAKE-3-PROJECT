# README




MIMI-KENYA EVENTSHUB
Mimi-kENYA EventsHub is a mock web application that aims at gathering information on forthcoming events and present them in a user-friendly manner, thereby assisting individuals in eﬀortlessly discovering events.


This application has been built with the following tools:

React ruby Rails sqlite TailwindCSS

React 18.2.+
Ruby v2.7.+
SQlite3 v1.6
ActiveRecord v7.0.4
Rake v13.0.6
Puma v6.1
Rails v7.0.4
active_model_serializers v0.10.13
Application Features
User Authentification - A user can signup using their name, email and password, they can also login using their email and password.
A user can see all upcoming events.
A user can create, update and delete their events.
Installation
To run Mimik Events in development, you must install:

Ruby version 2.7.0
Rails version 6.0.3.4 or later
Node.js version 12.0.0 or later
SQLite version 3.24.0 or later
Clone the Repository:

git clone git@github.com:JessyWaweru/TAKE-3-PROJECT.git

Install API Dependencies

    bundle install
    rails db:migrate
    rails db:seed
Start rails server

     rails s
Open a new terminal and navigate to the client directory:

   cd ./client
Install React dependencies

    npm install
Start React client to open in browser

  npm run start
To run it in production, install


Using the Application
Sign up or log in to the application to view all events.
Add events to the application by clicking on the Add event button on the events page.
Updating and deleting events from the application is only applicable for events that have been created by the logged in user.


This user has precreated events that can be used to test update, delete and create new events.

Contributing
This project was contributed to by:

Jessy Waweru
Jude Koome
Francis Gichohi
Brian Mahui
