'use strict';

const enter=document.querySelector('.enter')
enter.addEventListener('click',function(){

  const day=document.querySelector('#days')

  const hour=document.querySelector('#hours')

  const half=document.querySelector('#halves')

  const content=document.querySelector('.task')

  const main=document.querySelector('main')

 const div=document.createElement('div');
 div.classList.add('item')

main.appendChild(div)

const dayGet=document.createElement('div')

div.appendChild(dayGet)

const hourGet=document.createElement('div')

div.appendChild(hourGet)

const contentGet=document.createElement('div');

div.appendChild(contentGet)

  const confirm=document.createElement('button');

div.appendChild(confirm)

  confirm.classList.add('confirm')

  const deleted=document.createElement('button');

  div.appendChild(deleted)

  deleted.classList.add('deleted')

  deleted.textContent='X'

  confirm.textContent='✓'

 dayGet.textContent=day.value
 dayGet.classList.add('dayGet')
 dayGet.style.width='100px'

hourGet.textContent=hour.value + ' '+half.value
 hourGet.style.width='70px'
contentGet.textContent=content.value

contentGet.style.fontSize='1rem'

deleted.addEventListener('click',function(){
  div.style.display='none'
})
confirm.addEventListener('click',function(){
  const divstyles=window.getComputedStyle(div)

  const opacity=divstyles.getPropertyValue('opacity')

div.style.opacity='0.5'

if(opacity=='0.5')div.style.opacity='1'

  
})


})


