import React, { useEffect } from 'react';
import {Link} from '@reach/router';
import axios from 'axios';
import Button from "@material-ui/core/Button";
import { makeStyles } from '@material-ui/core/styles';
import Paper from "@material-ui/core/Paper";
import Card from "@material-ui/core/Card";

const useStyles = makeStyles((theme) => ({
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: 'auto',
        height: 'auto',
        marginTop: '2em',
        alignContent: 'center',
        backgroundImage: 'url(../images/Doubs.png)'
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
        marginRight: '1em',
    },
    back: {
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        borderRadius: 30,
        border: 0,
        color: 'white',
        height: 48,
        padding: '0 30px',
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        bottom: 0,
        marginLeft: '1em'
    },
    paper: {
        width: '60vw',
        padding: '2em',
        backgroundColor: 'white',
    },
    section: {
        display: 'inline-block',
        marginRight: '3em',
        width: '50%',
        marginTop: '1em'
    },
    title: {
        fontSize: "9em",
        fontFamily: "BebasNeue, serif",
        marginTop: '0.5em',
        textAlign: 'left'
    },
    img: {
        width: '30%',
        display: 'inline-block',
        marginTop: '0.5em',
        marginLeft: '1em'
    },
    text: {
        fontSize: "2em",
        fontFamily: 'Montserrat, serif',
        textAlign: 'left',
        marginBottom: '1em',
        marginRight: '2em',
        width: '50%',
        display: 'inline-block',
        marginTop: '-50em'
    },
    card: {
        width: '30%',
        display: 'inline-block',
        marginTop: '3em',
        padding: '2em 0',
        color: 'white',
        backgroundColor: '#e3445f'
    },
    ingredientsHeader: {
        fontFamily: "BebasNeue, serif",
        fontSize: '3em',
    },
    ingredients: {
        fontFamily: 'Montserrat, serif',
    },
    buttons: {

    },
    comments: {
        backgroundColor: '#f0f0f0',
        marginBottom: '3em',
    }
}));

const SingleJuiceBody = ({ cart, setCart, total, setTotal, selected, setSelected, juice, setJuice}) => {
    const classes = useStyles();

    const onClickHandler = (e) => {
        e.preventDefault();
    }

    useEffect(() => {
        axios.get("http://localhost:8000/api/juices/" + selected)
            .then((res) => {
                console.log(res.data);
                setJuice(res.data);
            })
            .catch((err) => console.log(err))
    }, [])

    const addToCart = (juice) => {
        setCart([...cart, juice])
        setTotal((total + juice.price) * 1.0625)
    }

    const ingredients = juice.ingredients
    let ingredientsRender;
    if (ingredients) {
        ingredientsRender = ingredients.map(ingredient => {
            return (
                <li key={ingredient.id}>{ingredient}</li>
            )
        })
    }

    const comments = juice.comments

    let commentsRender;
    if (comments) {
        commentsRender = comments.map(comment => {
            return(
                <p ley={comment.id}>{comment}</p>
            )
        })
    }

    return (
        <div className={classes.container}>
            <Paper elevation={5} className={classes.paper}>
                <div className={classes.section}>
                    <h1 className={classes.title}>{juice.title}</h1>
                </div>
                <img src={juice.url} className={classes.img}/>
                <div className={classes.text}>
                    <p className={classes.price}>Price: {juice.price}</p>
                    <p>Description: {juice.description}</p>
                    <p>Type: {juice.type}</p>
                </div>
                <Card className={classes.card}>
                    <h1 className={classes.ingredientsHeader}>Ingredients</h1>
                    <p className={classes.ingredients}>{ingredientsRender}</p>
                </Card>
                <Card className={classes.comments}>
                    <h1>Comments</h1>
                    <p>{commentsRender}</p>
                    <form>
                    <textarea rows='4' cols='50'/>
                    <button type='submit'>Submit</button>
                    </form>
                </Card>
                <div className={classes.buttons}>
                    <Button type="submit" value="Add To Cart" className={classes.cart} onClick={() => addToCart(juice)}>Add to cart</Button>
                    <Link to={"/juices"}>
                        <Button className={classes.back}>Go Back</Button>
                    </Link>
                </div>
            </Paper>
        </div>
    )
}
export default SingleJuiceBody;