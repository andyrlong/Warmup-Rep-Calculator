function getWeight() {
    document.getElementById("one").innerHTML = Math.round(document.getElementById("weight").value * 0.5 / 5) * 5;
    document.getElementById("two").innerHTML =  Math.round(document.getElementById("weight").value * 0.6 / 5) * 5;
    document.getElementById("three").innerHTML =  Math.round(document.getElementById("weight").value * 0.7 / 5) * 5;
    document.getElementById("four").innerHTML =  Math.round(document.getElementById("weight").value * 0.8 / 5) * 5;
    document.getElementById("five").innerHTML =  Math.round(document.getElementById("weight").value * 0.9 / 5) * 5;

}
