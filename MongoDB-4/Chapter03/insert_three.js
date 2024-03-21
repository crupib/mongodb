conn = new mongodb();
db = conn.getDB("mydb");
db.mycoll.insertOne({"name":"Karyn Francis","address":"871 Rocky Autumn Mews","city":"Gassaway",
                        "state_province":"","postal_code":"RF21 26MI","country":"UK","phone":"385-836-7870",
                        "balance":"919.76","email":"karyn.francis@fastnet.com","password":"the9642He"});
exit()
