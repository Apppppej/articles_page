const express = require('express');
const { Pool } = require('pg');
const cors = require('cors');
const argon2 = require('argon2');
const jwt = require('jsonwebtoken');

const app = express( );
app.use(
    cors({
        origin : "*"
    })
);

const pool = new Pool({
    user : 'postgres',
    host : 'localhost',
    database : 'posts_page',
    password : 'HikigayaHachiman',
    max : 20
});

app.get('/static_data_of_the_main_page' , ( req , res ) => {

});

app.get('/static_data_of_editing_pages' , ( req , res ) => {

});

app.get('/articles_data' , ( req , res ) => {

});

app.post('/these_articles' , ( require , responce ) => {
    
    pool.connect( ( error , client , release ) => {
        if ( error ) {
            console.log( error );
        }

        client.query(`SELECT * FROM administrator_data WHERE login = '${require.query.login}';`, (err, result) => {
            if (err) {
                console.log(err);
            }

            if (result.rows.length > 0) {

                const verifyPassword = argon2.verify(result.rows[0].password, require.query.password);

                if (verifyPassword) {

                    if (verifyPassword) {

                        client.query(`INSERT INTO articles_data ( heading , preview , article ) VALUES ( '${require.query.heading}' , '${require.query.preview}' , '${require.query.article}' );` , ( err , result ) => {
                            release();
                            if ( err ) {
                                console.log( err );
                            }
                            
                            const data = {
                                login: require.query.login
                            };

                            const signature = 'L9ed4en7et5s__R1im0a';
                            const expiration = '10h';

                            const token = jwt.sign({ data }, signature, { expiresIn: expiration });

                            responce.status(200).send(token);

                        });
                        
                    }

                }

            }

        });
        
    });

});

app.listen( 9000 , ( ) => {
    console.log("Ok. Server working!");
});