import logoImage from "../../assets/images/logo.png";

function PostMinForm({ expandForm }) {

    return (
        <div className="post-min-form-wrapper">
            <div className="min-form-click-element" onClick={expandForm}>
                {'<'}
            </div>
            <img src={logoImage} alt='logo-title' className="min-form-logo-element" />
        </div>
    );
}

export default PostMinForm;