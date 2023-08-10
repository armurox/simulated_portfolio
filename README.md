# Finance: A Simulated Stock Portfolio
Problem Set for Week 9 Of CS50

## Libraries, Tools and Languages used
Python
HTML
CSS
Flask (and flask-session for cookies and session use)
SQL (specifically sqlite3)
Bootstrap

## Summary
Finance is a web application which allows users to carry out a simulated trading sequence, with a portfolio keeping track of your orders with real time stock prices using the Yahoo Finance API. The application also keeps track of the history of all your trades

## How to run
1. Clone this repo
2. Install the required dependencies with "pip install -r requirements.txt"
3. Run command 'export FLASK_APP=application.py' to set the Flask environment variable
4. Run command 'flask run' to open on localhost
5. When the finance site opens in your browser, register for a new account (upper right corner) to create your own stock portfolio, and you're good to go!

## Features
### Register
Allows you to create an account, and stores your username and password

### Change Password
Allows you to change your password while logged in, permanently altering it in the database

### "Buy"
Allows you to "buy" stocks based on their realtime stock prices, storing the information in the portfolios database.

### "Sell"
Allows you to "sell" stocks based on their realtime stock prices, storing the information in the portfolios database.

### History
Provides the history of all your trades

---
Please note that the Login and Logout functions and all functions in helpers.py came with the assignment starter code and are not my work. Starter code ©2023 David J. Malan/ Harvard