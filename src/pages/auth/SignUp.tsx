import AuthLayout from "./AuthLayout";
import { useAuthForm } from "../../hooks/useAuthForm";

export default function SignUp() {
  const { formData, showPassword, setShowPassword, handleChange } = useAuthForm(
    {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  );

  const handleSubmit = () => {
    console.log("Sign Up:", formData);
    alert("Welcome aboard! 🎉");
  };

  return (
    <AuthLayout>
      <h1 className="text-3xl font-bold mb-6 text-center">Create Account</h1>

      <div className="space-y-4">
        <input name="name" placeholder="Name" onChange={handleChange} />
        <input name="email" placeholder="Email" onChange={handleChange} />

        <input
          type={showPassword ? "text" : "password"}
          name="password"
          placeholder="Password"
          onChange={handleChange}
        />

        <input
          type={showPassword ? "text" : "password"}
          name="confirmPassword"
          placeholder="Confirm Password"
          onChange={handleChange}
        />

        <button
          onClick={() => setShowPassword(!showPassword)}
          className="text-sm text-purple-600"
        >
          {showPassword ? "Hide Passwords" : "Show Passwords"}
        </button>

        <button
          onClick={handleSubmit}
          className="w-full bg-pink-500 text-white py-3 rounded-xl"
        >
          Sign Up
        </button>
      </div>
    </AuthLayout>
  );
}
