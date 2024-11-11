import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

const Login = () => {
  return (
    <div className="bg-[url('https://i.ibb.co.com/h1hxcRR/bg.jpg')] bg-cover bg-center bg-no-repeat h-svh w-screen">
      <div className="flex justify-center items-cente ">
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="email">Email</Label>
          <Input type="email" id="email" placeholder="Email" />
        </div>
      </div>
    </div>
  );
};

export default Login;
