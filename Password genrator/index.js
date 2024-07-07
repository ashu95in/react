//password genrator function

let res;
let slider = document.querySelector("#Range")
let copystatus = document.querySelector('copyOR')
let length = 6


//password lenthg
slider.addEventListener('input', () => {
    length = passwordLength()
    refresh()
})


function password_genrator() {
    let password = ""
    let charcterSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*+"
    for (let i = 0; i < length; i++) {
        let random_index = Math.round(Math.random() * (70 - 0) + 0);
        password += charcterSet[random_index]
    }
    return password
}

function refresh() {
    let input_box = document.querySelector('.showPassword_box')
    res = password_genrator()
    input_box.innerText = res;
}

function copyToClipborad() {
    navigator.clipboard.writeText(res);
    console.log("copy password is", Clipboard.length)
}

function passwordLength() {
    let rangebox = document.querySelector('#rangevalue')
    let range = document.querySelector('#Range')
    rangebox.innerText = range.value
    return range.value
}


