
const toUrlEncoded = obj => Object.keys(obj).map(k => encodeURIComponent(k) + '=' + encodeURIComponent(obj[k])).join('&')
function myFunction () {
    let name = document.getElementById("name").value 
    let amount = document.getElementById("amount").value
    fetch('/deposits', {
        method:"POST", 
        // names: name,
        // amt: amount,
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: toUrlEncoded({name: name, amount: amount})
    }).then(function(data) {
        console.log(data)
    })
}
