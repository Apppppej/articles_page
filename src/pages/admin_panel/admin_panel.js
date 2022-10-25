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
            'button_illumination' : {
                'content_button' : true,
                'analytics_button' : true
            }
        };

        this.refSidebar = React.createRef( );

        this.refContentButtons = React.createRef( );
        this.refAnalyticsButtons = React.createRef( );

        this.ref_content_text = React.createRef( );
        this.ref_analytics_text = React.createRef( );

        this.seconds_counter = null;

        this.button_click_processing.bind( this );
        // this.opening_the_sidebar.bind( this );
        // this.closing_the_sidebar.bind( this );
        this.changing_the_color_of_the_buttons.bind( this );
    }

    button_click_processing( component_name ) {

        this.setState({
            [ component_name ] : true
        });

    }

    // opening_the_sidebar( ) {

    //     this.refSidebar.current.className = 'open_side_panel';

    //     this.refContentButtons.current.className = 'general_button_settings , modified_button';
    //     this.refAnalyticsButtons.current.className = 'general_button_settings , modified_button';

    //     this.ref_content_text.current.className = 'the_text_that_appears';
    //     this.ref_analytics_text.current.className = 'the_text_that_appears';

    // }

    // closing_the_sidebar( ) {

    //     this.refSidebar.current.className = 'closed_side_panel';

    //     this.refContentButtons.current.className = 'general_button_settings , button_return';
    //     this.refAnalyticsButtons.current.className = 'general_button_settings , button_return';

    //     this.ref_content_text.current.className = 'disappeared_text';
    //     this.ref_analytics_text.current.className = 'disappeared_text';

    // }

    changing_the_color_of_the_buttons( button_name ) {

        let copy_of_the_object = this.state.button_illumination;

        for ( let key in copy_of_the_object ) {

            if ( key == button_name ) {

                copy_of_the_object[ key ] = true;

            }

            if ( key != button_name ) {

                copy_of_the_object[key] = false;

            }

            if ( button_name == 'highlighting_all' ) {

                copy_of_the_object[ key ] = true;

            }

        }

        this.setState({
            'button_illumination' : copy_of_the_object
        });

    }

    // componentDidMount(  ) {

    //     const content_button_node = this.refContentButtons.current;
    //     const analytics_button_node = this.refAnalyticsButtons.current;

    //     console.log(this.refContentButtons.current );
    //     console.log( analytics_button_node );

    //     for ( let key in this.state.button_illumination ) {

    //         if ( key == 'content_button' && this.state.button_illumination[ key ] == true ) {

    //             let the_current_line_of_styles = content_button_node.className;

    //             const formatted_style_string = the_current_line_of_styles.replace('dimming_the_button', 'lightening_the_button')

    //             content_button_node.className = formatted_style_string;

    //         }

    //         if ( key == 'content_button' && this.state.button_illumination[ key ] == false ) {

    //             let the_current_line_of_styles = content_button_node.className;

    //             const formatted_style_string = the_current_line_of_styles.replace('lightening_the_button', 'dimming_the_button')

    //             content_button_node.className = formatted_style_string;

    //         }

    //         if (key == 'analytics_button' && this.state.button_illumination[ key ] == true) {

    //             let the_current_line_of_styles = analytics_button_node.className;

    //             const formatted_style_string = the_current_line_of_styles.replace('dimming_the_button', 'lightening_the_button')

    //             analytics_button_node.className = formatted_style_string;

    //         }

    //         if (key == 'analytics_button' && this.state.button_illumination[ key ] == false) {

    //             let the_current_line_of_styles = analytics_button_node.className;

    //             const formatted_style_string = the_current_line_of_styles.replace('lightening_the_button', 'dimming_the_button')

    //             analytics_button_node.className = formatted_style_string;

    //         }

    //     }

    // }

    render ( ) {
        return (
            <div className="MainUnit">
                <div
                    className='SectionBlock_closed'
                    ref={ this.refSidebar }
                    // onMouseEnter={ ( ) => this.opening_the_sidebar( ) }
                    // onMouseLeave={ ( ) => this.closing_the_sidebar( ) }
                >
                    <button
                        className='general_button_settings'
                        ref={ this.refContentButtons }
                        onClick={ ( ) => this.button_click_processing('content_section') }
                        onMouseEnter={ ( ) => this.changing_the_color_of_the_buttons('content_button') }
                        onMouseLeave={ ( ) => this.changing_the_color_of_the_buttons('highlighting_all') }
                    >
                        <img
                            src={ Pencil }
                            className={ this.state.button_illumination.content_button ? 'clarified_icon' : 'dimmed_icon' }
                        />
                        {/* <h3
                            className='h3__button_text'
                            ref={ this.ref_content_text }
                        >
                            РАЗДЕЛ КОНТЕНТА
                        </h3> */}
                    </button>
                    <button
                        className='general_button_settings'
                        ref={ this.refAnalyticsButtons }
                        onClick={ ( ) => this.button_click_processing('analytics_section') }
                        onMouseEnter={ ( ) => this.changing_the_color_of_the_buttons('analytics_button') }
                        onMouseLeave={ ( ) => this.changing_the_color_of_the_buttons('highlighting_all') }
                    >
                        <img
                            src={ Charts }
                            className={ this.state.button_illumination.analytics_button ? 'clarified_icon' : 'dimmed_icon'}
                        />
                        {/* <h3
                            className='h3__button_text'
                            ref={ this.ref_analytics_text }
                        >
                            РАЗДЕЛ АНАЛИТИКИ
                        </h3> */}
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