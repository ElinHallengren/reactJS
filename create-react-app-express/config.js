var config = {
    database: {
        host:      'netbro.ddns.net',     // database host
        user:       'byazit',         // your database username
        password: '#razib3417#',         // your database password
        port:       3306,         // default MySQL port
        db:       'node_js_react'       // your database name
    },
    server: {
        host: '127.0.0.1',
        port: '3000'
    }
}
 
module.exports = config

/* 
CREATE TABLE users (id int(11) NOT NULL auto_increment,name varchar(100) NOT NULL,password varchar(100) NOT NULL,email varchar(100) NOT NULL,PRIMARY KEY (id));
*/
