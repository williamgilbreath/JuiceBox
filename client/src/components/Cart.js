import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from "@material-ui/core/Paper";
import Card from "@material-ui/core/Card";
import createdJuice from '../images/colorJuice.png'

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column'
    },
    row: {
        display: 'flex',
        justifyContent: 'spaceAround',
        marginLeft: '8em'
    },
    paper: {
        width: '60vw',
        height: '30em',
        textAlign: 'left',
        display: 'inline-block',
        marginBottom: '3em'
    },
    img: {
        display: 'inline-block',
        height: '80%',
        marginTop: '-5em',
        marginLeft: '1em'
    },
    juiceTitle: {
        fontFamily: "BebasNeue, serif",
        fontSize: '5em'
    },
    text: {
        display: 'inline-block',
        fontFamily: 'Montserrat, serif',
        marginLeft: '2em',
        marginTop: '2em'
    },
    header: {
        fontFamily: 'BebasNeue, serif',
        fontSize: '10em'
    },
    body: {
        fontSize: '2em',
    },
    cart: {
        display: 'inline-block',
        width: '25%',
        backgroundColor: '#e3445f',
        color: 'white',
        height: '30em',
        marginBottom: '-5em',
        margin: '0 5em'
    },
    box: {
    },
    cartDescription: {
        fontFamily: 'BebasNeue, serif',
        fontSize: '3em',
        marginTop: '1em',
    },
    cartItems: {
        fontFamily: 'Montserrat, serif',
        display: 'block',
        paddingBottom: '0.5em',
        borderBottom: '1px solid white',
        margin: '0 0.5em',
    },
    fullPrice: {
        fontFamily: 'Montserrat, serif',
        marginTop: '1em'
    },
    font: {
        fontFamily: 'Montserrat, serif',
        marginTop: '1em'
    },
    tax: {
        fontFamily: 'Montserrat, serif',
        borderBottom: '1px solid white',
        paddingBottom: '1em',
        margin: '0 0.5em'
    },
    paperCart: {
        display: 'flex',
        flexDirection: 'column',
        textAlign: 'left',
        width: '60vw'
    },
    btn: {
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        borderRadius: 30,
        border: 0,
        color: 'white',
        height: 48,
        padding: '0 30px',
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        bottom: 0,
    }
}));

const Cart = ({ cart, setCart, juices, setJuices, total, setTotal, created, setCreated }) => {
    const classes = useStyles();

    let sum = 0;
    for(let i = 0; i < total.length; i++) {
        sum += total[i]
    }
    sum = sum.toFixed(2)

    const removeFromCart = (juice) => {
        let hardCopy = [...cart];
        hardCopy = hardCopy.filter((cartItem) => cartItem._id !== juice._id);
        setCart(hardCopy);
        let totalCopy = [...total];
        totalCopy = totalCopy.filter((totalItem) => totalItem._id !== total._id)
        setTotal(totalCopy)
        for(let i = 0; i < total.length; i++) {
            sum += total[i]
        }
    };

    let tax = sum * 0.012
    let rounded = tax.toFixed(2)
    let fullPrice = sum * 1.012
    let fullRounded = fullPrice.toFixed(2)
    //try and use state

    const listCart = cart.map((juice) => (
        <Paper elevation={5} className={classes.paper}>
            <img className={classes.img} src={juice.url}/>
            <div className={classes.text}>
                <h1 className={classes.juiceTitle}>{juice.title}</h1>
                <p className={classes.body}>Price: {juice.price}</p>
                <p className={classes.body}>{juice.description}</p>
                <input type="submit" value="Remove" onClick={() => removeFromCart(juice)} className={classes.btn}/>
            </div>
        </Paper>
    ));
    const removeJuice = (e) => {
        e.preventDefault();
        setCreated(false)
        console.log(created)
    }

    return (
        <div className={classes.root}>
            <h1 className={classes.header}>Cart</h1>
            <div className={classes.row}>
                <div className={classes.paperCart}>
                    <div>{listCart}</div>
                    {
                        created ?
                            <Paper elevation={5} className={classes.paper}>
                                <img className={classes.img} src={createdJuice}/>
                                <div className={classes.text}>
                                    <h1 className={classes.juiceTitle}>Custom Juice</h1>
                                    <p className={classes.body}>Price: 4.99</p>
                                    <p className={classes.body}>Your Juice!</p>
                                    <button onClick={removeJuice} className={classes.btn}>Remove</button>
                                </div>
                            </Paper> :
                            null
                    }
                </div>
                <Card className={classes.cart}>
                    <h2 className={classes.cartDescription}>Cart Description</h2>
                    <h2 className={classes.cartItems}>Cart Items: {cart.length}</h2>
                    <h2 className={classes.font}>Juice Prices: {sum}</h2>
                    <h2 className={classes.tax}>Tax: {rounded}</h2>
                    <h2 className={classes.fullPrice}>Total: {fullRounded}</h2>
                </Card>
            </div>
        </div>
    );
};

export default Cart;
