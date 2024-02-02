import { API } from "../config/Api";
import Cookies from "js-cookie";

const FetchService = {
    getPosts: async () => {
        try {
            const token = Cookies.get('user')
            if (token) {
                const response = await API.get('posts', {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                });
                return response.data;
            }
        } catch (error) {
            console.error(error.message);
        }

        return [];
    },
    getPostDetails: async (id) => {
        try {
            const token = Cookies.get('user')
            if (token) {
                const response = await API.get('posts/' + id, {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                });
                return response.data;
            }
        } catch (error) {
            console.error(error.message);
        }

        return {};
    },
    deletePost: (id) => {
        return new Promise((resolve, reject) => {
            try {
                const token = Cookies.get('user')
                if (token) {
                    const response = API.delete('posts/' + id, {
                        headers: {
                            'Authorization': `Bearer ${token}`
                        }
                    });

                    resolve(response);
                }
            } catch (error) {
                console.error(error.message);
                reject(error);
            }

            reject();
        });
    },
    addPost: (title, author, content) => {
        return new Promise((resolve, reject) => {
            try {
                const token = Cookies.get('user')
                if (token) {
                    const authHeader = {
                        headers: {
                            'Authorization': `Bearer ${token}`
                        },
                    };
                    const data = {
                        title: title,
                        author: author,
                        content: content,
                    };

                    const response = API.post('posts', data, authHeader);

                    if (response) {
                        resolve(response);
                    }
                }
            } catch (error) {
                console.error(error.message);
                reject(error);
            }

            reject();
        });
    },
    authenticate: async (email, password) => {
        return new Promise((resolve, reject) => {
            try {
                const response = API.post('authenticate', {
                    email: email,
                    password: password
                });

                if (response) {
                    resolve(response);
                }
            } catch (error) {
                console.error(error.message);
                reject(error);
            }

            reject();
        });
    }
}

export default FetchService;