function updateCountdown() {
    var countdown = document.getElementById("countdown").innerHTML;
    
    countdown--;
    
    document.getElementById("countdown").innerHTML = countdown;
    
    if (countdown === 0) {
        document.getElementById("countdown").innerHTML = "Happy Independence Day";
    } else {
        setTimeout(updateCountdown, 1000);
    }
}

document.getElementById("countdown").innerHTML = 11;
updateCountdown();