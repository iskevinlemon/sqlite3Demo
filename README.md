# sqlite3Demo
Demo for using sqlite3

## Commands
### Initialise a database
```sh
sqlite3 database.db
```
### Create table
E.g creating a Customers table
```sh
CREATE TABLE Customers(customer_id INTEGER NOT NULL, customer_name VARCHAR(255));
```

### Show all tables
```sh
.tables
```

### Show all commands use to create the table (show db structure)
```sh
.schema Customers
```

### Show all records
```sh
SELECT * FROM Customers;
```

### Enable foreign key constraint
```sh
PRAGMA foreign_keys=ON;
```

### Generate all of the commands needed to recreate the database
```sh
.dump
```

### Exit
```sh
.exit
```
