import React, {
    Component
} from 'react';
import '../../page_styles/admin_panel/admin_panel.css';
import {
    Link
} from "react-router-dom";

import Article_editor from './toolbar/toolbar_component__layout_of_articles.js';

import Pencil from '../../static/icons/pencil.svg';
import Charts from '../../static/icons/charts.svg';

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
            'content_section' : false,
            'analytics_section' : false,
        };

        this.refSidebar = React.createRef( );

        this.refContentButtons = React.createRef( );
        this.refAnalyticsButtons = React.createRef( );

        this.ref_content_text = React.createRef( );
        this.ref_analytics_text = React.createRef( );

        this.seconds_counter = null;

        this.button_click_processing.bind( this );
        this.opening_the_sidebar.bind( this );
        this.closing_the_sidebar.bind( this );
    }

    button_click_processing( component_name ) {

        this.setState({
            [ component_name ] : true
        });

    }

    opening_the_sidebar( ) {

        this.refSidebar.current.className = 'open_side_panel';

        this.refContentButtons.current.className = 'general_button_settings , modified_button';
        this.refAnalyticsButtons.current.className = 'general_button_settings , modified_button';

        this.ref_content_text.current.className = 'the_text_that_appears';
        this.ref_analytics_text.current.className = 'the_text_that_appears';

    }

    closing_the_sidebar( ) {

        this.refSidebar.current.className = 'closed_side_panel';

        this.refContentButtons.current.className = 'general_button_settings , button_return';
        this.refAnalyticsButtons.current.className = 'general_button_settings , button_return';

    }

    render ( ) {
        return (
            <div className="MainUnit">
                <div
                    className='SectionBlock_closed'
                    ref={ this.refSidebar }
                    onMouseEnter={ ( ) => this.opening_the_sidebar( ) }
                    onMouseLeave={ ( ) => this.closing_the_sidebar( ) }
                >
                    <button
                        className='general_button_settings'
                        ref={ this.refContentButtons }
                        onClick={ ( ) => this.button_click_processing('content_section') }

                    >
                        <img
                            src={ Pencil }
                        />
                        <h3
                            className='h3__button_text'
                            ref={ this.ref_content_text }
                        >
                            РАЗДЕЛ КОНТЕНТА
                        </h3>
                    </button>
                    <button
                        className='general_button_settings'
                        ref={ this.refAnalyticsButtons }
                        onClick={ ( ) => this.button_click_processing('analytics_section') }
                    >
                        <img
                            src={ Charts }
                        />
                        <h3
                            className='h3__button_text'
                            ref={ this.ref_analytics_text }
                        >
                            РАЗДЕЛ АНАЛИТИКИ
                        </h3>
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