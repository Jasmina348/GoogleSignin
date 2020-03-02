
function PostData(userData) {

    let BaseURL = 'http://192.168.0.110:4000/api/users';

    return new Promise((resolve, reject) => {

        console.log(JSON.stringify(userData));
        fetch(BaseURL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userData)
        })
            .then((response) => response.json())
            .then((res) => {
                resolve(res);
            })
            .catch((error) => {
                reject(error);
            });

    });
}
export default PostData;