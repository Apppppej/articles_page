import axios from 'axios';
import { Component, createRef } from 'react';
import {
    Link
} from 'react-router-dom';

import '../../../../page_styles/admin_panel/toolbar/article_editor/article_editor.css';

import LeftArrowIcon from '../../../../static/icons/admin_panel__left_arrow_icon.svg';
import RightArrowIcon from '../../../../static/icons/admin_panel__icon_of_the_next_item.svg';

class Article_Editor extends Component {

    constructor( props ) {
        super( props );

        this.state = {
            heading : 'Заголовок',
            popup : false,
            login : '',
            password : ''
        };

        this.sending_article_data.bind( this );
        this.changing_the_title.bind( this );
        this.preview__on_drop.bind( this );
        this.preview__on_drag_over.bind( this );
        this.preview__on_drag_enter.bind( this );
        this.preview__on_drag_leave.bind( this );
        this.click_processing.bind( this );
        this.calling_a_popup.bind( this );
        this.changing_the_login.bind( this );
        this.changing_the_password.bind( this );
    }

    changing_the_title ( e ) {

        this.setState({
            heading : e.target.value
        });
        
    }

    preview__on_drop( e ) {
        e.preventDefault( );
        e.stopPropagation( );

        let reader = new FileReader( );
        reader.onloadend = ( ) => {

            const img  = document.createElement( 'img' );

            img.src = reader.result;

            document.getElementsByClassName( 'block__preview_field' )[0].appendChild( img );

        };

        reader.readAsDataURL( e.dataTransfer.files[0] );
    }

    preview__on_drag_over( e ) {
        e.preventDefault( );
        e.stopPropagation( );
    }

    preview__on_drag_enter( e ) {
        e.preventDefault( );
        e.stopPropagation( );
    }

    preview__on_drag_leave( e ) {
        e.preventDefault( );
        e.stopPropagation( );
    }

    picture__on_drop( e ) {
        e.preventDefault( );
        e.stopPropagation( );

        let reader = new FileReader( );
        reader.onloadend = ( ) => {

            const img = document.createElement( 'img' );

            img.src = reader.result;

            document.querySelector('[contenteditable]').appendChild( img );

        };

        reader.readAsDataURL( e.dataTransfer.files[0] );
    }

    picture__on_drag_over( e ) {
        e.preventDefault( );
        e.stopPropagation( );
    }

    picture__on_drag_enter( e ) {
        e.preventDefault( );
        e.stopPropagation( );
    }

    picture__on_drag_leave( e ) {
        e.preventDefault( );
        e.stopPropagation( );
    }

    sending_article_data ( ) {

        const heading = this.state.heading

        const preview = document.querySelector('.block__preview_field img').getAttribute('src');

        const article_block = document.querySelector('.block__article_field');
        const array_of_elements = Array.from( article_block.childNodes );
        const the_text_of_the_first_element = array_of_elements[0].textContent;
        
        const element_to_convert = document.createElement( 'div' );
        element_to_convert.innerText = the_text_of_the_first_element;

        array_of_elements[0] = element_to_convert;

        let html_markup_array = [];

        array_of_elements.forEach( ( elem ) => {
            html_markup_array.push( elem.outerHTML );
        });

        const article = html_markup_array.join('');

        axios.post(`http://127.0.0.1:9000/these_articles?login=${ this.state.login }&password=${ this.state.password }&heading=${ heading }&preview=${ preview }&article=${ article }`)
        .then( ( res ) => {
            console.log( res );
        })
        .catch( ( err ) => {
            console.log( err );
        });

    }

    click_processing( e ) {

        const link_to_the_editor_block = document.querySelector('.block__article_field');

        if ( link_to_the_editor_block.textContent == 'Текст' ) {

            link_to_the_editor_block.innerText = '';

        }

    }

    calling_a_popup( e ) {

        this.setState({
            popup : true
        });

    }

    changing_the_login( e ) {

        this.setState({
            login : e.target.value
        });

    }

    changing_the_password( e ) {

        this.setState({
            password : e.target.value
        });

    }

    render ( ) {

        console.log( this.state.popup );

        return (
            <main
                className="block__article_editor"
            >
                <div
                    className="block__navigation"
                >
                    <div
                        className="block__return_button"
                    >
                        <Link
                            to={`/adminpanel`}
                        >
                            <img
                                src={ LeftArrowIcon }
                            />
                        </Link>
                    </div>
                    <div
                        className='block__emergence_pop-up'
                    >
                        <button
                            onClick={ ( e ) => this.calling_a_popup( e ) }
                        >
                            <img
                                src={ RightArrowIcon }
                            />
                        </button>
                    </div>
                </div>
                <form
                    className='form__editor'
                >
                    <div
                        className='block__preview_field'
                        onDrop={ ( e ) =>  this.preview__on_drop( e ) }
                        onDragEnter={ this.preview__on_drag_enter }
                        onDragLeave={ this.preview__on_drag_leave }
                        onDragOver={ ( e ) => this.preview__on_drag_over( e ) }
                    >
                    </div>
                    <input
                        className='input__header_field'
                        type={ 'text' }
                        placeholder={ 'Заголовок' }
                        onChange={ ( e ) => this.changing_the_title( e ) }
                    />
                    <div
                        className='block__article_field'
                        contentEditable={ true }
                        suppressContentEditableWarning={true}
                        onDrop={ ( e ) => this.picture__on_drop( e ) }
                        onDragEnter={ this.picture__on_drag_enter }
                        onDragLeave={ this.picture__on_drag_leave }
                        onDragOver={ ( e ) => this.picture__on_drag_over( e ) }
                        onClick={ this.click_processing }
                    >
                        Текст
                    </div>
                </form>
                {
                    this.state.popup ?
                    <div
                        className='block__popup'
                    >
                        <div
                            className='block__authentication'
                        >
                            <input
                                className='input__verification_code'
                                placeholder='Введите проверочный код'
                                onChange={ ( e ) => this.changing_the_login( e ) }
                            />
                            <button
                                className='button__send_button'
                                onClick={ ( e ) => this.sending_article_data( e ) }
                            >
                                <img
                                    src={ RightArrowIcon }
                                />
                            </button>
                        </div>
                    </div> : null
                }
            </main>
        );

    }

}

export default Article_Editor;