// set initial Value
let count = 0

//select value and buttons
const btn = document.querySelectorAll('.btn') //returns a node list -- for each is used
const value = document.querySelector('#value')

console.log(btn);

btn.forEach(function(items){ //Print each item in a node list
    // console.log(items);
    items.addEventListener('click',(e)=>{ //e = event object -- returns which button is being clicked
        const styles = e.currentTarget.classList //Gives class list of current selected button
        if(styles.contains("increase")){
            count++
            // value.textContent = count
        }
        else if(styles.contains("reset")){
            count = 0
            // value.textContent = count
        }
        else{
            count--
            // value.textContent = count
        }
        
        if(count>0){
            value.style.color = 'green'
        }
        if(count<0){
            value.style.color = 'red'
        }
        if(count === 0){
            value.style.color = 'black';
        }
        value.textContent = count
        
    })
})



