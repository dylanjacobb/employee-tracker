const inquirer = require('inquirer');
const fs = require('fs');
const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '',
    database: 'employeeTracker_DB'
});

const start = () => {
    inquirer.prompt({
        type: '',
        name: '',
        messages: 'What would you like to do?',
        choices: [
            
        ]

    })
    // connection.query('SELECT name FROM employeeTracker_db', (err, res) => {
    //     if (err) throw err; 
    // })
}