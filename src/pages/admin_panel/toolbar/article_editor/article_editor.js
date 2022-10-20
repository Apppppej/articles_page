import axios from 'axios';
import { Component, createRef } from 'react';
import {
    Link
} from 'react-router-dom';

import '../../../../page_styles/admin_panel/toolbar/article_editor/article_editor.css';

class Article_Editor extends Component {

    constructor( props ) {
        super( props );

        this.state = {
            heading : 'Заголовок'
        };

        this.sending_article_data.bind( this );
        this.changing_the_title.bind( this );
        this.preview__on_drop.bind( this );
        this.preview__on_drag_over.bind( this );
        this.preview__on_drag_enter.bind( this );
        this.preview__on_drag_leave.bind( this );
    }

    sending_article_data ( ) {

        let these_articles = {};

        these_articles['heading'] = document.querySelector('.input__header_field').getAttribute('placeholder');

        these_articles['preview'] = document.querySelector('.block__preview_field img').getAttribute('src');

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

        these_articles['articles'] = html_markup_array;

        axios.post()
            .then( ( res ) => {

            })
            .catch( ( err ) => {
                
            });

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

    render ( ) {

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
                            <h3>Вернуться</h3>
                        </Link>
                    </div>
                    <div
                        className='block__end_button'
                    >
                        <button
                            onClick={ ( e ) => this.sending_article_data( e ) }
                        >
                            <h3>Завершить</h3>
                        </button>
                    </div>
                </div>
                <form
                    className='form__editor'
                >
                    <input
                        className='input__header_field'
                        type={ 'text' }
                        placeholder={ 'Заголовок' }
                    />
                    <div
                        className='block__preview_field'
                        onDrop={ ( e ) =>  this.preview__on_drop( e ) }
                        onDragEnter={ this.preview__on_drag_enter }
                        onDragLeave={ this.preview__on_drag_leave }
                        onDragOver={ ( e ) => this.preview__on_drag_over( e ) }
                    >
                    </div>
                    <div
                        contentEditable={ true }
                        className='block__article_field'
                        onDrop={ ( e ) => this.picture__on_drop( e ) }
                        onDragEnter={ this.picture__on_drag_enter }
                        onDragLeave={ this.picture__on_drag_leave }
                        onDragOver={ ( e ) => this.picture__on_drag_over( e ) }
                    />
                </form>
            </main>
        );

    }

}

export default Article_Editor;