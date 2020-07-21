<<<<<<< HEAD
import React from "react";
import "./App.css";
import AppBar from "@material-ui/core/AppBar";
import { Typography, Paper, Button } from "@material-ui/core";
import Confirm from "./Confirm";
import Snackbar from "@material-ui/core/Snackbar";
import GridLayout from "./mu-f-class";
import Navbar from "./Appbar";
import Todos from "./Todos";
=======
import React from 'react';
import './App.css';
import AppBar from '@material-ui/core/AppBar';
import { Typography, Paper, Button } from '@material-ui/core';
import Confirm from './Confirm'
import Snackbar from '@material-ui/core/Snackbar'
import GridLayout from './mu-f-class';
import Navbar from './Appbar'
import Todos from './Todos';

>>>>>>> ba1ade28eff25c1c458b10c75ecdd0afe2a3cca9

interface IState {
  confirmOpen: boolean;
  triggerDialog: boolean;
  snackShow: boolean;
  response: string;
  confirmVisible: boolean;
  countDown: number;
  // retriggerDialog: boolean
}

class App extends React.Component<{}, IState> {
  private timer: number = 0;

  constructor(props: {}) {
    super(props);
    this.state = {
      confirmOpen: false,
      triggerDialog: false,
      snackShow: false,
      response: "Waiting...",
      confirmVisible: true,
      countDown: 10,
      // retriggerDialog: true
    };
  }

  private handleCancelClick = () => {
    // console.log("Cancel Clicked");
    this.setState({ confirmOpen: false });
    this.setState({ triggerDialog: false });
    this.setState({ snackShow: true });
    this.setState({ response: "Take a break, I'm sure you will later..." });
    clearInterval(this.timer);
  };
  private handleOkClick = () => {
    // console.log("Okay clicked");
    this.setState({ confirmOpen: false });
    this.setState({ triggerDialog: false });
    this.setState({ snackShow: true });
    this.setState({ response: "Cool, carry on reading!" });
    clearInterval(this.timer);
  };

  private handleDialogBtn = () => {
    this.setState({ confirmOpen: true });
    this.setState({ triggerDialog: true });
  };

  private handleTimerTick() {
    this.setState(
      {
        response: `${this.state.countDown} secs to go`,
        countDown: this.state.countDown - 1,
      },
      () => {
        if (this.state.countDown <= 0) {
          clearInterval(this.timer);
          this.setState({
            response: "You are too late...",
            triggerDialog: true,
            // retriggerDialog: false
          });
        }
      }
    );
  }

  // private handleRetriggerDialog = () => {
  //   this.setState({
  //     response: "Waiting...",
  //     triggerDialog: false
  //   },
  //   () => this.timer = window.setInterval(() => this.handleTimerTick(), 1000));

  // }

  public componentDidMount() {
    this.timer = window.setInterval(() => this.handleTimerTick(), 1000);
  }

  render() {
    return (
      <div>

      </div>
    )
}


export deafult App;
