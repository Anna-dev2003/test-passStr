import React from "react";
// import { Input } from "./Input";
import { ShowButton } from "./Show";
import classNames from "classnames";


export class Form extends React.Component{

    state = {passwordValue: '', passwordStrength: 0, warning: false, inputType: 'password'}

    passwordValidation = (password) => {
        

        const isNumbers = /^\d+$/.test(password)
        const isString = /^[a-zA-Z]+$/.test(password)
        const isSymbols = /^[-@_.+]+$/.test(password)
        const isNumAndString = /^[a-zA-Z0-9]+$/.test(password)
        const isStringAndSymbol = /^[a-zA-Z+_@.-]+$/.test(password)
        const isNumAndSymbol = /^[0-9+_@.-]+$/.test(password)
        const isNumAndStringAndSymbol = /^[a-zA-Z0-9+_@.-]+$/.test(password)


        if(isNumbers || isString || isSymbols){
            this.setState({passwordStrength: 1, warning: false})
            
        }else if(isNumAndString || isStringAndSymbol || isNumAndSymbol){
            this.setState({passwordStrength: 2, warning: false})
        }else if(isNumAndStringAndSymbol){
            this.setState({passwordStrength: 3, warning: false})
        }else{
            this.setState({warning: true})
        }
    }

    changePasswordValue = (event) => {
        let passwordValue = event.target.value
        this.setState({passwordValue,})
        if(passwordValue.length < 8){
            this.setState({passwordStrength: 0})
        }else{
            this.passwordValidation(passwordValue)
        }
    }

    checkButtonState = (bthState) => {
        bthState ? this.setState({inputType: 'text'}) : this.setState({inputType: 'password'})
    }

    render(){
        return(
        <div className="form-wrapper">
            <div className="form-description">
                <p className="form-description__title">
                    Your password must contain at least 8 characters. Also your password may contain
                </p>
                <ul className="form-description__list">
                    <li>
                        Letters (Latin alphabet)
                    </li>
                    <li>
                        Numbers
                    </li>
                    <li>
                        Symbols + . - _ @
                    </li>
                </ul>
            </div>
            <form className="form">
                <div className="input-wrapper">
                    <input className={classNames("input", {"red-border": this.state.passwordStrength === 0})} value={this.state.passwordValue} type={this.state.inputType} name='password' onChange={this.changePasswordValue}/>
                    <span className={classNames("warning", {'active-warning': this.state.warning === true})}>This symbol cannot be used</span>
                    <ShowButton buttonState={this.checkButtonState}/>
                </div>
            </form>
            <div className="validation-area">
                <div className={classNames("validation-item", {"validation-item--red": this.state.passwordStrength === 1, "validation-item--yellow": this.state.passwordStrength === 2, "validation-item--green": this.state.passwordStrength === 3})} >
                </div>
                <div className={classNames("validation-item", {"validation-item--yellow": this.state.passwordStrength === 2, "validation-item--green": this.state.passwordStrength === 3})}>
                </div>
                <div className={classNames("validation-item", {"validation-item--green": this.state.passwordStrength === 3})}>
                </div>
            </div>
        </div>
        )
    }
}