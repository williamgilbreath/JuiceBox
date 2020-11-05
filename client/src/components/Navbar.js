import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from "@material-ui/core/Button";
import { navigate } from "@reach/router";
import AppBar from "@material-ui/core/AppBar";
import Typography from "@material-ui/core/Typography";
import Toolbar from "@material-ui/core/Toolbar";
import whiteLogo from '../images/whiteJuice.png'

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        backgroundColor: '#DD415B',
    },
    title: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(5),
        marginTop: theme.spacing(0.5)
    },
    logo: {
        fontFamily: 'Pacifico, serif',
        textAlign: 'left',
        marginTop: theme.spacing(0.7),
        fontSize: '2em'
    },
    img: {
        width: '50px',
        marginRight: theme.spacing(2),
        marginBottom: theme.spacing(1.75)
    }
}));

const Navbar = ({ cart, setCart }) => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position='static' className={classes.root}>
                <Toolbar>
                    <Typography variant="h6" className={classes.title}>
                        <div className={classes.logo}>
                            <img className={classes.img} src={whiteLogo}/>
                        Juicebox
                        </div>
                    </Typography>
                    <Button className={classes.menuButton} color="inherit" onClick={() => navigate("/juice")}>Home</Button>
                    <Button className={classes.menuButton} color="inherit" onClick={() => navigate("/juices")}>Juices</Button>
                    <Button className={classes.menuButton} color="inherit" onClick={() => navigate("/create")}>Create</Button>
                    <Button className={classes.menuButton} color="inherit" onClick={() => navigate("/cart")}>Cart ({cart.length})</Button>
                </Toolbar>
            </AppBar>
        </div>
    )
}
export default Navbar

