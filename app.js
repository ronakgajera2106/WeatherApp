var button = document.querySelector('.button')
var inputValue = document.querySelector('.inputValue')
var name = document.querySelector('.name')
var desc = document.querySelector('.desc')
var temp = document.querySelector('.temp')



// button,addEventListener('click',function(){
//     const data = axios.post('https://api.m3o.com/v1/weather/Forecast',{location : 'india'},{headers : {Authorization: "Bearer ODJhZjdhYzItNjVjZS00YWFlLTllNTEtODY5YTkyYzRiZTlm"}})
//     console.log(data)

// })



async function callData(serchTerm) {
    try {

        var data = await axios.post('https://api.m3o.com/v1/weather/Forecast', { location: serchTerm }, { headers: { Authorization: "Bearer ODJhZjdhYzItNjVjZS00YWFlLTllNTEtODY5YTkyYzRiZTlm" } })
        console.log(data)
        document.querySelector('.name').innerHTML = data.data.country
        document.querySelector('.desc').innerHTML = data.data.local_time
        document.querySelector('.temp').innerHTML = data.data.forecast[0].avg_temp_c
    }
    catch (error) {
        console.log(error)

    }

}

const showValue = () => {

    let serchTerm = document.getElementById('demo').value
    callData(serchTerm)


}

