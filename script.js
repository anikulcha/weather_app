// api.weahterstack.com/current?access_key=e126cf22729c9dac12af8afeef12e463
const link = 'http://api.weatherstack.com/current?access_key=bacd6314b108e58f252208915e4cf55e';

const store = {
    city: 'London',
}

const fetchData = async () => {
    const result = await fetch(`${link}&query=${store.city}`);
    const data = await result.json();

    console.log(data)
}

fetchData()