import React from 'react'
import { AppBar, IconButton, Toolbar, Typography } from '@material-ui/core'




class Navbar extends React.Component{

    render(){
        return(
            <div className="flex">
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