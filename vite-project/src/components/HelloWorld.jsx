import { Fragment } from "react";
import  PropTypes  from 'prop-types';

export const HelloWorld = ( {user, id, title } ) => {

    console.log(title)
    //const name ='pepe';

    return( 

        <Fragment> 

            <div> { title } </div>
            <div> Que tal! { user.name }{user.lastName} con el id { id } </div>


        </Fragment>

     );

}

HelloWorld.PropTypes = {
    title:PropTypes.string.isRequired,
    id:PropTypes.number.isRequired,
    user:PropTypes.object
}