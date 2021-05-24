var nameFld = document.querySelector(".enter-name-field");
var counter_div = document.querySelector(".counter_div");
var greetbtn = document.querySelector(".greetBtn");
var output_div = document.querySelector(".output_div");
var clearBtn = document.querySelector(".resetBtn")
var lstBtn = document.querySelector(".listBtn")


var namesGreeted;



if (localStorage["names"]) {
    namesGreeted = JSON.parse(localStorage["names"])

}
var _grt = grt(namesGreeted);


counter_div.innerHTML = _grt.getGreetCtr()

greetbtn.addEventListener("click", function () {



    var rdioVal = document.querySelector(".rdio:checked");
    if (!_grt.antiDigit(nameFld.value)) {


        if (nameFld.value === "") {
            output_div.innerHTML = "Please enter your name in the textbox field."
        } else {
            _grt.setNames(nameFld.value)
            output_div.innerHTML = _grt.action(rdioVal.value, nameFld.value)

        }
    } else {
        output_div.innerHTML = "Please enter your name in the text field."
    }

    localStorage.setItem("names", JSON.stringify(_grt.greeted()));

    counter_div.innerHTML = _grt.getGreetCtr()
})

clearBtn.addEventListener("click", function () {


    localStorage.clear()


    location.reload()
})

lstBtn.addEventListener("click", function () {
    output_div.innerHTML = _grt.showAllGreets();
})





