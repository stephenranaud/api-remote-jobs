import fetch from 'node-fetch';



async function getJobs(url) {
    const response = await fetch('https://api.github.com/users/github');
    const data = await response.json();
    return data;
}

export default getJobs;