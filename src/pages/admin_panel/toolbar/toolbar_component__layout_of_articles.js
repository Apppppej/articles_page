import {
    Link
} from 'react-router-dom';

import '../../../page_styles/admin_panel/toolbar/toolbar_component__layout_of_articles.css';

const connect = require("react-redux").connect;

function Article_Editor( props ) {

    let jsx_list_of_articles = [];

    if (typeof props.redux__article_data != undefined && Object.keys(props.redux__article_data ).length > 0 ) {

        for (let i = 0; i < Object.keys(props.redux__article_data ).length; i++ ) {

            jsx_list_of_articles.push(
                <li
                    key={ props.redux__article_data[i] }
                    className="ArticleBlock"
                >
                    <img
                        src={`data:image/png;base64,${ props.redux__article_data[i]["picture"] }`}
                        className="ArticleImage"
                    />
                    <h2
                        className='ArticleTitle'
                    >
                        {
                            props.redux__article_data[i]["title"]
                        }
                    </h2>
                </li>
            );

        }

    } else {

        jsx_list_of_articles.push(
            <li
                key="0"
                className="WarningBlock"
            >
                <h2
                    className='WarningText'
                >
                    Статей пока нет. Напишите первую!
                </h2>
            </li>
        );

    }

    return (
        <div className='ComponentBlock' >
            <ul
                className='ArticleLayoutBlock'
            >
                <li
                    className='ArticleCreationBlock'
                >
                    <Link
                        to={`/articleeditor`}
                        className="ArticleCreationButton"
                    >
                        {/* <img
                            src={ site_data["icons_/plus_sign_#fafafa"] }
                        /> */}
                        
                        <div
                            className='CreationBlock'
                        >
                            <h3>&#43;</h3>
                        </div>
                    </Link>
                </li>
                {
                    jsx_list_of_articles
                }
            </ul>
        </div>
    );
};

function mapStateToProps( state ) {
    return {
        redux__article_data : state.redux__article_data
    };
}

export default connect( mapStateToProps )( Article_Editor );