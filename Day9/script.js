const main=document.querySelector('.main')
const available=document.querySelector
(".available")
const booked=document.querySelector
(".booked")
let avs=100
let bs=0

for(let i=0;i<100;i++){
    const items=document.createElement("div")
    items.classList.add("items")
    items.addEventListener('click',()=>{
        if(items.classList.contains("occupied"))
        {

            avs+=1
            bs-=1
            available.innerHTML=avs
            booked.innerHTML=bs
            console.log(avs,bs)
            items.classList.remove("occupied")
        }
        else{
            items.classList.add("occupied")

            avs-=1
            bs+=1
            available.innerHTML=avs
            booked.innerHTML=bs
            console.log(avs,bs)

        }
    })
    
    main.appendChild(items)
}