import { useForm } from "react-hook-form";

function EditUser({ user }) {
    const { register, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
            username: user.username || '',
            email: user.email || '',
            password: user.password || '',
            role: user.role || '',
        }
    });

    function onSubmit(data) {
        console.log(data);
        

        fetch(`http://localhost:4000/users/`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('insta-token')}`
            },
            body: JSON.stringify({user: data})
        })
    }

    console.log('edit user:', user);

  return (
    <div>
      <h1 className="mx-5">Edit User</h1>
        <form onSubmit={handleSubmit(onSubmit)} className="w-50 mt-5 offset-3">
            <div className="form-group mb-3">
                <label htmlFor="username">Username</label>
                <input type="text" className="form-control" {...register('username', { required: true})} />
                {errors?.username && <span className="text-danger">This field is required</span>}
            </div>

            <div className="form-group mb-3">
                <label htmlFor="email">Email</label>
                <input type='email' className="form-control" {...register('email', { required: true})} />
                {errors?.email && <span className="text-danger">This field is required</span>}
            </div>

            <div className="form-group mb-3">
                <label htmlFor="password">Password</label>
                <input type='password' className="form-control" {...register('password', { required: true})} />
                {errors?.password && <span className="text-danger">This field is required</span>}
            </div>

            <div className="form-group mb-3">
                <label htmlFor="password_confirmation">Password Confirmation</label>
                <input type='password' className="form-control" {...register('password_confirmation', { required: true})} />
                {errors?.password_confirmation && <span className="text-danger">This field is required</span>}
            </div>

            {user.role === 'site_admin' && (
                <div className="form-group mb-4">
                    <label htmlFor="role">Role</label>
                    <input type='text' className="form-control" {...register('role')} />
                </div>
            )}

            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    </div>
  )
}

export default EditUser;