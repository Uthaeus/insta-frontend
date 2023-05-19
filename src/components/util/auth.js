


export const logoutHandler = () => {
    console.log('logout');
    let token = localStorage.getItem('insta-token');
    
    fetch('http://localhost:4000/users/sign_out', {
        method: 'DELETE',
        headers: {
            'Authorization': `Bearer ${token}`,
        }
    })
    .then(response => {
        if (response.ok) {
        }
    })
    .catch(error => console.log('sign out error: ', error));
};