import React from 'react';
import {
    Link
} from 'react-router-dom';

import '../../../page_styles/admin_panel/toolbar/toolbar_component__content_section.css';

import PlusIcon from '../../../static/icons/admin_panel__plus_icon.svg';

const connect = require("react-redux").connect;

class Content_section extends React.Component {

    constructor( props ) {
        super( props );

        this.state = {
            'article_storage' : this.props.redux__article_data
        };

    }

    render( ) {

        let jsx_list_of_articles = [];

        if ( typeof this.state.article_storage != undefined && Object.keys( this.state.article_storage ).length > 0 ) {

            for ( let i = 0 ; i < Object.keys( this.state.article_storage ).length ; i++ ) {

                jsx_list_of_articles.push(
                    <li
                        key={ this.state.article_storage[i] }
                        className="ArticleBlock"
                    >
                        <img
                            src={`data:image/png;base64,${ this.state.article_storage[i]["picture"] }`}
                            className="ArticleImage"
                        />
                        <h2
                            className='ArticleTitle'
                        >
                            {
                                this.state.article_storage[i]["title"]
                            }
                        </h2>
                    </li>
                );

            }

        }

        return (
            <div className='block__content_section' >
                <div
                    className='block__section_name'
                >
                    <h3>
                        Раздел контента
                    </h3>
                </div>
                <ul
                    className='block__band'
                >
                    <li
                        className='block__creating_an_article'
                    >
                        <div
                            className='block__centering_field'
                        >
                            <Link
                                to={`/articleeditor`}
                                className='button__creating_an_article'
                            >
                                <img
                                    src={ PlusIcon }
                                />
                            </Link>
                        </div>
                    </li>
                    {
                        jsx_list_of_articles
                    }
                </ul>
            </div>
        );
        
    }

}

function mapStateToProps( state ) {
    return {
        redux__article_data : state.redux__article_data
    };
}

export default connect( mapStateToProps )( Content_section );