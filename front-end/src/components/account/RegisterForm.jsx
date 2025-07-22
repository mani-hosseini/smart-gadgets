import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Eye, EyeOff } from "lucide-react";
import { toast } from "react-toastify";
import { useRegister } from "../../hooks/useRegister";

const schema = yup.object().shape({
  username: yup.string().required("وارد کردن نام کاربری الزامی است."),
  email: yup
    .string()
    .email("ایمیل معتبر وارد کنید.")
    .required("وارد کردن ایمیل الزامی است."),
  password: yup.string().required("وارد کردن گذرواژه الزامی است."),
});

const RegisterForm = () => {
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

  const mutation = useRegister(
    (data) => {
      toast.success("ثبت‌نام با موفقیت انجام شد!", { className: "text-right" });
      reset();
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
      <h2 className="text-2xl  mb-8 text-right font-morabba">عضویت</h2>
      <div className="bg-gray-100 p-8 rounded-lg">
        <form onSubmit={handleSubmit(onSubmit)} noValidate>
          <div className="mb-6">
            <label
              className="block text-right text-gray-700 text-sm font-bold mb-2"
              htmlFor="register-username"
            >
              نام کاربری <span className="text-red-500">*</span>
            </label>
            <input
              id="register-username"
              type="text"
              {...register("username")}
              className={`w-full bg-white md:p-3 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${errors.username ? "border border-red-400" : ""}`}
            />
            {errors.username && (
              <p className="text-red-500 text-xs mt-1 text-right">{errors.username.message}</p>
            )}
          </div>
          <div className="mb-6">
            <label
              className="block text-right text-gray-700 text-sm font-bold mb-2"
              htmlFor="register-email"
            >
              آدرس ایمیل <span className="text-red-500">*</span>
            </label>
            <input
              id="register-email"
              type="email"
              {...register("email")}
              className={`w-full bg-white md:p-3 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${errors.email ? "border border-red-400" : ""}`}
            />
            {errors.email && (
              <p className="text-red-500 text-xs mt-1 text-right">{errors.email.message}</p>
            )}
          </div>
          <div className="mb-6">
            <label
              className="block text-right text-gray-700 text-sm font-bold mb-2"
              htmlFor="register-password"
            >
              گذرواژه <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <input
                id="register-password"
                type={showPassword ? "text" : "password"}
                {...register("password")}
                className={`w-full bg-white md:p-3 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${errors.password ? "border border-red-400" : ""}`}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500"
                tabIndex={-1}
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
            {errors.password && (
              <p className="text-red-500 text-xs mt-1 text-right">{errors.password.message}</p>
            )}
          </div>

          <p className="text-xs text-gray-600 mb-6 text-right leading-relaxed">
            اطلاعات شخصی شما برای پردازش سفارش شما استفاده میشود و پشتیبانی از تجربه شما در این وبسایت و برای اهداف دیگری که در {" "}
            <a href="#" className="text-blue-500">
              سیاست حفظ حریم خصوصی
            </a>{" "}
            توضیح داده شده است.
          </p>

          <button
            type="submit"
            className="w-full cursor-pointer bg-indigo-600 text-white md:py-3 py-2 rounded-md hover:bg-indigo-700 transition-colors"
            disabled={mutation.isLoading}
          >
            {mutation.isLoading ? (
              <span className="flex items-center justify-center gap-2">
                <svg className="animate-spin h-5 w-5 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"></path>
                </svg>
                در حال ارسال...
              </span>
            ) : "عضویت"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegisterForm;
 