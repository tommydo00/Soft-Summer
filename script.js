function reserve() {
    var output = document.getElementById("output");
    output.innerHTML = "";
    var name = document.getElementById("rname").value;
    name = name.trim();

    if (name.length == 0) {
        output.innerHTML = "Please enter a valid name for the reservation form!";
        return;
    }
    var date = document.getElementById("rdate").value;
    date = date.trim();
    if (date.length == 0) {
        output.innerHTML = "Please enter a valid date for the reservation form!";
        return;
    }
    var ticketType = "General";
    if (document.getElementById("rvip").checked) {
        ticketType = "VIP";
    }
    output.innerHTML = 'You have successfully reserved a ${ticketType} ticket on ${date} !`;
}

function purchase() {
    var output = document.getElementById("output");
    output.innerHTML = "";
    var name = document.getElementById("pname").value;
    name = name.trim();
    if (name.length == 0) {
        output.innerHTML = "Please enter a valid name for the purchase form!";
        return;
    }

    var date = document.getElementById("pdate").value;
    date = date.trim();
    if (date.length == 0) {
        output.innerHTML = "Please enter a valid date for the purchase form!";
        return;
    }

    var creditcard = document.getElementById("creditCard").value;
    creditcard = creditcard.trim();
    if (creditcard.length == 0) {
        output.innerHTML = "Please enter a valid credit card for the purchase form!";
        return;
    }

    var expire = document.getElementById("expiration").value;
    expire = expire.trim();
    if (expire.length == 0) {
        output.innerHTML = "Please enter a valid expiration date for the purchase form!";
        return;
    }


    var price = 150;
    var ticketType = "General";
    if (document.getElementById("pvip").checked) {
        ticketType = "VIP";
        price = 250;
    }
    output.innerHTML = `You have successfully purchased a ${ticketType} ticket on ${date} !
    Your total is $${price.toFixed(2)}.`;
}