function getOldResult() {
    return document.getElementById("input").innerText;
}

function setOldResult(number) {
    document.getElementById("input").innerText = number;
}

function getResult() {
    return document.getElementById("output").innerText;
}

function setResult(number) {
    document.getElementById("output").innerText = number;
}

var system = document.getElementsByClassName("system");
var check = false;

for (const item of system) {
    item.addEventListener("click", () => {
        if (item.value === "AC") {
            setResult(0);
            setOldResult("");
        } else if (item.value === "C") {
            if (getOldResult() !== "") {
                let t = getOldResult();
                setOldResult(t.substring(0, t.length - 1));
            }
        } else if (item.value === "=") {
            let k;
            try {
                k = eval(getOldResult());
            } catch (error) {
                k = "Error";
            }
            setResult(k);
            check = true;
        }
    });
}

const inpNumber = document.getElementsByClassName("number");
const calButtons = document.getElementsByClassName("cal");

function addInput(value) {
    if (check && !["-", "+", "/", "*"].includes(value)) {
        setOldResult("");
        check = false;
    }
    var result = getOldResult();
    result += value;
    setOldResult(chuan_hoa(result));
}

for (const value of inpNumber) {
    value.addEventListener("click", () => {
        addInput(value.value);
    });
}

for (const value of calButtons) {
    value.addEventListener("click", () => {
        addInput(value.value);
    });
}

function chuan_hoa(text) {
    return text.replace("++", "+").replace("--", "-").replace("**", "*").replace("//", "/");
}
