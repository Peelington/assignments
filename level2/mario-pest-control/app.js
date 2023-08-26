const form = document.bill
const invoice = document.getElementById("invoice")
console.log(form)

form.addEventListener('submit', (e) => {
    e.preventDefault()
    
    const gomba = form.goombas.value;
    const bob = form.bobombs.value;
    const cheep = form.cheepcheep.value;

        console.log('test')
    let gTotal = gomba * 5;
    let bTotal = bob * 7;
    let cTotal = cheep * 11;
    let total = gTotal + bTotal + cTotal
   
   invoice.textContent = (`Billing invoice: \r Gombas: ${gomba}\rBob-ombs: ${bob}\rCheep-Cheeps: ${cheep}\rTotal: ${total} coins`)
    // console.log('g',gomba,'b', bob,'c', cheep,'total', total)
    
});