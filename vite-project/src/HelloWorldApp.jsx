//import { Fragment } from "react";
import  PropTypes  from 'prop-types';
import { Title } from "./components/Title";
import { UserDetalist } from "./components/UserDetails";
import { Book } from "./components/Book";

export const HelloWorldApp = ( {user, id, title, book } ) => {

    console.log(title)
    //const name ='pepe';

    return( 

        <> 

            <Title title={title} />
            <UserDetalist user={user} id={ id }/> 
            <Book book={book}/>


        </>

     );

}

HelloWorldApp.PropTypes = {
    title:PropTypes.string.isRequired,
    id:PropTypes.number.isRequired,
    user:PropTypes.object
}

HelloWorldApp.defaultProps = {
    title: 'Hola mundo por defecto!',
    book: 'uml go a gota'

}