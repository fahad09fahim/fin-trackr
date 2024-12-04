import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

const Login = () => {
  return (
    // <div className="bg-[url('https://i.ibb.co.com/h1hxcRR/bg.jpg')] bg-cover bg-center bg-no-repeat h-svh w-auto">
    <div className="flex justify-center items-center h-screen ">
      <div className="grid w-full max-w-sm items-center gap- bg-transparent shadow-white">
        <h1 className="text-center text-2xl">Login </h1>
        <form action="">
          <Label htmlFor="email">Your Email</Label>
          <Input type="email" id="email" placeholder="Email" />
          <Label htmlFor="email">Password</Label>
          <Input type="password" id="password" placeholder="password" />
        </form>
        <div className="flex justify-between mt-2">
          <div className="flex justify-center items-center gap-1">
            <input type="checkbox" />
            <p>Remember Me</p>
          </div>
          <a href="#" className="text-sm text-primary">
            Forgot Password?
          </a>
        </div>
      </div>
    </div>
    // </div>
  );
};

export default Login;
