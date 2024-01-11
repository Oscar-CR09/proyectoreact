import { Fragment } from "react";
import  PropTypes  from 'prop-types';

export const HelloWorld = ( {user, id, title, book } ) => {

    console.log(title)
    //const name ='pepe';

    return( 

        <Fragment> 

            <div> { title } </div>
            <div> Que tal! { user.name }{user.lastName} con el id { id } </div>
            <div>{book}</div>


        </Fragment>

     );

}

HelloWorld.PropTypes = {
    title:PropTypes.string.isRequired,
    id:PropTypes.number.isRequired,
    user:PropTypes.object
}

HelloWorld.defaultProps = {
    title: 'Hola mundo por defecto!',
    book: 'uml go a gota'

}