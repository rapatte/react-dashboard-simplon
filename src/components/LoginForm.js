import React, {useState, useContext } from 'react';
import { Button, TextField } from '@material-ui/core';
import useStyles from '../theme/forms.css';
import { login } from '../services';
import { AuthContext } from '../store';

const LoginForm = (props) => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);
    const authStore = useContext(AuthContext);
    console.log(authStore);

    const handleClick = async (e) => {
        try{
            const response = await login(username, password)
            localStorage.setItem("token", response.data.token)
            authStore.setToken(response.data.token)
            authStore.setIsAuth(true);
            props.history.push("/dashboard")
        } catch(error) {

        }
    }

    const classes = useStyles();
    
    return (
        <div>
            <div>
                <div className={`wrapper ${classes.loginForm}`}>
                    <TextField
                        className="input"
                        label="Username"
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <br />
                    <TextField
                        className="input"
                        label="Password"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <br />
                    <Button
                        variant="outlined" color="primary"
                        onClick={event => handleClick(event)}>
                        Se connecter
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default LoginForm;