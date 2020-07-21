import React from 'react'
import { AppBar, IconButton, Toolbar, Typography, makeStyles, createStyles, Theme } from '@material-ui/core'


const useStyles = makeStyles((theme: Theme) => 

createStyles({
    root:{
        flexGrow: 1,
    },
    title :{
        flexGrow: 1
    },
}),
);



// const classes = useStyles();

class Navbar extends React.Component{


    render(){
        return(
            <div className="">
                <AppBar>
                    <Toolbar>
                    <IconButton
                        aria-label ="Menu"
                        color="inherit"
                    >
                    </IconButton>
                    <Typography className="">
                        Title
                    </Typography>
                    </Toolbar>
                </AppBar>
            

            </div>


        )
    }
}

export default Navbar;