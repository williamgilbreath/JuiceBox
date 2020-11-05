import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from "@material-ui/core/Grid";
import color from '../images/colorJuice.png'

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        margin: '0'
    },
    box: {
        textAlign: "center",
        marginTop: "-4.0em",
        fontFamily: "BebasNeue, serif",
        height: "95vh",
        display: 'inline-block',
        paddingTop: '10em'
    },
    img: {
        display: 'inline-block',
        marginTop: "8em",
        marginRight: "15em",
    },
    welcomeText: {
        color: "black",
        alignItems: "center",
        [theme.breakpoints.down('sm')]: {
            fontSize: '3rem',
            fontWeight: 'bold'
        },
        [theme.breakpoints.up('md')]: {
            fontSize: '20rem',
        },
    },
    header: {
        color: "black",
        alignItems: "center",
        marginTop: "0.3em",
        [theme.breakpoints.down('sm')]: {
            fontSize: '2rem',
            fontWeight: 'bold'
        },
        [theme.breakpoints.up('md')]: {
            fontSize: '10rem',
        },
    },
    waves: {
        marginTop: '-26em',
        marginBottom: "0"
    }
}));

const HomeBody = () => {
    const classes = useStyles();
    return(
        <div className={classes.root}>
            <Grid container direction='row' justify='center'>
                <Grid item xs className={classes.box}>
                    <h2 className={classes.header}>Welcome to</h2>
                    <h1 className={classes.welcomeText}>Juicebox</h1>
                </Grid>
                <div className={classes.img}>
                    <img src={color}/>
                </div>
            </Grid>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className={classes.waves}>
                <path fill="#DD415B" fill-opacity="1" d="M0,128L20,122.7C40,117,80,107,120,128C160,149,200,203,240,197.3C280,192,320,128,360,96C400,64,440,64,480,106.7C520,149,560,235,600,272C640,309,680,299,720,272C760,245,800,203,840,165.3C880,128,920,96,960,112C1000,128,1040,192,1080,234.7C1120,277,1160,299,1200,266.7C1240,235,1280,149,1320,106.7C1360,64,1400,64,1420,64L1440,64L1440,320L1420,320C1400,320,1360,320,1320,320C1280,320,1240,320,1200,320C1160,320,1120,320,1080,320C1040,320,1000,320,960,320C920,320,880,320,840,320C800,320,760,320,720,320C680,320,640,320,600,320C560,320,520,320,480,320C440,320,400,320,360,320C320,320,280,320,240,320C200,320,160,320,120,320C80,320,40,320,20,320L0,320Z"></path>
            </svg>
        </div>
    )
}
export default HomeBody