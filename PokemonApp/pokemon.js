//"use strict";

$("document").ready(function(){
  console.log("jquery is ready")

// var $statusText = $('span#status_text')
// var $enemyImage = $('img#enemy_img')
// var $enemyName = $('div#enemy p.name')
// var $enemyHealth = $('div#enemy p.health')
// var $currentHealth = parseInt($('p.health').eq(0).text())
// var $healthBar = $('p.health').eq(0)
// var $healButton = $('p#heal_btn')


// var $addEnem;






  // comment IN the .ready method for the document to access jquery
  // all we are doing is selecting elements from the DOM and changing them dynamically

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

var urHealthBar = $('p.health').eq(0)
var urHealthBarString = $(urHealthBar).text()
var urHealthBarInteger = parseInt(urHealthBarString)

var enemyDiv = $('img#enemy_img')
var enemyRandNumber = Math.floor(Math.random() * (pokemon.length - 0) + 0)

    // maybe try iterating inside the arrays that are inside the array pokemon with a for loop
var randomEnemyName = pokemon[enemyRandNumber][0]
var nameText = $('p.name').eq(1).text(randomEnemyName)
var randomEnemyPic = pokemon[enemyRandNumber][1]
var randomEnemyHealthBar = $('p.health').eq(1).text(pokemon[enemyRandNumber][2])
var statusText = $('span#status_text')
var attackButton = $('p#attack_btn')
var healButton = $('p#heal_btn')
var enemyHealthBarInteger = parseInt(randomEnemyHealthBar.text())



enemyDiv.attr("src", randomEnemyPic)








function attackEnemy() {
  var attackMissed = 0
  var attackBtn = $('p#attack_btn')
  var enemyHealthBarInteger = parseInt(randomEnemyHealthBar.text())


  attackBtn.click(function(){
    attackMissed = Math.round(Math.random() * (10 - 1) + 1)
    if(attackMissed === 5 && enemyHealthBarInteger > 0){

    statusText.text('ATTACK MISSED')




    setTimeout(enemyAttacks, 3000)



    } else if(enemyHealthBarInteger > 0){
    var randomEnemyPic = $('img#enemy_img')
    randomEnemyPic.fadeOut().fadeIn()
    // generate random number btwn 5 and 30 t0 dcrease enemyHealth by
    var enemyHealthDecrease = Math.floor(Math.random() * (30 - 5) + 5)
    enemyHealthBarInteger = enemyHealthBarInteger - enemyHealthDecrease

    randomEnemyHealthBar.text(enemyHealthBarInteger)
    console.log(typeof(enemyHealthBarInteger), " is data Type")
    statusText.text("Your attack was effective. You did " + enemyHealthDecrease + " damage.")
    setTimeout(enemyAttacks, 3000)







      if(enemyHealthBarInteger <= 0){



        statusText.text("YOU WIN!!! " + "You defeated " + randomEnemyName)
        removeButtons()




    }





    }



  })










}

attackEnemy()

function enemyAttacks () {
  var enemyHealthString = $('p.health').eq(1).text()
  var enemyHealthNumber = parseInt(enemyHealthString)
  var urHealthString = $('p.health').eq(0).text()
  var urHealthNumber = parseInt(urHealthString)



  if(urHealthNumber > 0 && enemyHealthNumber > 0) {
    console.log(urHealthNumber)
    console.log(enemyHealthNumber)
    var currentHealth = parseInt(urHealthBar.text())
    var enemyHealthString = $('p.health').eq(1).text()
    var enemyHealthAsInteger = parseInt(enemyHealthString)


    var randomAttackNumber = Math.floor(Math.random() * (30 - 5) + 5)
    var yourHealthDecreaseInteger = parseInt(randomAttackNumber)

    var pikachuImage = $('img#pikachu_img')
    pikachuImage.fadeOut().fadeIn()

    console.log(yourHealthDecreaseInteger, "your health decreased")

    statusText.text("Oh no! " + randomEnemyName + " attacked you. You lose " +
      yourHealthDecreaseInteger + " points")

    var yourHealthDecrease = currentHealth - randomAttackNumber

    urHealthBar.text(yourHealthDecrease)

    if(yourHealthDecrease <= 0){
      var healButton = $('p#heal_btn')
      var attackButton = $('p#attack_btn')
      healButton.remove()
      attackButton.remove()


      statusText.text("Pikachu fainted! GAMEOVER")


    }

    if(enemyHealthAsInteger <= 0){
      statusText.text("Your enemy fainted! YOU WIN!")
    }


    }
  }

function healUrPokemon () {
  var healButton = $('p#heal_btn');
  var healAmount = Math.floor(Math.random() * (5 - 5) + 5)
  youLose()

  healButton.click(function(){
    var currentHealth = urHealthBar.text()
    var currentHealthInteger = parseInt(currentHealth)

    var totalHealthAfterIncrease = currentHealthInteger + healAmount

    var pikachuImage = $('img#pikachu_img')
    pikachuImage.slideUp(1000).slideDown()

    urHealthBar.text(totalHealthAfterIncrease)

    setTimeout(enemyAttacks, 3000)

    // if(currentHealthInteger <= 0 || totalHealthAfterIncrease <= 0) {
    //   var attackButton = $('p#attack_btn')
    //   var healtButton = $('p#heal_btn')


    //   attackButton.remove()
    //   healButton.remove()
    //   alert("OH NO! Pikachu fainted. GAMEOVER")
    //   location.reload()
    // }




  })
}

healUrPokemon()

function youLose() {
  var currentHealthAsString = urHealthBar.text()
  var currentHealthAsInteger = parseInt(currentHealthAsString)
  console.log("YOULOSE logs current health at" + currentHealthAsInteger)

  if(currentHealthAsInteger <= 0){
    var attackButton = $('p#attack_btn')
    var healtButton = $('p#heal_btn')



    statusText.text("OH NO! Pikachu fainted! GAMEOVER")
    removeButtons()
    // location.reload()


  }



}



function reloadGame () {
  location.reload()
}

function removeButtons () {
  attackButton.remove()
  healButton.remove()
}




// randomEnemyGenerator() used to be a function that randomly generated the enemy but now instead
// randomly generator variables are attached to the global object to allow all functions of the game
// to have access to those variables








// function randomPokemon(){
//   var $randomPoke = pokemon[Math.round(Math.random() * pokemon.length)]
//   $enemyImage.attr('src', $randomPoke[1])
//   $enemyName.text($randomPoke[0])
//   $enemyHealth.text($randomPoke[2])

// }

// randomPokemon()

// function attackEnemy(){
//   var $attckButton = $('p#attack_btn')
//   $attckButton.on('click', function(){
//     $enemyHealth.text(parseInt())
//   })
// }































// -----------------------------------------------------------REDO BEGINS


//   function randPoke (){
//     var $randPokemon = pokemon[Math.round(Math.random()*pokemon.length)]
//     $($enemyImage).attr('src', $randPokemon[1])
//     $($statusText).text('A wild ' + $randPokemon[0] + ' appeared')
//     $($enemyName).text($randPokemon[0])
//     $($enemyHealth).text($randPokemon[2])


// attack($randPokemon)
// console.log($randPokemon)
// }

// randPoke()

// // attach event listener to attack button which will deplete the p.health number
// function attack($randPokemon) {
//   var $attackButton = $('p#attack_btn');
//   var $enemyHealthStatus = $randPokemon[2]
//   var $randomAttckNumber = Math.floor(Math.random() * (31 - 5) + 5)


//  function tenPercentMiss() {
//     var tenPercentMissed = Math.floor(Math.random() * (11 - 1) + 1)
//     console.log(tenPercentMissed)



//   }
//   tenPercentMiss()

// // Math.random will generate a random number between 1 and 10 and put it in a variable
// // if the random number generated is say 5 then it will console.log your attack missed!
// // and it will break out of the function...this means you will have to wrap your functions
// // code in an if statement..AND make a variable that logs the Math.random number
//   $($attackButton).on('click', function(tenPercentMissed){
//     var tenPercentMissed = Math.floor(Math.random() * (11 - 1) + 1)
//     console.log(tenPercentMissed)

//     if(tenPercentMissed !== 5){

//     $($enemyHealth).text($enemyHealthStatus+= - $randomAttckNumber)
//     $attackButton.hide('fast', function(){
//       // Enemy attack function goes here
//       youWereAttacked()
//       $attackButton.show()
//     })
//     $($statusText).text('Attack was successful!! Enemy health was lowered by ???!')

//     console.log($enemyHealthStatus)

//         gameOver($enemyHealthStatus)
//     } else {
//       console.log("Your attack Missed buddy this means the random number was 5")
//     }


//       })


//   }

//   function youWereAttacked() {
//     // status text will say you were attacked



//     var tenPercentMissed = Math.floor(Math.random() * (11 - 1) + 1)
//     var $randomAttckNumber = Math.floor(Math.random() * (31 - 5) + 5)
//     console.log(tenPercentMissed + 'youWereattacked number')

//     if(tenPercentMissed !== 5){

//     $($healthBar).text($currentHealth -= $randomAttckNumber)

//       if($currentHealth <= 0){
//         alert('You lose')
//         location.reload()
//       }

//     // p.health will decrease

//   }
//     console.log('you were attacked function')
//   }


// function gameOver($enemyHealthStatus){
//   if($enemyHealthStatus <= 0) {
//         alert("GAME OVER YOU WINs")
//         location.reload()
//       }


// }





// function healPokemon(){

//   // get $healthBar to return a number NOT an object like it is doing right now

//   var healed = Math.floor(Math.random() * (50 - 25) + 25)


//   $healButton.on('click', function(){
//     $healthBar.text($currentHealth += healed)
//     $healButton.hide('fast', function(){


//       $healButton.show()
//     })

//   })
// }

// healPokemon()

// -----------------------------------------------------------REDO ENDS


// for(i=0;i<pokemon.length;i++){
//    // console.log(pokemon[i])
//       for(j=0;j<[i].length;j++)
//       console.log(pokemon[i][j])
//   }
// console.log(Math.round(Math.random()*pokemon.length))

// This for loop console.logs(array in array index [1] REMEMBER ARRAYS ARE 0 based in JS)

// Grabbing reference to the enemy IMAGE...Now add an image to it from the ARRAY...Then randomize
// the image selection process



// function addEnemyImage() {

// for(i=0;i<pokemon.length;i++){
//    // console.log(pokemon[i])
//       for(j=0;j<pokemon[i].length;j++) {
//        // console.log(pokemon[i][j])


//           }
//           if(j=1){
//             // maybe my Math.random function will go here
//         // $addEnem = pokemon[i][j] this will always give me back the image in the last array in the array which is ghastly b/c of dynamic typing
//         $addEnem = pokemon[Math.round(Math.random()*pokemon.length)][j]
//         $($statusText).text('a wild' + $addEnem.slice(3, 6))

//         console.log($addEnem + "oh snap")
//         $enemyImage.attr('src', $addEnem)




//           if(j=1){
//             break
//           }
//        // console.log(j)
//           }
//       }
// // displayEnemyText($addEnem)

//   }


// setTimeout(addEnemyImage, 1000)

// function displayEnemyText (a){
//   for(i=0;i<pokemon.length;i++){

//     $($statusText).text('a wild' +'appeared')
//     $addEnem.
//   }

// }

/* global variables that can be called in any functions*/

// var $enemyimg = $("#enemy_img");
// var $enemyname = $("#enemy .name");
// var $enemyhealth = $("#enemy .health");
// var $textbox = $("#status_text");

// var chooseEnemy = function() {

// var pokemonIndex = Math.floor(Math.random()*(pokemon.length);
// var selectEnemy = pokemon[pokemonIndex]
// var pickName = selectEnemy[0]
// var pickImage = selectEnemy[1]
// var pickEnemHealth = selectEnemy[2]



// $enemyname.text(pickName" ");
// $($enemyimg).attr('src', battleEnemy[1]);
// $($enemyhealth).text("Health: " + battleEnemy[2]);
// $($textbox).text("A wild " + battleEnemy[0] + " appeared!");
// return battleEnemy;

// };

// var enemy = chooseEnemy ();
// console.log(enemy);

//document.getElementById('enemy_img').innerHTML = pokemon[chooseEnemy];




/*$($'pokemon').each( function (index)) {

var enemyPic = $($chooseEnemy).val()

 $("#enemy_img").val(enemyPic);
});*/

// $("#attack_btn").click(function() {
//   $(this).hide();})it hides forever but you have to make it hide for 3 seconds then reappear

// $("#enemy_img").click(function() {
//   var enemyPic = $(this).val("chooseEnemy");
// })








/*if(pokemon === [0]) {
  alert("Wild Voltorb appeared!");
}*/

/*$("#attack_btn").click(function(event) {
   alert("Your Attack was super effective!");
   });

$("#heal_btn").click(function(event) {
  alert("Purple Drink heals Pikachu...'PIKACHU!!!'");
});*/

      /*if === true) {
      console.log("this is clicked yes")*/






/*var enemyDetails = arr.push(enemyRandNumber); //pushed chooseenemy number into an array
var enemyName = enemyDetails[0];
var enemyLook = enemyDetails[1];
var enemyHealth = enemyDetails[2];
console.log(enemyDetails)

var $enemy = $('<div class="enemyPoke">+enemyName+'</div>'')


};*/

/*You can attack or heal by clicking the buttons.

/*$("#attack_btn").click(function(event) {
   console.log("clicked: " +event.target);
   });

      if("#attack_btn.click" === true) {
      console.log("this is clicked yes")*/




// END END END END
});

