import React, { useState } from "react";
// Components
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Backdrop from "@material-ui/core/Backdrop";
import CircularProgress from "@material-ui/core/CircularProgress";
// Login
import GoogleLogin from "react-google-login";
import useAuthContext from "../hooks/useAuthContext";
import { useDispatch, useSelector } from "react-redux";
import { Authlogin, GoogleAuth } from "../Redux/Actions/loginAction";
// Form Validation
import { useFormik } from "formik";
import { LoginValidationSchema } from "../validations/index";
// Styles
import loginStyle from "../Styles/LoginStyle";

const SignIn = () => {
  const dispatch = useDispatch();
  // User State
  const user = useSelector((state) => state.user.data.data);
  // Loading
  const [loading, setLoading] = useState(false);
  // Login Sesion
  const { login } = useAuthContext();
  //Styles
  const classes = loginStyle();
  // Oauth google
  const responseGoogle = async (response) => {
    const profile = response.profileObj;
    const data = {
      nombre: profile.name,
      apellido: profile.familyName,
      email: profile.email,
      password: profile.googleId,
    };
    dispatch(GoogleAuth(data));
    login(user);
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: LoginValidationSchema,

    onSubmit: (values, { resetForm }) => {
      setLoading(true);
      setTimeout(() => {
        dispatch(Authlogin(values));
        login(user);
        setLoading(false);
      }, 600);
      resetForm();
    },
  });

  return (
    <>
      <div className={classes.body}>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <div className={classes.paper}>
            <Avatar className={classes.avatar}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <form
              onSubmit={formik.handleSubmit}
              className={classes.form}
              noValidate
            >
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                value={formik.values.email}
                autoFocus
                onChange={formik.handleChange}
                error={formik.touched.email && Boolean(formik.errors.email)}
                onBlur={formik.handleBlur}
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
                value={formik.values.password}
                onChange={formik.handleChange}
                error={
                  formik.touched.password && Boolean(formik.errors.password)
                }
                onBlur={formik.handleBlur}
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
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
        <Backdrop className={classes.backdrop} open={loading}>
          <CircularProgress color="inherit" />
        </Backdrop>
      </div>
    </>
  );
};
export default SignIn;
