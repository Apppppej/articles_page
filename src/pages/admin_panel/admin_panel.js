import {
    Component
} from 'react';
import '../../page_styles/admin_panel/admin_panel.css';
import {
    Link
} from "react-router-dom";

import Article_editor from './toolbar/toolbar_component__layout_of_articles.js';

function Plug ( ) {
    return (
        <div>
            Заглушка
        </div>
    );
};

class Admin_Panel extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            'article_editor' : false
        };

        this.button_click_processing = this.button_click_processing.bind( this );
    }

    button_click_processing( component_name ) {

        this.setState({
            [ component_name ] : true
        });

    }

    render ( ) {
        return (
            <div className="MainUnit">
                <div className='SectionBlock'>
                    <button onClick={ ( ) => this.button_click_processing('article_editor') } >
                        {/* <img src={ } /> */}
                        <h3>Редактор статей</h3>
                    </button>
                </div>
                <div className='ContentBlock'>
                    {
                        this.state.article_editor ? <Article_editor/> : <Plug/> 
                    }
                </div>
            </div>
        );
        
    }
}

export default Admin_Panel;