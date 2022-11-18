import React from "react";
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import './styles/style.css'

// const path =  './img/view 1.svg'

export class ShowButton extends React.Component {


    state={buttonState: false}

    changeButtonState = (bthState) => {

        if(this.state.buttonState === false){
            this.setState({buttonState: true})
            this.props.buttonState(true)
        }else{
            this.setState({buttonState: false})
            this.props.buttonState(false)
        }

    }

    render(){
        return (
            <div onClick={this.changeButtonState} className='eye'>
                {this.state.buttonState ? <VisibilityIcon  fontSize="large"/> : <VisibilityOffIcon  fontSize="large"/>}
            </div>
    
        )
    }

}