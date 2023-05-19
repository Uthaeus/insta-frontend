import { useForm } from "react-hook-form";
import { useContext } from "react";
import { useNavigate } from "react-router";

import { UserContext } from "../../store/user-context";

function SignIn() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const userCtx = useContext(UserContext);
    const navigate = useNavigate();

    const onSubmit = data => {

        fetch('http://localhost:4000/users/sign_in', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ user: data })
        })
        .then(response => {
            if (response.ok) {
                let token = response.headers.get('Authorization').split(' ')[1];
                localStorage.setItem('insta-token', token);
                return response.json();
            }
        })
        .then(data => {
            userCtx.login(data.status.data);
            navigate('/');
        })
        .catch(error => console.log('sign in error: ', error));
    }

    return (
        <div className="auth-form-container">
            <h1 className="auth-form-title">Sign In</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="auth-form-input-container">
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" className="form-control" {...register("email", { required: true })} />
                        {errors.email && <span className="error-message">This field is required</span>}
                    </div>

                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" className="form-control" {...register("password", { required: true })} />
                        {errors.password && <span className="error-message">This field is required</span>}
                    </div>

                    <div className="form-group">
                        <button type="submit" className="btn btn-primary">Sign In</button>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default SignIn;