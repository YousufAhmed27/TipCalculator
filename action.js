let btn = document.querySelector("button"),
    tip = document.querySelector(".tip"),
    total = document.querySelector(".total"),
    cus = document.querySelector(".choice .custom"),
    divin = document.querySelector(".choice input"),

    num = 0,
    people = 0,
    percent = 0


document.querySelector(".bill").onblur = function () {
    if (this.value.length > 0) {
        num = Number(this.value)
        this.classList.add("done")
        check()
    }
}

document.querySelector(".person").onblur = function () {
    this.classList.remove("done")
    this.classList.add("err")
    document.querySelector(".in .errors div").style.visibility = "visible"
    if (Number(this.value) > 0) {
        people = Number(this.value)
        this.classList.add("done")
        this.classList.remove("err")
        document.querySelector(".in .errors div").style.visibility = "hidden"
        check()
    }
}

document.querySelectorAll(".choice div").forEach(e => {
    e.addEventListener("click", function (x) {
        document.querySelectorAll(".choice div").forEach(e => e.classList.remove("active"))
        cus.style.visibility = "visible"
        cus.click()
        x.currentTarget.classList.add("active")
        percent = Number(x.currentTarget.dataset.per)
        check()
    })
})

divin.addEventListener("blur", function () {
    if (this.value.length > 0) {
        document.querySelectorAll(".choice div").forEach(e => e.classList.remove("active"))
        percent = Number(this.value)
        this.style.visibility = "hidden"
        cus.innerHTML = percent + "%"
        cus.style.visibility = "visible"
        check()
    }
})

cus.addEventListener("click", function () {
    divin.style.visibility = "visible"
    divin.value = ""
    this.style.visibility = "hidden"
})

btn.onclick = function () {
    num = people = percent = 0
    document.querySelectorAll(".choice div").forEach(e => e.classList.remove("active"))
    document.querySelector(".bill").value = ""
    document.querySelector(".bill").classList.remove("done")
    document.querySelector(".person").value = ""
    document.querySelector(".person").classList.remove("done")
    cus.style.visibility = "visible"
    cus.click()
    tip.innerHTML = "$0.00"
    total.innerHTML = "$0.00"
    this.classList.remove("done")
}

function check() {
    btn.classList.remove("done")
    if (num > 0 && people > 0 && percent > 0) {
        countTip(num, people, percent)
        countTotal(num, people, percent)
        btn.classList.add("done")
    }
}

function countTip(nu, peo, per) {
    let tipp = (nu * per) / (100 * peo)
    tip.innerHTML = `$${tipp.toFixed(2)}`
}
Number.toFixed
function countTotal(nu, peo, per) {
    let totall = (((nu * per) / 100) + nu) / peo
    total.innerHTML = `$${totall.toFixed(2)}`
}