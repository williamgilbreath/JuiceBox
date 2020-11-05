import React from 'react';
import {Link} from "@reach/router";
import { makeStyles } from '@material-ui/core/styles';
import Button from "@material-ui/core/Button";
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';


const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    div: {
        display: 'inline-block',
        margin: '3em',
    },
    card: {
        width: 345,
        height: 475,
    },
    media: {
        height: 0,
        paddingTop: '60%'
    },
    description: {
        margin: '1em 1.5em 0'
    },
    btn : {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: 'auto',
        height: 'auto',
        marginTop: '1em'

    },
    cart: {
        background: 'linear-gradient(to right, rgb(182, 244, 146), rgb(51, 139, 147))',
        borderRadius: 30,
        border: 0,
        color: 'white',
        height: 48,
        padding: '0 30px',
        boxShadow: '0 3px 5px 2px rgba(51,139,147,.3)',
        bottom: 0,
    },
    link: {
        color: 'black'
    },
    header: {
        fontFamily: "BebasNeue, serif",
    },
    jumbo: {
        backgroundImage: "url(../images/fruitbox.png)",
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        height: '30vh'
    },
    title: {
        fontFamily: 'BebasNeue, serif',
        fontSize: '10em',
        marginTop: '0.2em'
    }
}));

const JuiceBody = ({ cart, setCart, juices, setJuices, total, setTotal, selected, setSelected}) => {

    const classes = useStyles();

    const addToCart = (juice) => {
        setCart([...cart, juice])
        setTotal([...total, juice.price])
    }
    const addId = (juice) => {
        setSelected(juice._id)
    }

    const listJuices = juices.map((juice) => (
        <div className={classes.div}>
            <Card className={classes.card}>
                <Link to={"/juices/" + juice._id}  onClick={() => addId(juice)} className={classes.link}>
                    <CardHeader
                        title={juice.title}
                        subheader={juice.type}
                    />
                    <CardMedia
                        className={classes.media}
                        image={juice.url}
                    />
                    <h5 className={classes.description}>{juice.description}</h5>
                </Link>
               <div className={classes.btn}>
                   <Button type="submit" onClick={() => addToCart(juice)} className={classes.cart}>Add to cart </Button>
               </div>
            </Card>
        </div>
    ));

    return (
        <div>
        <div className={classes.jumbo}>
            <h1 className={classes.title}>Our Drinks</h1>
            <h5>Please feel free to take a look at our drink options with an array of green, superfood, and gluten free options </h5>
        </div>
        <div className={classes.root}>
            <div> {listJuices} </div>
        </div>
        </div>
    )
}
export default JuiceBody;