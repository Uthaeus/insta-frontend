import { useEffect, useContext } from "react";
import { useNavigate } from "react-router";
import { useForm } from "react-hook-form";

import { UserContext } from "../../store/user-context";

function PostForm({ post }) {
    const userCtx = useContext(UserContext);
    const navigate = useNavigate();
    const { register, handleSubmit, reset } = useForm();

    useEffect(() => {
        if (post) {
            reset(post);
        }
    }, [post, reset]);

    function buildForm(data) {
        let formData = new FormData();

        formData.append("post[content]", data.content);
        formData.append("post[image]", data.image[0]);
        formData.append("post[user_id]", userCtx.user.id);

        return formData;
    }

    function submitHandler(data) {
        let token = localStorage.getItem("insta-token");
        const method = post ? "PUT" : "POST";
        const url = post ? `http://localhost:4000/posts/${post.id}` : "http://localhost:4000/posts";

        fetch(url, {
            method,
            headers: {
                Authorization: `Bearer ${token}`
            },
            body: JSON.stringify(buildForm(data))
        })
        .then(response => response.json())
        .then(data => {
            console.log("data: ", data);
            navigate("/posts");
        })
        .catch(error => console.log("error: ", error));
    }

    return (
        <div>
            <form onSubmit={handleSubmit(submitHandler)}>
                <div className="form-group">
                    <label htmlFor="content">Content</label>
                    <textarea className="form-control" {...register("content", {required: true})} />
                </div>

                <div className="form-group">
                    <label htmlFor="image">Image</label>
                    <input type="file" className="form-control" {...register("image", {required: true})} />
                </div>

                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    );
}

export default PostForm;
