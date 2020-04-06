import axios from 'axios';

export default axios.create({
    baseURL: 'https://react-quiz-efd6c.firebaseio.com/'
});