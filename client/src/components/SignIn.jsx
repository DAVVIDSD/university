import React, {useState} from 'react';
// Components
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import {makeStyles} from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import LinearProgress from '@material-ui/core/LinearProgress';
// Login
import GoogleLogin from "react-google-login";
import useAuthContext from '../hooks/useAuthContext';



const useStyles = makeStyles((theme) => ({
  paper: {
    // marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
    textAlign: 'center'

  },
  submit: {
    margin: theme.spacing(1, 0, 0),
  },
  body: {
    height: '100vh',
    paddingTop: '80px',
  },
}));

const SignIn = () => {
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const {login} = useAuthContext()

  const HandlerSubmit = () => {
    setLoading(true)
    // if (input === 'HOLA') {

    const data = {
      name: input
    }
    if (loading === false) {
      setTimeout(() => {
        login(data)
      }, 1000)
    }
    // }
  }

  const changeLoading = () => {
    setTimeout(() => {
      setLoading(false)
    }, 1000)
  }

  const classes = useStyles();
  const url = "http://localhost:5000";

  const responseGoogle = async (response) => {
    const profile = response.profileObj;
    // const data = {
    //   nombre: profile.name,
    //   apellido: profile.familyName,
    //   email: profile.email
    // }
    // const res = await fetch(`${url}/usuarios`, {
    //   method: "POST",
    //   body: JSON.stringify(data),
    //   headers: {
    //     "content-type": "application/json",
    //   },
    // });
    login(profile)
    // console.log(res);

  };
  return (
    <>
      {loading && (
        <>
          <LinearProgress />
          {changeLoading()}
        </>
      )}
      <div className={classes.body} >
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <div className={classes.paper}>
            <Avatar className={classes.avatar}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
        </Typography>
            <form className={classes.form} noValidate>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                value={input}
                autoComplete="email"
                autoFocus
                onChange={(e) => setInput(e.target.value)}
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              <Button
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
                onClick={() => HandlerSubmit()}
              >
                Sign In
          </Button>
              <div>
                <p>Or</p>
              </div>
              <GoogleLogin
                clientId="658582871570-3u50k96d1pe20k9sc5hm23pe84foe850.apps.googleusercontent.com"
                buttonText="Google Sign in"
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
                cookiePolicy={"single_host_origin"}
              />
            </form>
          </div>
        </Container>
      </div>

    </>
  );
}
export default SignIn;
