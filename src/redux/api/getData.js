export default async function getData() {
    const response = await fetch("https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/browsequotes/v1.0/RU/RUB/en-US/SVO-sky/JFK-sky/2021-09", {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "skyscanner-skyscanner-flight-search-v1.p.rapidapi.com",
            "x-rapidapi-key": "9cf6d41dacmshf5a9bc044938410p187eeejsnf987e5e76fc1"
        }
    })
    const data = await response.json()
    return data
}