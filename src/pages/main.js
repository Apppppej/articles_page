import store from "../redux__data_storage/store";
import action__adding_site_data from "../redux__data_storage/actions/action__adding_site_data";

import '../page_styles/main.css';

const connect = require("react-redux").connect;

const axios = require('axios').default;

function Main( ) {

    axios.get('127.0.0.1:9000/site_data')   // Вид возвращаемых данных - [{}]
        .then( ( res ) => {
            // dispatch( increment_site_data( res.data ) );
        })
        .catch( ( err ) => {
            console.log( err );
        })

    axios.get('127.0.0.1:9000/articles_data')   // Вид возвращаемых данных - [{} , {} , {} , ...и т.д.]
        .then( ( res ) => {
            // dispatch( increment_articles_data( res.data ) );
        })
        .catch( ( err ) => {
            console.log( err );
        })

    return (
        <main>
            Главная
        </main>
    );
};

function mapStateToProps(state) {
    return {
        redux__site_data : state.redux__site_data
    };
}

export default connect( mapStateToProps )( Main );