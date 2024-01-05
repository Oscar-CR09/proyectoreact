import { Fragment } from "react";

export function HelloWorld = ({user, id })=>{

    //const name ='pepe';

    return( 

        <Fragment> 

            <div>Hola Mundo</div>
            <div>Que tal! {user} con el id {id}</div>

        </Fragment>

     );
   
}