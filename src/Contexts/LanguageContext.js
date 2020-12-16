import React from 'react';

const Context= React.createContext('dutch');


export default Context;

export class LanguageStore extends React.Component{

    state={language :'english'};

    OnChangeLanguage=language=>{

        this.setState({language});
    }

    render(){

        return(
            <Context.Provider value={{...this.state, onChangeLanguage : this.OnChangeLanguage}}>
                {this.props.children}
            </Context.Provider>
        );
    }
};


