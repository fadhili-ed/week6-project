function toTheServer(e,o){fetch("/deposit",{method:"POST",names:e,amt:o}).then(function(e){console.log(e)})}