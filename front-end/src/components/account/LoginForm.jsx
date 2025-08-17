import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Eye, EyeOff } from "lucide-react";
import { toast } from "react-toastify";
import { useLogin } from "../../hooks/useLogin";
import { useNavigate } from "react-router-dom";
import InputField from "./InputField";
import SubmitButton from "./SubmitButton";

const schema = yup.object().shape({
  email: yup
    .string()
    .email("ایمیل معتبر وارد کنید.")
    .required("وارد کردن ایمیل الزامی است."),
  password: yup.string().required("وارد کردن گذرواژه الزامی است."),
});

const LoginForm = () => {
  const [showPassword, setShowPassword] = React.useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onTouched",
  });

  const navigate = useNavigate();

  const mutation = useLogin(
    (data) => {
      // فرض بر این است که اطلاعات کاربر در data.user و توکن در data.token است
      localStorage.setItem("user", JSON.stringify(data.user));
      localStorage.setItem("token", data.token);
      
      // Dispatch custom event to notify cart context about user login
      window.dispatchEvent(new CustomEvent('userLogin', { detail: { userId: data.user.id } }));
      
      toast.success("ورود با موفقیت انجام شد!", { className: "text-right" });
      reset();
      navigate("/my-account", { replace: true });
    },
    (error) => {
      if (error?.response?.data?.message) {
        toast.error(error.response.data.message, { className: "text-right" });
      } else if (error?.message) {
        toast.error(error.message, { className: "text-right" });
      } else {
        toast.error("خطای ناشناخته‌ای رخ داد!", { className: "text-right" });
      }
    }
  );

  const onSubmit = (data) => {
    mutation.mutate(data);
  };

  return (
    <div className="w-full flex-1 ">
      <h2 className="text-2xl mb-8 text-right font-morabba">ورود</h2>
      <div className="bg-gray-100 md:p-8 p-4 rounded-lg">
        <form onSubmit={handleSubmit(onSubmit)} noValidate>
          <InputField
            label="نام کاربری یا ایمیل"
            id="login-username"
            type="text"
            register={register("email")}
            error={errors.email?.message}
            placeholder="نام کاربری یا ایمیل را وارد کنید"
          />
          <div className="mb-6">
            <label
              className="block text-right text-gray-700 text-sm font-bold mb-2"
              htmlFor="login-password"
            >
              گذرواژه <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <input
                id="login-password"
                type={showPassword ? "text" : "password"}
                {...register("password")}
                className="w-full bg-white md:p-3 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500"
                tabIndex={-1}
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
              {errors.password && (
                <p className="text-red-500 text-xs mt-1 text-right">{errors.password.message}</p>
              )}
            </div>
          </div>
          <div className="flex items-center justify-between mb-6 text-sm">
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                id="remember-me"
                className="md:w-4 md:h-4 w-3 h-3 cursor-pointer"
              />
              <label
                htmlFor="remember-me"
                className="md:text-base text-xs text-gray-600 cursor-pointer"
              >
                مرا به خاطر بسپار
              </label>
            </div>
            <a href="#" className="md:text-base text-xs text-blue-500 hover:text-blue-700">
              گذرواژه خود را فراموش کرده اید؟
            </a>
          </div>
          <SubmitButton disabled={mutation.isLoading}>
            {mutation.isLoading ? (
              <span className="flex items-center justify-center gap-2">
                <svg className="animate-spin h-5 w-5 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"></path>
                </svg>
                در حال ورود...
              </span>
            ) : "ورود"}
          </SubmitButton>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
