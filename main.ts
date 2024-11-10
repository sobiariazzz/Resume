const hide = document.getElementById('toggle.skills') as HTMLButtonElement
const  showButton=document.getElementById('skills')as HTMLElement

hide.addEventListener('click',()=>{
    if(showButton.style.display === 'none' ) {
        showButton.style.display = 'block'
    } else{
        showButton.style.display = 'none'
    }
}
)

