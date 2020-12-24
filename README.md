# UPOR JS
###### UPOR is a word in ***Bengali Language*** which means Up. 
###### UPOR Js is a tiny Vanilla Javascript library. ***[100% Browser Support]***
###### Using it you can create a ***Back To Top Button*** very EASILY with a few lines of code.
***
###### Demo https://chiranjit2020.github.io/upor-js/
***
### HTML
```html
<button id="upor">Upor Jao</button>
```
### CSS
```css
button#upor{
    /*Must add these style*/
    position: fixed;
    bottom: 2%;
    right: 2%;
    opacity: 0;
    visibility: hidden;
    z-index: 9999;
}
```
### JAVASCRIPT
```
<!-- UPOR JS  -->
<script src="upor.js"></script>

<!-- Call The function -->
<script>
	const button = document.querySelector("#upor");
	// UPOR(Element, Speed, Offset)
	UPOR(button,500,100);
</script>
```