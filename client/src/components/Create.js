import React, { useState } from 'react';
import ShoppingCartRoundedIcon from '@material-ui/icons/ShoppingCartRounded';
import RemoveShoppingCartRoundedIcon from '@material-ui/icons/RemoveShoppingCartRounded'
import {makeStyles} from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    btn: {
        backgroundColor: 'white',
        color: '#DD415B',
        border: '3px solid red',
        padding: '0 30px',
        height: 48,
        borderRadius: 30,
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    },
    create: {
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        borderRadius: 30,
        border: 0,
        color: 'white',
        height: 48,
        padding: '0 30px',
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    },
    title: {
        fontFamily: 'BebasNeue, serif',
        fontSize: '4em'
    },
    row: {
        display: 'flex',
        flexDirection: 'column',
        width: 325,
        margin: '5em'
    },
    added: {
        fontSize: '4em',
        color: 'black',
        fontFamily: 'BebasNeue, serif',
    },
    rowSecond: {
        display: 'flex',
        flexDirection: 'column',
        width: 325,
        margin: '5em',
    },
    headerOne: {
        fontFamily: 'BebasNeue, serif',
        fontSize: '5em',
        color: 'black',

    },
    submit: {
        display: 'flex',
        flexDirection: 'row',
        height: 150,
        margin: '5em 5em 0 0'
    },
    actualButton: {
        fontFamily: 'BebasNeue, serif',
        fontSize: '5em',
        padding: '0 1em',
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        borderRadius: 30,
        border: 0,
        color: 'white',
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        bottom: 0,
        marginLeft: '1em'
    },
    header: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        fontFamily: 'BebasNeue, serif',
    },
    createHeader: {
        fontSize: '10em',
        marginTop: '0.2em'
    },
    card: {
        margin: '2em 4em',
    }
}))

const Create = ({cart, setCart, created, setCreated}) => {
    const classes = useStyles();
    const [ingredients, setIngredients] = useState(false)
    const [redApples, setRedApples] = useState(false)
    const [greenApples, setGreenApples] = useState(false)
    const [kale, setKale] = useState(false)
    const [celery, setCelery] = useState(false)
    const [lemon, setLemon] = useState(false)
    const [beets, setBeets] = useState(false)
    const [tomatoes, setTomatoes] = useState(false)
    const [carrots, setCarrots] = useState(false)
    const [mintLeaves, setMintLeaves] = useState(false)

    const createJuice = (e) => {
        e.preventDefault();
        setCreated(true)
        console.log(created)
    }
    const addRedApple = (e) => {
        e.preventDefault();
        setRedApples(true)
    }
    const subtractRedApple = (e) => {
        e.preventDefault();
        setRedApples(false)
    }
    const addGreenApple = (e) => {
        e.preventDefault();
        setGreenApples(true)
    }
    const subtractGreenApple = (e) => {
        e.preventDefault();
        setGreenApples(false)
    }
    const addKale = (e) => {
        e.preventDefault();
        setKale(true)
    }
    const subtractKale = (e) => {
        e.preventDefault();
        setKale(false)
    }
    const addCelery = (e) => {
        e.preventDefault();
        setCelery(true)
    }
    const subtractCelery = (e) => {
        e.preventDefault();
        setCelery(false)
    }
    const addLemon = (e) => {
        e.preventDefault();
        setLemon(true)
    }
    const subtractLemon = (e) => {
        e.preventDefault();
        setLemon(false)
    }
    const addBeets = (e) => {
        e.preventDefault();
        setBeets(true)
    }
    const subtractBeets = (e) => {
        e.preventDefault();
        setBeets(false)
    }
    const addTomatoes = (e) => {
        e.preventDefault();
        setTomatoes(true)
    }
    const subtractTomatoes = (e) => {
        e.preventDefault();
        setTomatoes(false)
    }
    const addCarrots = (e) => {
        e.preventDefault();
        setCarrots(true)
    }
    const subtractCarrots = (e) => {
        e.preventDefault();
        setCarrots(false)
    }
    const addMintLeaves = (e) => {
        e.preventDefault();
        setMintLeaves(true)
    }
    const subtractMintLeaves = (e) => {
        e.preventDefault();
        setMintLeaves(false)
    }

    return(
        <div>
            <div className={classes.header}>
                <h1 className={classes.createHeader}>Create Your Juice!</h1>
            </div>
            <form onSubmit={createJuice}>
                <div className={classes.root}>
                    <Card className={classes.card}>
                        <div className={classes.row}>
                            <h1 className={classes.headerOne}>Ingredients</h1>
                        </div>
                        <div className={classes.row}>
                            <h1 className={classes.title}>Red Apples</h1>
                            <button onClick={addRedApple} className={classes.btn}><ShoppingCartRoundedIcon /></button>
                        </div>
                        <div className={classes.row}>
                            <h1 className={classes.title}>Green Apples</h1>
                            <button onClick={addGreenApple} className={classes.btn}><ShoppingCartRoundedIcon /></button>
                        </div>
                        <div className={classes.row}>
                            <h1 className={classes.title}>Kale</h1>
                            <button onClick={addKale} className={classes.btn}><ShoppingCartRoundedIcon /></button>
                        </div>
                        <div className={classes.row}>
                            <h1 className={classes.title}>Celery</h1>
                            <button onClick={addCelery} className={classes.btn}><ShoppingCartRoundedIcon /></button>
                        </div>
                        <div className={classes.row}>
                            <h1 className={classes.title}>Lemon</h1>
                            <button onClick={addLemon} className={classes.btn}><ShoppingCartRoundedIcon /></button>
                        </div>
                        <div className={classes.row}>
                            <h1 className={classes.title}>Beets</h1>
                            <button onClick={addBeets} className={classes.btn}><ShoppingCartRoundedIcon /></button>
                        </div>
                        <div className={classes.row}>
                            <h1 className={classes.title}>Tomatoes</h1>
                            <button onClick={addTomatoes} className={classes.btn}><ShoppingCartRoundedIcon /></button>
                        </div>
                        <div className={classes.row}>
                            <h1 className={classes.title}>Carrots</h1>
                            <button onClick={addCarrots} className={classes.btn}><ShoppingCartRoundedIcon /></button>
                        </div>
                        <div className={classes.row}>
                            <h1 className={classes.title}>Mint Leaves</h1>
                            <button onClick={addMintLeaves} className={classes.btn}><ShoppingCartRoundedIcon /></button>
                        </div>
                    </Card>
                    <div className={classes.submit} type='submit' onClick={createJuice}>
                        <button className={classes.actualButton}>Add to Cart</button>
                    </div>
                    <Card className={classes.card}>
                        <div className={classes.rowSecond}>
                            <h1 className={classes.headerOne}>Your Juice:</h1>
                        </div>
                        {redApples ?
                            <div className={classes.rowSecond}>
                                <h3 className={classes.added}>Red Apples</h3>
                                <button className={classes.btn} onClick={subtractRedApple}><RemoveShoppingCartRoundedIcon /></button>
                            </div>
                            : null}
                        {greenApples ?
                            <div className={classes.rowSecond}>
                                <h3 className={classes.added}>Green Apples</h3>
                                <button className={classes.btn} onClick={subtractGreenApple}><RemoveShoppingCartRoundedIcon /></button>
                            </div>
                            : null}
                        {kale ?
                            <div className={classes.rowSecond}>
                                <h3 className={classes.added}>Kale</h3>
                                <button className={classes.btn} onClick={subtractKale}><RemoveShoppingCartRoundedIcon /></button>
                            </div>
                                : null}
                        {celery ?
                            <div className={classes.rowSecond}>
                                <h3 className={classes.added}>Celery</h3>
                                <button className={classes.btn} onClick={subtractCelery}><RemoveShoppingCartRoundedIcon /></button>
                            </div>
                                : null}
                        {lemon ?
                            <div className={classes.rowSecond}>
                                <h3 className={classes.added}>Lemon</h3>
                                <button className={classes.btn} onClick={subtractLemon}><RemoveShoppingCartRoundedIcon /></button>
                            </div>
                            : null}
                        {beets ?
                            <div className={classes.rowSecond}>
                                <h3 className={classes.added}>Beets</h3>
                                <button className={classes.btn} onClick={subtractBeets}><RemoveShoppingCartRoundedIcon /></button>
                            </div>
                            : null}
                        {tomatoes ?
                            <div className={classes.rowSecond}>
                                <h3 className={classes.added}>Tomatoes</h3>
                                <button className={classes.btn} onClick={subtractTomatoes}><RemoveShoppingCartRoundedIcon /></button>
                            </div>
                            : null}
                        {carrots ?
                            <div className={classes.rowSecond}>
                                <h3 className={classes.added}>Carrots</h3>
                                <button className={classes.btn} onClick={subtractCarrots}><RemoveShoppingCartRoundedIcon /></button>
                            </div>
                            : null}
                        {mintLeaves ?
                            <div className={classes.rowSecond}>
                                <h3 className={classes.added}>Mint Leaves</h3>
                                <button className={classes.btn} onClick={subtractMintLeaves}><RemoveShoppingCartRoundedIcon /></button>
                            </div>
                            : null}
                    </Card>
                </div>
            </form>
        </div>
    )
}
export default Create