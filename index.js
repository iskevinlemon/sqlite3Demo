const sqlite3 = require('sqlite3').verbose();

const db = new sqlite3.Database('./database.db', function(err){
    if(err){
        console.error(err);
        process.exit(1); // Bail out we can't connect to the DB
    }
    else{
        console.log("Database connected");
        db.run("PRAGMA foreign_keys=ON"); // This tells SQLite to pay attention to foreign key constraints
    }
});

// Add SQL queries below

// Query the db (get data out)

// .get only gets the first row in the table
// db.get("SELECT * FROM Customers", function(err, data){
//     if(err){
//         console.error(err);
//         process.exit(1);
//     }
//     else{
//         console.log(data); // data is returned as JSON
//     }
// });

// Get all data
// db.all("SELECT * FROM Customers", function(err, data){
//     if(err){
//         console.error(err);
//         process.exit(1);
//     }
//     else{
//         console.log(data); // data is returned as JSON
//     }
// });

// Get data with WHERE clause
// db.all("SELECT * FROM Customers WHERE customer_name='Edward' ", function(err, data){
//     if(err){
//         console.error(err);
//         process.exit(1);
//     }
//     else{
//         console.log(data);
//     }
// });

// Get data with WHERE clause (better)
db.all("SELECT * FROM Customers WHERE customer_name=? ", ["Edward"] , function(err, data){
    if(err){
        console.error(err);
        process.exit(1);
    }
    else{
        console.log(data);
    }
});

// Add data to db
db.run("INSERT INTO Customers VALUES (3, 'Jennifer') ", function(err){
    if(err){
        console.error(err);
        process.exit(1);
    }
});