import { useForm } from "react-hook-form";

function PostCommentForm({ user_id, post_id }) {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();

    function submitHandler(data) {
        console.log('post comment data:', data);

        let token = localStorage.getItem('insta-token');
        let dataToSend = {
            comment: {
                content: data.content,
                user_id: user_id,
                post_id: post_id
            }
        };

        fetch('http://localhost:4000/comments', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body:JSON.stringify(dataToSend)
        })
        .then(response => {
            if (response.ok) {
                console.log('post comment response: ', response);
                reset();
                return response.json();
            }
        })
        .then(data => console.log('post comment data: ', data))
        .catch(error => console.log('post comment error: ', error));
    }

    return (
        <form onSubmit={handleSubmit(submitHandler)}>
            <div className="form-group mb-1">
                <label htmlFor="content">Content</label>
                <textarea className="form-control" {...register("content", { required: true })} />
                {errors.content && <span>This field is required</span>}
            </div>

            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    );
}

export default PostCommentForm;