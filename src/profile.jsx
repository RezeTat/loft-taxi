import React, {Component} from 'react';
import {connect} from 'react-redux';
import {logOut} from './actions'
import './profile.css';
import {MCIcon} from 'loft-taxi-mui-theme';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';


export class Profile extends Component{
    render() {
        return(
        <>
        <div className='profile'>
            <div className='payBox'>   
                <form color="secondary" className='payForm'>
                    <h3 className="namePage">Профиль</h3>
                    <h4 className="namePage__small">Способ оплаты</h4>
                        <Grid align-content='center'>
                            <Grid item xs={12} className="payContainer">
                                <Grid  xs={6} className='cardPart'>
                                    <MCIcon className="icon"></MCIcon>
                                    <TextField className="card__item"
                                        maxlenght={12}
                                        required
                                        fullWidth
                                        id="cardNumber"
                                        label ="Номер карты"
                                        name="cardNumber"
                                        defaultValue='0000 0000 0000 0000'
                                        type = 'text'
                                        value=""
                                    />
                                    <TextField className="card__item"
                                        autoComplete="cardValid"
                                        name="cardValid"
                                        required
                                        fullWidth
                                        id="cardValid"
                                        label="Срок действия"
                                        autoFocus
                                        format="MM/YY"
                                        value='07/20'
                                    />
                                </Grid>
                                <Grid  xs={6} className='cardPart'>
                                    <TextField className="card__item"
                                        required
                                        fullWidth
                                        defaultValue='USERNAME'
                                        id="cardName"
                                        label="Имя владельца"
                                        name="cardName"
                                        autoComplete="cardName"
                                        value=""
                                    />
                                    <TextField className="card__item"
                                        defaultValue='CVC'
                                        required
                                        fullWidth
                                        name="CVC"
                                        label="CVC"
                                        type="text"
                                        id="CVC"
                                        value=""
                                    />
                                </Grid>
                        </Grid>
                            <Button
                                type="submit"
                                variant="contained"
                                color="primary"
                                className="submit"
                                align="center"
                            >
                                Сохранить
                            </Button>
                    </Grid>
                </form>
            </div>
        </div>
        </>
        );
    }
}


export const ProfileWithConnect = connect(
    null,
    {logOut}
)(Profile)
