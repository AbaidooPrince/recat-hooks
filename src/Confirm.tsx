import React from 'react'
import { Button, Grid } from '@material-ui/core'
import './Confirm.css'



interface IProps{
    open: boolean
    title: string
    content: string
    cancelCaption?: string
    okCaption?: string
    onOkClick: () => void
    onCancelClick: () => void
}


class Confirm extends React.Component <IProps> {

    public static defaultProps = {
        title: "Title of dialog",
        content: "Content of dialog",
        cancelCaption: "Cancel",
        okCaption: "Okay",
        showResponse: false
    };

    private handleOkClick = () => {
        // console.log("Ok clicked", this.props)
        this.props.onOkClick();
        this.setState({showResponse: true})
    }

    private handlecancelClick = () => {
        // console.log("Cancel Clicked", this.props)
        this.props.onCancelClick();

    }

    public render(){
        return(
        <div className={this.props.open ? "confirm-wrapper confirm-visible": "confirm-wrapper"}>
            <div className="confirm-container">
                <div className="confirm-title-container">
                    <span>{this.props.title}</span>
                </div>
                <Grid >
                <div className="confirm-content-container">
                    <p>{this.props.content}</p>
                </div>
                <div className="confirm-buttons-container">
                    <Button variant ="contained" color="secondary" onClick={this.handlecancelClick}>{this.props.cancelCaption} </Button>
                    <Button variant ="contained" color="primary" onClick={this.handleOkClick}>{this.props.okCaption}</Button>
                </div>
                </Grid>
              
            </div>
        </div>
      
            
        );
    }
}

export default Confirm;