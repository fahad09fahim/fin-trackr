import {
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
} from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useContext, useState } from "react";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Button from "@/components/Shared/Button";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { AuthContext } from "@/Provider/AuthProvider";

//for custom theme
const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-root": {
            color: "white",
            // "& fieldset": {
            //   borderColor: "white",
            // },
            "&:hover fieldset": {
              borderColor: "#90caf9",
            },
            "&.Mui-focused fieldset": {
              borderColor: "#90caf9",
            },
          },
          "& .MuiInputLabel-root": {
            color: "white",
          },
          "& .MuiInputLabel-root.Mui-focused": {
            color: "#90caf9",
          },
        },
      },
    },
  },
});
const Login = () => {
  //show password functionality
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleMouseUpPassword = (event) => {
    event.preventDefault();
  };

  const { signIn } = useContext(AuthContext);

  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    signIn(data.email, data.password).then(() => {
      console.log("User signed in successfully!");
    });
  };

  return (
    <div className="bg-[url('/bg.svg')] bg-cover bg-center bg-no-repeat min-h-screen relative z-10">
      {/* <div className=" absolute top-0 left-0 w-full h-screen bg-black opacity-50 -z-20 "></div> */}
      <div className=" flex items-center justify-center h-screen">
        <div className="text-white bg-slate-800  rounded-lg shadow-lg w-2/6 p-8">
          <h1 className="text-center text-4xl">Login</h1>
          <ThemeProvider theme={darkTheme}>
            <form
              className="flex flex-col mt-2 text-white gap-5"
              onSubmit={handleSubmit(onSubmit)}
            >
              <TextField
                id="outlined-basic"
                label="Email"
                variant="outlined"
                {...register("email", {
                  required: "Email is required",
                })}
              />
              <FormControl variant="outlined">
                <InputLabel htmlFor="outlined-adornment-password">
                  Password
                </InputLabel>
                <OutlinedInput
                  id="outlined-adornment-password"
                  type={showPassword ? "text" : "password"}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label={
                          showPassword
                            ? "hide the password"
                            : "display the password"
                        }
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        onMouseUp={handleMouseUpPassword}
                        edge="end"
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  }
                  label="Password"
                  {...register("password", {
                    required: "Password is required",
                    pattern: {
                      value:
                        /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                      message:
                        "Password must contain at least 8 characters, one uppercase, one lowercase, one number, and one special character.",
                    },
                  })}
                />
              </FormControl>

              <Button type="submit">log in</Button>
              <label className="label">
                <a href="/" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </form>
          </ThemeProvider>
          <label className="label mt-5">
            <Link to="/signup" className="text-base link link-hover ">
              New to FinTrackr ?
              <span className="text-blue-400"> Sign up now</span>
            </Link>
          </label>
        </div>
      </div>
    </div>
  );
};

export default Login;
