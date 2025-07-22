import React from "react";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import * as yup from "yup";
import {Eye, EyeOff} from "lucide-react";
import {toast} from "react-toastify";

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
        formState: {errors},
        reset,
    } = useForm({
        resolver: yupResolver(schema),
        mode: "onTouched",
    });
    const onSubmit = (data) => {
        console.log(data);
        toast.success("ورود با موفقیت انجام شد!");
        reset();
    };
    return (
        <div className="w-full flex-1 ">
            <h2 className="text-2xl mb-8 text-right font-morabba">ورود</h2>
            <div className="bg-gray-100 md:p-8 p-4 rounded-lg">
                <form onSubmit={handleSubmit(onSubmit)} noValidate>
                    <div className="mb-6">
                        <label
                            className="block text-right text-gray-700 text-sm font-bold mb-2"
                            htmlFor="login-username"
                        >
                            نام کاربری یا آدرس ایمیل <span className="text-red-500">*</span>
                        </label>
                        <input
                            id="login-username"
                            {...register("email")}
                            type="text"
                            className="w-full bg-white md:p-3 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        {errors.email && (
                            <p className="text-red-500 text-xs mt-1 text-right">{errors.email.message}</p>
                        )}
                    </div>

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
                            >
                                {showPassword ? <EyeOff size={20}/> : <Eye size={20}/>}
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

                    <button
                        type="submit"
                        className="w-full cursor-pointer bg-indigo-600 text-white md:py-3 py-2 rounded-md hover:bg-indigo-700 transition-colors"
                    >
                        ورود
                    </button>
                </form>
            </div>
        </div>
    );
};

export default LoginForm;
