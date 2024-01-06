import { Fragment } from "react";

export const HelloWorld = ( {user, id, title } ) => {

    console.log(title)
    //const name ='pepe';

    return( 

        <Fragment> 

            <div> { title } </div>
            <div>Que tal! { user } con el id { id + 10 }</div>

        </Fragment>

     );
   
}