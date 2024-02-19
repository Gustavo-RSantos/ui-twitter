export const textarea = document.querySelector('#tweet').scrollHeight

    textarea.addEventListener('keyup', e =>{
    textarea.style.height = "auto"
    let scHeight = e.target.scrollHeight;
    textarea.style.height = `${scHeight}px`
  })
