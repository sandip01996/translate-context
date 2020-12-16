
import React from 'react';
import LanguageContext from './Contexts/LanguageContext';
class Button extends React.Component{

     static contextType=LanguageContext;
    render(){
    const text=this.context.language === 'english' ? 'Submit' : 'Voorleggen'
    return(
        <div className='ui button primary'>{text}</div>
    );
    }
};

export default Button; 