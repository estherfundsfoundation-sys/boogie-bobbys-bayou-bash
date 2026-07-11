document.getElementById('year').textContent=new Date().getFullYear();
const dialog=document.getElementById('lightbox');
document.querySelectorAll('[data-full]').forEach(card=>card.addEventListener('click',()=>{dialog.querySelector('img').src=card.dataset.full;dialog.querySelector('img').alt=card.querySelector('img').alt;dialog.querySelector('p').textContent=card.querySelector('span').textContent;dialog.showModal()}));
dialog.querySelector('.close').addEventListener('click',()=>dialog.close());
dialog.addEventListener('click',e=>{if(e.target===dialog)dialog.close()});
