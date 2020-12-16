import React from 'react';
import LanguageContext from './Contexts/LanguageContext';
class Field extends React.Component{

    static contextType=LanguageContext;
    render(){
    
        const text=this.context.language === 'english' ? 'Name' :'Naam';

        return (
            <div className='ui field'>
                <h2>{text}</h2>
                <input />
            </div>
        );
    }
};

export default Field;