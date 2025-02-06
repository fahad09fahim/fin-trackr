import React from "react";
import { TextField } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import Button from "@/components/Shared/Button";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

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
const Signup = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <div className="bg-[url('/bg.svg')] bg-cover bg-center bg-no-repeat min-h-screen relative z-10">
      {/* <div className=" absolute top-0 left-0 w-full h-screen bg-black opacity-50 -z-20 "></div> */}
      <div className=" flex items-center justify-center h-screen">
        <div className="text-white bg-slate-800  rounded-lg shadow-lg w-2/6 p-8">
          <h1 className="text-center text-4xl">Sign up</h1>
          <ThemeProvider theme={darkTheme}>
            <form
              className="flex flex-col mt-2 text-white gap-5"
              onSubmit={handleSubmit(onSubmit)}
            >
              <TextField
                id="outlined-basic"
                label="Name"
                variant="outlined"
                {...register("Name", {
                  required: "Name is required",
                })}
              />
              <TextField
                id="outlined-basic"
                label="Email"
                variant="outlined"
                {...register("email", {
                  required: "Email is required",
                })}
              />
              <TextField
                id="outlined-basic"
                label="Password"
                variant="outlined"
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

              <Button type="submit">Sign up</Button>
              <label className="label">
                <a href="/" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </form>
          </ThemeProvider>
          <label className="label mt-5">
            <Link to="/login" className="text-base link link-hover ">
              Already have an Account ?
              <span className="text-blue-400"> login now</span>
            </Link>
          </label>
        </div>
      </div>
    </div>
  );
};

export default Signup;
