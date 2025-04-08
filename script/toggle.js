function inputValue(id){
    const value = document.getElementById(id).innerText ;
    const convertValue = parseFloat(value);
    return convertValue;
}

function setInnerText(id,value){
    document.getElementById(id).innerText = value ; 
}

// update time
// function updateTime() {
//     const date = new Date();
//     return date.toLocaleTimeString('en-US', { 
//         hour: '2-digit', 
//         minute: '2-digit', 
//         second: '2-digit', 
//         hour12: true 
//     });

// }