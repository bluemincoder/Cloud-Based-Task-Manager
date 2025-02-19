import React from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import Textbox from "../components/Textbox";
import Button from "../components/Button";
import { useDispatch } from "react-redux";
import { useRegisterMutation } from "../redux/slices/api/authApiSlice";
import { setCredentials } from "../redux/slices/authSlice";
import Loading from "../components/Loader";
import { toast } from "sonner";


const Register = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [registerUser, { isLoading }] = useRegisterMutation();

    const submitHandler = async (data) => {
        try {
            data.isAdmin = data.isAdmin=="true"; // Convert string to boolean
            const result = await registerUser(data).unwrap();
            dispatch(setCredentials(result));
            navigate("/dashboard");
            toast.success("Registration successful");
        } catch (error) {
            toast.error(error?.data?.message || error.message);
        }
    };

    return (
        <div className="w-full min-h-screen flex items-center justify-center flex-col lg:flex-row bg-[#f3f4f6]">
            <div className="w-full md:w-auto flex gap-0 md:gap-40 flex-col md:flex-row items-center justify-center">
                <div className="h-full w-full lg:w-2/3 flex flex-col items-center justify-center">
                    <div className="w-full md:max-w-lg 2xl:max-w-3xl flex flex-col items-center justify-center gap-5 md:gap-y-10 2xl:-mt-20">
                        <span className="flex gap-1 py-1 px-3 border rounded-full text-sm md:text-base border-gray-300 text-gray-600">
                            Join us and manage all your tasks efficiently!
                        </span>
                        <p className="flex flex-col gap-0 md:gap-4 text-4xl md:text-6xl 2xl:text-7xl font-black text-center text-blue-700">
                            <span>Managix</span>
                        </p>
                        <div className="cell">
                            <div className="circle rotate-in-up-left"></div>
                        </div>
                    </div>
                </div>

                <div className="w-full md:w-2/3 p-4 md:p-1 flex flex-col justify-center items-center">
                    <form
                        onSubmit={handleSubmit(submitHandler)}
                        className="form-container w-full md:w-[500px] flex flex-col gap-y-8 bg-white px-10 pt-14 pb-14"
                    >
                        <div>
                            <p className="text-blue-600 text-3xl font-bold text-center">
                                Create your account
                            </p>
                            <p className="text-center text-base text-gray-700 ">
                                Sign up to start managing your tasks.
                            </p>
                        </div>

                        <div className="flex flex-col gap-y-5">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                <Textbox
                                    placeholder="Your Name"
                                    type="text"
                                    name="name"
                                    label="Full Name"
                                    className="w-full rounded-full"
                                    register={register("name", {
                                        required: "Name is required!",
                                    })}
                                    error={
                                        errors.name ? errors.name.message : ""
                                    }
                                />
                                <Textbox
                                    placeholder="Your Title"
                                    type="text"
                                    name="title"
                                    label="Title"
                                    className="w-full rounded-full"
                                    register={register("title", {
                                        required: "Title is required!",
                                    })}
                                    error={
                                        errors.title ? errors.title.message : ""
                                    }
                                />
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                <Textbox
                                    placeholder="User Role"
                                    type="text"
                                    name="role"
                                    label="Role"
                                    className="w-full rounded-full"
                                    register={register("role", {
                                        required: "Role is required!",
                                    })}
                                    error={
                                        errors.role ? errors.role.message : ""
                                    }
                                />
                                <Textbox
                                    placeholder="email@example.com"
                                    type="email"
                                    name="email"
                                    label="Email Address"
                                    className="w-full rounded-full"
                                    register={register("email", {
                                        required: "Email Address is required!",
                                    })}
                                    error={
                                        errors.email ? errors.email.message : ""
                                    }
                                />
                            </div>
                            <Textbox
                                placeholder="your password"
                                type="password"
                                name="password"
                                label="Password"
                                className="w-full rounded-full"
                                register={register("password", {
                                    required: "Password is required!",
                                })}
                                error={
                                    errors.password
                                        ? errors.password.message
                                        : ""
                                }
                            />

                            <div className="flex flex-col gap-2">
                                <label className="text-gray-700 font-medium">
                                    Admin Access
                                </label>
                                <select
                                    {...register("isAdmin", {
                                        required: "Please select an option!",
                                    })}
                                    className="bg-transparent px-3 py-2.5 border border-gray-300 text-gray-900 outline-none text-base focus:ring-2 ring-blue-300 rounded-full"
                                >
                                    <option value="">Select an option</option>
                                    <option value="true">Yes</option>
                                    <option value="false">No</option>
                                </select>
                                {errors.isAdmin && (
                                    <p className="text-red-500 text-sm">
                                        {errors.isAdmin.message}
                                    </p>
                                )}
                            </div>

                            {isLoading ? (
                                <Loading />
                            ) : (
                                <Button
                                    type="submit"
                                    label="Register"
                                    className="w-full h-10 bg-blue-700 text-white rounded-full"
                                />
                            )}
                        </div>
                        <p className="text-center text-gray-700">
                            Already have an account?{" "}
                            <Link
                                to="/log-in"
                                className="text-blue-600 hover:underline"
                            >
                                Login here
                            </Link>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;
