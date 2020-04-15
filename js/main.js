function toTheServer (name, amount) {
    fetch("/deposit", {
        method:"POST", 
        names: name,
        amt: amount 
    }).then(function(data) {
        console.log(data)
    })
}