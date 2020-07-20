import React from 'react'
import { withStyles } from '@material-ui/core/styles';
import { Grid, Paper, Typography } from '@material-ui/core';
import './mu-f-class.css'


// const styles = theme => ({
//     root: {
//         flexGrow: 1
//     },
//     paper:{
//         padding : theme.spacing(2),
//         teaxtAlign: 'center',
//         color: theme.palette.text.secondary
//     }
// });


class GridLayout extends React.Component {

    render(){
        return(
            <div>
            <Grid  container spacing={3} className="container-text" >
                <Grid item xs={12} sm={6} md={4} >
                    <Paper className="grid-item" >
                        <Typography>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit.Sed officia deserunt eaque facere, ex quas ab dolor nemo voluptatibus quibusdam voluptatum tempore?Fugiat quasi dolorem magnam quidem!Asperiores, eligendi nemo?
                        </Typography>
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={6} md={4} >
                    <Paper className="grid-item" >
                        <Typography>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit.Sed officia deserunt eaque facere, ex quas ab dolor nemo voluptatibus quibusdam voluptatum tempore?Fugiat quasi dolorem magnam quidem!Asperiores, eligendi nemo?
                        </Typography>
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <Paper className="grid-item">
                        <Typography>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit.Sed officia deserunt eaque facere, ex quas ab dolor nemo voluptatibus quibusdam voluptatum tempore?Fugiat quasi dolorem magnam quidem!Asperiores, eligendi nemo?
                         </Typography>                    
                    </Paper>
                </Grid>
            </Grid>
        </div>

        )
    }
}



export default GridLayout;