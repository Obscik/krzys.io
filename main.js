// javascript to open modal1 on button click
var elems = document.querySelectorAll('.modal');
var instances = M.Modal.init(elems, { dismissible: true });
var instance = M.Modal.getInstance(elems[0]);
function kontakt() {
    instance.open();
}


function wydarzenia()
{
    document.getElementById('glowne').classList.add("hide")
    document.getElementById('wydarzenia').classList.remove("hide")
    document.getElementById('mail').classList.add("hide")
    document.getElementById('wroc').classList.remove("hide")
}

function inne()
{
    document.getElementById('glowne').classList.add("hide")
    document.getElementById('inne').classList.remove("hide")
    document.getElementById('mail').classList.add("hide")
    document.getElementById('wroc').classList.remove("hide")
}

function przyroda()
{
    document.getElementById('glowne').classList.add("hide")
    document.getElementById('przyroda').classList.remove("hide")
    document.getElementById('mail').classList.add("hide")
    document.getElementById('wroc').classList.remove("hide")

}



