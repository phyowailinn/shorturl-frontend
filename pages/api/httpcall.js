import axios from 'axios';

// Global Http Request for every method 
export default async (...args) => {
    return new Promise((resolve, reject) => {
        axios(...args)
        .then((response) => {
            resolve(response.data);
        })
        .catch((error) => {
            reject(error)
        });
    });
}