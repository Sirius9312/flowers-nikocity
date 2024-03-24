var mysql = require('mysql');

var con = mysql.createConnection({
  host: "s1.ho.ua",
  user: "flowers-nikocity",
  database: "flowers-nikocity",
  password: "godzilla12081993"
});

con.connect(function(err) {
  if (err) {
    console.log('Error');
  } else {
    console.log('DB OK!');
  }
  //con.query("SELECT * FROM customers", function (err: any, result: any, fields: any) {
    //if (err) throw err;
    //console.log(result);
  //});
});
