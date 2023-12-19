(function(c, w, d){
	const navigationBtn = d.querySelector('#openMenuMobile'),
		navigation = d.querySelector('#navigation'),
		closeMenuMb = d.querySelector('#closeMenuMb'),
		overlay = d.createElement('DIV');

	overlay.classList.add('overlay')

	navigationBtn.addEventListener('click', function(e){
		e.preventDefault()
		c("Hola clickkk")
		
		d.querySelector('body').appendChild(overlay);
		navigation.classList.toggle("style-menuMb");
	})
	overlay.addEventListener('click', function(){
		navigation.classList.toggle("style-menuMb");
		overlay.remove()
	})
	closeMenuMb.addEventListener('click', function(e){
		e.preventDefault()

		navigation.classList.toggle("style-menuMb");
		overlay.remove()
	})
})(console.log, window, document)