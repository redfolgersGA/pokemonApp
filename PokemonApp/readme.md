# Pokemon jQuery Battle Game!

![PIKA](http://49.media.tumblr.com/f151c12a0af53d864ebb413101f64e32/tumblr_nqm3q02d0y1tros9go1_500.gif)

### Instructions

- the format of the arrays is: ['name','image path',health]

```javascript
	var pokemon = [
		['Voltorb','images/voltorb.png',100],
		['Charizard','images/charizard.png',200],
		['Gyarados','images/gyarados.png',125],
		['Mew','images/mew.png',75],
		['Geodude','images/geodude.png',90],
		['Snorlax','images/snorlax.png',110],
		['Kabutops','images/kabutops.png',95],
		['Eevee','images/eevee.png',60],
		['Beedrill','images/beedrill.png',70],
		['Magikarp','images/magikarp.gif',40],
		['Gastly','images/gastly.png',50]
	];
```

### Game Rules/Workflow:

-You have 100 health.

-Enemy is picked ranomly at the start.

-You can attack or heal by clicking the buttons.

-When you attack, there is a 10% chance to miss.

-If you attack successfully, you will do between 5-30 damage.

-When the enemy attacks, there is a 10% chance to miss.

-If they attack successfully, you will take between 5-30 damage.

-If you heal, you are healed for 25-50 health points.

-After your heal or attack, it waits 3 seconds, then the enemey will auto attack. **During this time the buttons should be hidden.**

-If at any time you health drops to 0 or below, display a game over message. **Buttons should not reappear.**

-If at any time the enemy heath drops to 0, display a you win message.

-You do not have to have the game restart automatically.


### Example Videos:

-There are two example videos in the folder. Pay careful attenton to the text being displayed and what elements are changing.


### Getting Started:

-You won't need to edit the pokemon.html file. You will need to look at it to get IDs and class names of elements.

-You won't need to edit the pokemon.css file.

-Use the pokemon.js file provided to get started.

### Bonus:

-Add animations to the game. Start by making the pokemon wiggle left and right when damaged and tip over when defeated! Like so: http://gfycat.com/InsignificantExaltedBlowfish

-Explore adding a 'damage multiplier' to the Pokemon objects. Use this to have stronger/weaker pokemon do more/less damage.
