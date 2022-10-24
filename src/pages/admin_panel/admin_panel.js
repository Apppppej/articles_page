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
            'icon_highlighting' : {
                'icon__content_section' : true,
                'icon__analytics_section' : true
            }
        };

        this.refContentBlock = React.createRef( );

        this.refContentButton = React.createRef( );
        this.refAnalyticsButton = React.createRef( );

        this.refContentIcons = React.createRef( );
        this.refAnalyticsIcon = React.createRef( );

        this.refTextOfTheContentSection = React.createRef( );
        this.refTextOfTheAnalyticsSection = React.createRef( );

        this.seconds_counter = null;

        this.button_click_processing.bind( this );
        this.change_section_icons_color.bind( this );
        this.sidebar_reveal.bind( this );
    }

    button_click_processing( component_name ) {

        this.setState({
            [ component_name ] : true
        });

    }

    change_section_icons_color ( param ) {

        let current_icon_object = this.state.icon_highlighting;

        for ( let key in current_icon_object ) {

            if ( param != 'highlighting_all' ) {

                if ( key == param ) {

                    current_icon_object[ key ] = true;

                }

                if ( key != param ) {

                    current_icon_object[ key ] = false;

                }

            }

            if ( param == 'highlighting_all' ) {

                current_icon_object[ key ] = true;

            }

        }

        this.setState({
            'icon_highlighting' : current_icon_object
        });

    }

    sidebar_reveal( ) {

        // this.seconds_counter = setTimeout( ( ) => {

            this.refContentBlock.current.className = 'SectionBlock_disclosed';

            this.refContentButton.current.className = 'SectionBlock_disclosed_button';
            this.refAnalyticsButton.current.className = 'SectionBlock_disclosed_button';

            this.refTextOfTheContentSection.current.className = 'SectionBlock_disclosed_h3';
            this.refTextOfTheAnalyticsSection.current.className = 'SectionBlock_disclosed_h3';

        // } , 3000);
        
    }

    render ( ) {
        return (
            <div className="MainUnit">
                <div
                    className='SectionBlock_closed'
                    ref={ this.refContentBlock }
                    onMouseEnter={ ( ) => this.sidebar_reveal( ) }
                >
                    <div
                        className='SectionBlock_button'
                        ref={ this.refContentButton }
                        onClick={ ( ) => this.button_click_processing('content_section') }
                        onMouseEnter={ ( ) => this.change_section_icons_color( 'icon__content_section' ) }
                        onMouseLeave={ ( ) => this.change_section_icons_color( 'highlighting_all' ) }

                    >
                        <img
                            src={ Pencil }
                            className={ this.state.icon_highlighting.icon__content_section ? 'clarified_icon' : 'dimmed_icon' }
                            ref={ this.refContentIcons }
                        />
                        <h3
                            className='SectionBlock_closed_h3'
                            ref={ this.refTextOfTheContentSection }
                        >
                            РАЗДЕЛ КОНТЕНТА
                        </h3>
                    </div>
                    <button
                        className='SectionBlock_button'
                        ref={ this.refAnalyticsButton }
                        onClick={ ( ) => this.button_click_processing('analytics_section') }
                        onMouseEnter={ ( ) => this.change_section_icons_color( 'icon__analytics_section' ) }
                        onMouseLeave={ ( ) => this.change_section_icons_color( 'highlighting_all' ) }
                    >
                        <img
                            src={ Charts }
                            className={ this.state.icon_highlighting.icon__content_section ? 'clarified_icon' : 'dimmed_icon' }
                            ref={ this.refAnalyticsIcon }
                        />
                        <h3
                            className='SectionBlock_closed_h3'
                            ref={ this.refTextOfTheAnalyticsSection }
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