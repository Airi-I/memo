'use strict';

{
  const text = document.getElementById('text');
  const save = document.getElementById('save');
  const message = document.getElementById('message');
  const clear = document.getElementById('clear');

  text.addEventListener('keyup',function(){
    if(text.value.length < 1){
      save.disabled = true;
      clear.disabled = true;
    }else{
      save.disabled = false;
      clear.disabled = false;
    }
  })

  if(localStorage.getItem('memo') === null){
    text.value=''; 
  }else{
    text.value = localStorage.getItem('memo');
  }
  
  save.addEventListener('click',() => {
    message.classList.add('appear');
    setTimeout(() => {
      message.classList.remove('appear');
    },1000);
    localStorage.setItem('memo',text.value);
  });
  
  clear.addEventListener('click',() => {
    if(confirm('本当に削除しますか？') === true){
      text.value='';
      localStorage.removeItem('memo');      
    }
  });

}
