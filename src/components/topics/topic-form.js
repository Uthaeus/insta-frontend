import { useForm } from "react-hook-form";
import { useContext } from "react";

import { UserContext } from "../../store/user-context";

function TopicForm({ topicSubmitHandler }) {
    const { register, handleSubmit, reset } = useForm();
    const { user } = useContext(UserContext);

    function onSubmit(data) {
        console.log(data);

        let dataToSend = {
            topic: {
                title: data.title,
                user_id: user.id
            }
        };

        let token = localStorage.getItem("insta-token");
        fetch('http://localhost:4000/topics', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify(dataToSend)
        })
        .then(response => {
            if (response.ok) {
                
                return response.json();
            }
        })
        .then(data => {
            console.log('topic form data: ', data);
            topicSubmitHandler(data);
            reset();
        })
        .catch(error => console.log('topic form error: ', error));
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="topic-form">
            <label className="topic-form-title" htmlFor="title">Title</label>
            <input type='text' className="topic-form-input" {...register('title', {required: true})} />

            <button type='submit' className="topic-form-btn">Submit</button>
        </form>
    );
}

export default TopicForm;