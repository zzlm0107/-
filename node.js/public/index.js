let box = document.querySelector('.box')
box.addEventListener('mouseover',function () {
  this.style.backgroundColor = 'pink';
})
box.addEventListener('mouseout',function () {
  this.style.backgroundColor = 'skyblue';
})