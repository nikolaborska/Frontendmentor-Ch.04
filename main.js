
const accordionItems = document.querySelectorAll('.accordion-item');

accordionItems.forEach((item) => {
  const icon = item.querySelector('.icon');
  const content = item.querySelector('.accordion-content');
  const changeimg = item.querySelector(".accImg");

  icon.addEventListener('click', () => {
    content.classList.toggle('active')
  });

  let toggle = false; 

	changeimg.addEventListener('click', () => {
  		toggle = !toggle; 

  		if (toggle) {
    		changeimg.src = "./assets/images/icon-minus.svg";
  		} else {
    		changeimg.src = "./assets/images/icon-plus.svg";
  		}
	});
});















