import { useState } from "react";
import PropTypes from "prop-types";
import { CameraAlt } from "@mui/icons-material";
import { Button, Container, Paper, TextField, Typography, Stack, Avatar, IconButton } from "@mui/material";
import { useFileHandler, useInputValidation, useStrongPassword } from "6pp";
import { VisuallyHidden } from "../components/styles/StyledComponents";
import { usernameValidator } from "../utils/Validators";
import { ErrorHandler } from "../components/ErrorHandler";

const handleLogin = (e) => {
    e.preventDefault();
    // Handle login
}

const handleSignUp = (e) => {
    e.preventDefault();
    // Handle sign up
}

const LoginForm = ({ username, password, toggleForm }) => (
    <>
        <Typography variant="h5" sx={{ fontWeight: 'bold', marginBottom: '1rem', color: 'white' }}>
            Login
        </Typography>
        <form style={{ width: "100%", marginTop: "1rem" }} onSubmit={handleLogin}>
            <TextField
                required
                fullWidth
                label="Username"
                margin="normal"
                variant="outlined"
                value={username.value}
                onChange={username.changeHandler}
                sx={{ input: { color: 'white' }, label: { color: 'white' }, '& .MuiOutlinedInput-root': { '& fieldset': { borderColor: 'white' }, '&:hover fieldset': { borderColor: '#90caf9' }, '&.Mui-focused fieldset': { borderColor: '#90caf9' } } }}
            />
            <TextField
                required
                fullWidth
                label="Password"
                type="password"
                margin="normal"
                variant="outlined"
                value={password.value}
                onChange={password.changeHandler}
                sx={{ input: { color: 'white' }, label: { color: 'white' }, '& .MuiOutlinedInput-root': { '& fieldset': { borderColor: 'white' }, '&:hover fieldset': { borderColor: '#90caf9' }, '&.Mui-focused fieldset': { borderColor: '#90caf9' } } }}
            />
            <Button
                sx={{
                    marginTop: "1rem",
                    padding: '0.75rem',
                    borderRadius: '8px',
                    boxShadow: '0px 3px 5px rgba(0, 0, 0, 0.2)',
                    background: 'linear-gradient(45deg, #2196f3, #21cbf3)',
                    color: '#fff',
                }}
                type="submit"
                variant="contained"
                fullWidth
            >
                Login
            </Button>
            <Typography textAlign="center" m="1rem" sx={{ color: 'white' }}>
                OR
            </Typography>
            <Button
                type="button"
                variant="text"
                fullWidth
                onClick={toggleForm}
                sx={{ color: '#21cbf3', textDecoration: 'underline' }}
            >
                Sign Up Instead
            </Button>
        </form>
    </>
);

LoginForm.propTypes = {
    username: PropTypes.shape({
        value: PropTypes.string.isRequired,
        changeHandler: PropTypes.func.isRequired,
    }).isRequired,
    password: PropTypes.shape({
        value: PropTypes.string.isRequired,
        changeHandler: PropTypes.func.isRequired,
    }).isRequired,
    toggleForm: PropTypes.func.isRequired,
};

const SignUpForm = ({ name, username, password, bio, avatar, toggleForm }) => (
    <>
        <Typography variant="h5" sx={{ fontWeight: 'bold', marginBottom: '1rem', color: 'white' }}>
            Sign Up
        </Typography>
        <form style={{ width: "100%", marginTop: "1rem" }} onSubmit={handleSignUp}>
            <Stack position="relative" width="10rem" margin="auto">
                <Avatar
                    sx={{ width: "10rem", height: "10rem", objectFit: "contain", borderRadius: '50%', boxShadow: '0px 3px 5px rgba(0, 0, 0, 0.2)' }}
                    src={avatar.preview}
                />
                <ErrorHandler error={avatar.error} />
                <IconButton
                    sx={{
                        position: "absolute",
                        right: 0,
                        bottom: 0,
                        color: "white",
                        backgroundColor: "rgba(0,0,0,0.5)",
                        ":hover": { backgroundColor: "rgba(0,0,0,0.8)" },
                        borderRadius: '50%',
                    }}
                    component="label"
                    htmlFor="file"
                >
                    <CameraAlt />
                    <VisuallyHidden
                        type="file"
                        id="file"
                        onChange={avatar.changeHandler}
                    />
                </IconButton>
            </Stack>
            <TextField
                required
                fullWidth
                label="Name"
                margin="normal"
                variant="outlined"
                value={name.value}
                onChange={name.changeHandler}
                sx={{ input: { color: 'white' }, label: { color: 'white' }, '& .MuiOutlinedInput-root': { '& fieldset': { borderColor: 'white' }, '&:hover fieldset': { borderColor: '#90caf9' }, '&.Mui-focused fieldset': { borderColor: '#90caf9' } } }}
            />
            <TextField
                required
                fullWidth
                label="Username"
                margin="normal"
                variant="outlined"
                value={username.value}
                onChange={username.changeHandler}
                sx={{ input: { color: 'white' }, label: { color: 'white' }, '& .MuiOutlinedInput-root': { '& fieldset': { borderColor: 'white' }, '&:hover fieldset': { borderColor: '#90caf9' }, '&.Mui-focused fieldset': { borderColor: '#90caf9' } } }}
            />
            <ErrorHandler error={username.error} />
            <TextField
                required
                fullWidth
                label="Password"
                type="password"
                margin="normal"
                variant="outlined"
                value={password.value}
                onChange={password.changeHandler}
                sx={{ input: { color: 'white' }, label: { color: 'white' }, '& .MuiOutlinedInput-root': { '& fieldset': { borderColor: 'white' }, '&:hover fieldset': { borderColor: '#90caf9' }, '&.Mui-focused fieldset': { borderColor: '#90caf9' } } }}
            />
            <ErrorHandler error={password.error} />
            <TextField
                required
                fullWidth
                label="Bio"
                margin="normal"
                variant="outlined"
                value={bio.value}
                onChange={bio.changeHandler}
                sx={{ input: { color: 'white' }, label: { color: 'white' }, '& .MuiOutlinedInput-root': { '& fieldset': { borderColor: 'white' }, '&:hover fieldset': { borderColor: '#90caf9' }, '&.Mui-focused fieldset': { borderColor: '#90caf9' } } }}
            />
            <Button
                sx={{
                    marginTop: "1rem",
                    padding: '0.75rem',
                    borderRadius: '8px',
                    boxShadow: '0px 3px 5px rgba(0, 0, 0, 0.2)',
                    background: 'linear-gradient(45deg, #2196f3, #21cbf3)',
                    color: '#fff',
                }}
                type="submit"
                variant="contained"
                fullWidth
            >
                Sign Up
            </Button>
            <Typography textAlign="center" m="1rem" sx={{ color: 'white' }}>
                OR
            </Typography>
            <Button
                type="button"
                variant="text"
                fullWidth
                onClick={toggleForm}
                sx={{ color: '#21cbf3', textDecoration: 'underline' }}
            >
                Login Instead
            </Button>
        </form>
    </>
);

SignUpForm.propTypes = {
    name: PropTypes.shape({
        value: PropTypes.string.isRequired,
        changeHandler: PropTypes.func.isRequired,
    }).isRequired,
    username: PropTypes.shape({
        value: PropTypes.string.isRequired,
        changeHandler: PropTypes.func.isRequired,
        error: PropTypes.string,
    }).isRequired,
    password: PropTypes.shape({
        value: PropTypes.string.isRequired,
        changeHandler: PropTypes.func.isRequired,
        error: PropTypes.string,
    }).isRequired,
    bio: PropTypes.shape({
        value: PropTypes.string.isRequired,
        changeHandler: PropTypes.func.isRequired,
    }).isRequired,
    avatar: PropTypes.shape({
        preview: PropTypes.string,
        error: PropTypes.string,
        changeHandler: PropTypes.func.isRequired,
    }).isRequired,
    toggleForm: PropTypes.func.isRequired,
};

const Login = () => {
    const [isLogin, setIsLogin] = useState(true);
    const toggleLogin = () => setIsLogin(!isLogin);

    const name = useInputValidation("");
    const username = useInputValidation("", usernameValidator);
    const password = useStrongPassword();
    const bio = useInputValidation("");
    const avatar = useFileHandler("single");

    return (
        <div 
        style={{
        backgroundImage: 'url("https://images.unsplash.com/photo-1597839219216-a773cb2473e4?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    }}>
        <Container
            component="main"
            maxWidth="xs"
            sx={{
                height: "100vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <Paper
                elevation={3}
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    padding: 1.5,
                    backgroundColor: "rgba(255, 255, 255, 0.1)",
                    backdropFilter: "blur(10px)",
                    borderRadius: '16px',
                    boxShadow: '0px 5px 15px rgba(0, 0, 0, 0.2)',
                }}
            >
                {isLogin ? (
                    <LoginForm
                        username={username}
                        password={password}
                        toggleForm={toggleLogin}
                    />
                ) : (
                    <SignUpForm
                        name={name}
                        username={username}
                        password={password}
                        bio={bio}
                        avatar={avatar}
                        toggleForm={toggleLogin}
                    />
                )}
            </Paper>
        </Container>
        </div>
    );
};

export default Login;
