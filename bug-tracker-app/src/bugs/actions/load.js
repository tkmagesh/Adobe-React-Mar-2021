import axios from 'axios';

export default function loadBugs(){
  axios
    .get('http://localhost:3030/bugs')
    .then(response => {
        return response.data;
    })
    .then(bugs => {
        console.table(bugs);
    })
}