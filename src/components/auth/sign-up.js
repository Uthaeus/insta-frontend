import { useForm } from "react-hook-form";

function SignUp() {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = data => {
        console.log(data);
    }

    return (
        <div className="auth-form-container">
            <h1 className="auth-form-title">Sign Up</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="auth-form-input-container">
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" className="form-control" {...register("email", { required: true })} />
                        {errors.email && <span className="error-message">This field is required</span>}
                    </div>

                    <div className="form-group">
                        <label htmlFor="username">Username</label>
                        <input type="text" className="form-control" {...register("username", { required: true })} />
                        {errors.username && <span className="error-message">This field is required</span>}
                    </div>

                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" className="form-control" {...register("password", { required: true })} />
                        {errors.password && <span className="error-message">This field is required</span>}
                    </div>

                    <div className="form-group">
                        <label htmlFor="password">Confirm Password</label>
                        <input type="password" className="form-control" {...register("confirmPassword", { required: true })} />
                        {errors.confirmPassword && <span className="error-message">This field is required</span>}
                    </div>

                    <div className="form-group">
                        <button type="submit" className="btn btn-primary">Sign Up</button>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default SignUp;