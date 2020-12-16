import React from 'react';
import UserCreate from './UserCreate';
import {LanguageStore} from './Contexts/LanguageContext';
import LanuguageSelector from './LanguageSelector';
class App extends React.Component{

    
    render(){

        return(
            <div>
                <LanguageStore >
                <LanuguageSelector />
               <UserCreate/>
               </LanguageStore>
                 </div>
        );
    }
};

export default App; 