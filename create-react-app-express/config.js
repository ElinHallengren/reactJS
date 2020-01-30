var config = {
    database: {
        host:      '127.0.0.1',     // database host
        user:       'root',         // your database username
        password: '',         // your database password
        port:       3306,         // default MySQL port
        db:       'mynode'         // your database name
    },
    server: {
        host: '127.0.0.1',
        port: '3000'
    }
}
 
module.exports = config

/* 
module.exports = config

CREATE TABLE users (
id int(11) NOT NULL auto_increment,
name varchar(100) NOT NULL,
age int(3) NOT NULL,
email varchar(100) NOT NULL,
PRIMARY KEY (id)
);
*/
