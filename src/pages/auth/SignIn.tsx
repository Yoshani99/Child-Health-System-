import { Eye, EyeOff } from "lucide-react";
import AuthLayout from "./AuthLayout";
import { useAuthForm } from "../../hooks/useAuthForm";

export default function SignIn() {
  const { formData, showPassword, setShowPassword, handleChange } = useAuthForm(
    {
      email: "",
      password: "",
    },
  );

  const handleSubmit = () => {
    console.log("Sign In:", formData);
    alert("Welcome back! ");
  };

  return (
    <AuthLayout>
      <h1 className="text-3xl font-bold mb-6 text-center">Welcome Back!</h1>

      <div className="space-y-4">
        <input
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          className="w-full p-3 border rounded-xl"
        />

        <div className="relative">
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className="w-full p-3 border rounded-xl"
          />
          <button
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-3"
          >
            {showPassword ? <EyeOff /> : <Eye />}
          </button>
        </div>

        <button
          onClick={handleSubmit}
          className="w-full bg-purple-500 text-white py-3 rounded-xl"
        >
          Sign In
        </button>
      </div>
    </AuthLayout>
  );
}
