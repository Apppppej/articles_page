import React, {
    Component
} from 'react';
import '../../page_styles/admin_panel/admin_panel.css';
import {
    Link
} from "react-router-dom";

import Greeting from './toolbar/greeting';
import Content_section from './toolbar/toolbar_component__content_section.js';
import Analytics_section from './toolbar/toolbar_component__analytics_section.js';

import LeftArrowIcon from '../../static/icons/admin_panel__left_arrow_icon.svg';
import HandleIcon from '../../static/icons/admin_panel__handle_icon.svg';
import StatisticsIcon from '../../static/icons/admin_panel__statistics_icon.svg';

class Admin_Panel extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            'button_illumination' : {
                'return_buttons' : true,
                'content_button' : true,
                'analytics_button' : true
            },
            'current_component' : <Greeting/>
        };

        this.refSidebar = React.createRef( );

        this.refContentButtons = React.createRef( );
        this.refAnalyticsButtons = React.createRef( );

        this.ref_content_text = React.createRef( );
        this.ref_analytics_text = React.createRef( );

        this.seconds_counter = null;

        this.return_to_the_main_page.bind( this );
        this.changing_the_color_of_the_buttons.bind( this );
        this.changing_the_current_component.bind( this );
    }

    return_to_the_main_page( ) {

        window.location.href = '/';

    }

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

    changing_the_current_component( component ) {

        this.setState({
            'current_component' : component
        });

    }

    render ( ) {
        return (
            <div className="MainUnit">
                <div
                    className='block__side_panel'
                >
                    <div
                        className='block__return_button'
                    >
                        <button
                            className='general_button_settings'
                            onClick={ ( ) => this.return_to_the_main_page( ) }
                            onMouseEnter={ ( ) => this.changing_the_color_of_the_buttons('return_buttons') }
                            onMouseLeave={ ( ) => this.changing_the_color_of_the_buttons('highlighting_all') }
                        >
                            <img
                                src={ LeftArrowIcon }
                                className={ this.state.button_illumination.return_buttons ? 'clarified_icon' : 'dimmed_icon' }
                            />
                        </button>
                    </div>
                    <div
                        className='block__navigation_buttons'
                    >
                        <button
                            className='general_button_settings'
                            onClick={ ( ) => this.changing_the_current_component( <Content_section/> ) }
                            onMouseEnter={ ( ) => this.changing_the_color_of_the_buttons('content_button') }
                            onMouseLeave={ ( ) => this.changing_the_color_of_the_buttons('highlighting_all') }
                        >
                            <img
                                src={ HandleIcon }
                                className={ this.state.button_illumination.content_button ? 'clarified_icon' : 'dimmed_icon' }
                            />
                        </button>
                        <button
                            className='general_button_settings'
                            onClick={ ( ) => this.changing_the_current_component( <Analytics_section/> ) }
                            onMouseEnter={ ( ) => this.changing_the_color_of_the_buttons('analytics_button') }
                            onMouseLeave={ ( ) => this.changing_the_color_of_the_buttons('highlighting_all') }
                        >
                            <img
                                src={ StatisticsIcon }
                                className={ this.state.button_illumination.analytics_button ? 'clarified_icon' : 'dimmed_icon'}
                            />
                        </button>
                    </div>
                </div>
                <div className='ContentBlock'>
                    {
                        this.state.current_component
                    }
                </div>
            </div>
        );
        
    }
}

export default Admin_Panel;