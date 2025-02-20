document.addEventListener('DOMContentLoaded', () => {
         const heading = document.querySelector('h1');
         heading.addEventListener('click', () => {
             alert('سلام! روی عنوان کلیک کردی!');
         });
     });