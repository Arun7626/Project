// let key = "6457ee91708d4195a71ff4890d8ea638"
// let api = "https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}"


let form = document.querySelector("form")
form.addEventListener("submit",(e)=>{
    e.preventDefault()
    let fetchData=async()=>{
        let key = "6457ee91708d4195a71ff4890d8ea638"
        let place = document.querySelector("#inputOne").value
        let data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${place}&appid=${key}`)
        let finalOutput=await data.json()
        // console.log(finalOutput)
        let tempValue=document.querySelector("#temparature")
        let humidValue=document.querySelector("#humidity")
        let finalTemp=Math.round((finalOutput.main.temp)-273)
        let finalHumid=Math.round(finalOutput.main.humidity)
        tempValue.innerHTML=`${finalTemp}<sup>o</sup>C`
        humidValue.innerHTML=`${finalHumid} KMPH`
        // weatherCondition.innerHTML=`${finalCondition}`
    }
    fetchData();
})