import React from 'react';
import {connect} from 'react-redux';
import {logOut} from './actions'
import './profile.css';
import {MCIcon} from 'loft-taxi-mui-theme';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent'; 
import Typography from '@material-ui/core/Typography';
import {profile} from './actions';

export const Profile=(props)=>{

    // const token = JSON.parse(localStorage.getItem('user'));
    // const token = alert( localStorage.getItem('user') )
    const [cardInfo, setCardInfo] = React.useState({
		cardNumber: "",
        expiryDate: "",
        cardName: "",
        cvc: "",
        token:  ""
    });
   
    const onChangeInput = (e) => {
        const input = e.target;
        setCardInfo({...cardInfo, [input.name]: input.value })
    };
    const handleSubmit=e=> {
        e.preventDefault();
        props.profile(cardInfo.cardNumber,cardInfo.expiryDate,cardInfo.cardName,cardInfo.cvc,cardInfo.token );
    };
        return(
        <>
        <div className='profile'>
            <div className='payBox'>   
                <form color="secondary" className='payForm' onSubmit={handleSubmit}>
                    <Typography variant="h4" component="h4" color='textPrimary'>Профиль</Typography>
                    <Typography variant="h5" component="h5"color='textSecondary'>Способ оплаты</Typography>
                        <Grid className='cardContainer'>
                            <Grid item xs={12} className="payContainer">
                                <Grid  xs={6} >
                                    <Card className='cardPart'>
                                        <CardContent>
                                            <MCIcon className="icon"></MCIcon>
                                            <TextField className="card__item"
                                                margin="normal"
                                                maxlenght={12}
                                                required
                                                fullWidth
                                                id="cardNumber"
                                                label ="Номер карты"
                                                name="cardNumber"
                                                placeholder='0000 0000 0000 0000'
                                                type = 'text'
                                                value={cardInfo.cardNumber} 
                                                onChange={onChangeInput}
                                            />
                                            <TextField className="card__item"
                                                margin="normal"
                                                autoComplete="expiryDate"
                                                name="expiryDate"
                                                required
                                                fullWidth
                                                id="expiryDate"
                                                label="Срок действия"
                                                autoFocus
                                                format="MM/YY"
                                                placeholder='07/20'
                                                value={cardInfo.expiryDate} 
                                                onChange={onChangeInput}
                                            />
                                        </CardContent>
                                    </Card>
                                </Grid>
                                <Grid  xs={6} >
                                    <Card className='cardPart'>
                                        <CardContent>
                                            <TextField className="card__item"
                                                margin="normal"
                                                required
                                                fullWidth
                                                defaultValue='USER NAME'
                                                id="cardName"
                                                label="Имя владельца"
                                                name="cardName"
                                                autoComplete="cardName"
                                                value={cardInfo.cardName} 
                                                onChange={onChangeInput}
                                            />
                                            <TextField className="card__item"
                                                margin="normal"
                                                defaultValue='cvc'
                                                required
                                                fullWidth
                                                name="cvc"
                                                label="CVC"
                                                type="text"
                                                id="cvc"
                                                value={cardInfo.cvc} 
                                                onChange={onChangeInput}
                                            />
                                        </CardContent>
                                    </Card>    
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

const mapStateToProps = (state) => ({
        return:{
            token: state.auth.token
        }
});

export const ProfileWithConnect = connect(
    mapStateToProps,
    {logOut,profile}
)(Profile)
