import React from 'react';

function ErrorLogin(props){
    let { addClass } = props;
    let justify = 'justify-center';
    if( addClass ){
        addClass = ' ' + addClass;
        justify = addClass.includes('justify') ? addClass : 'justify-center';
    }
    return (
        <p className={`flex items-center  mt-3 mb-3 text-red-500 ${addClass} ${justify}`}>
            {props.children}
        </p>
    );
}
export default ErrorLogin;