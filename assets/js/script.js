// variables

const buttons = document.querySelectorAll('.button')
const displayTop = document.querySelector('.displayTop')
const displayBottom = document.querySelector('.displayBottom')
const buttonsEl = document.querySelector('#buttons')


// TITLE : event listner baraye har dokme dar safhe
// bad az click shodan dar safhe, agar makani ke click shode daraye class button bood, function calculate run mishe

buttonsEl.addEventListener('click', (e) => {
    if (e.target.classList.contains('button')) {
        calculate()
    }
})


// functions


// TITLE : function calulate
// be nesbate meqdare dokme click shode dar safhe, amaliat haye mashin hesabo namayesh mide

function calculate(button) {

}