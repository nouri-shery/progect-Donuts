
var span = document.querySelectorAll(".span");
var plus = document.querySelectorAll(".plus");
var minus = document.querySelectorAll(".minus");
for (let i = 0; i < plus.length; i++) {
    plus[i].addEventListener('click', () => {
        var value = parseInt(span[i].textContent)
        value++
        console.log(value);
        span[i].textContent = value
    })
}

for (let i = 0; i < minus.length; i++) {
    minus[i].addEventListener('click', () => {
        var value = parseInt(span[i].textContent)
        if(value>0)
        value--
        span[i].textContent = value
    })
}