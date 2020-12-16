import React from 'react';
import LanguageContext from './Contexts/LanguageContext';
class LanguageSelector extends React.Component{

    static contextType=LanguageContext;
   
    render(){
        //console.log(this.context);
        return(
            <div>
                Select a Language :
                <i className='flag us' onClick={()=>this.context.onChangeLanguage('english')}></i>
                <i className='flag nl'  onClick={()=>this.context.onChangeLanguage('dutch')}/>
            </div>
        );
    }
}

export default LanguageSelector;