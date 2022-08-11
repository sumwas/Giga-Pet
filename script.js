$(function() { // Makes sure that your function is called once all the DOM elements of the page are ready to be used. 
    
    // Called function to update the name, happiness, and weight of our pet in our HTML
    checkAndUpdatePetInfoInHtml();
  
    // When each button is clicked, it will "call" function for that button (functions are below)
    $('.treat-button').click(clickedTreatButton);
    $('.play-button').click(clickedPlayButton);
    $('.exercise-button').click(clickedExerciseButton);
    $('.study-button').click(clickedStudyButton);
  

  
    
  })
  
    // Add a variable "pet_info" equal to a object with the name (string), weight (number), and happiness (number) of your pet
    //comment displays the pets message 
    var pet_info = {name:"Pascal", weight:5.0, happiness:1, intelligence:0, comment:"Hi!"};
  
    function clickedTreatButton() {
      // Increase pet happiness
      pet_info['happiness']++;
      // Increase pet weight
      pet_info['weight']+=.5;
      
      checkAndUpdatePetInfoInHtml();
    }
    
    function clickedPlayButton() {
      // Increase pet happiness
      pet_info['happiness']++;
      // Decrease pet weight
      pet_info['weight']-=.5;
      // Decrease pet intelligence 
      pet_info['intelligence']--;
      checkAndUpdatePetInfoInHtml();
    }
    
    function clickedExerciseButton() {
      // Decrease pet happiness
      pet_info['happiness']--;
      // Decrease pet weight
      pet_info['weight']-=.5;
      checkAndUpdatePetInfoInHtml();
    }

    function clickedStudyButton() {
      // Increase pet intelligence 
      pet_info['intelligence']++;
      checkAndUpdatePetInfoInHtml();
    }
  
    function checkAndUpdatePetInfoInHtml() {
      checkWeightAndHappinessBeforeUpdating();  
      updatePetInfoInHtml();
    }
    
    function checkWeightAndHappinessBeforeUpdating() {
      // Add conditional so if weight is lower than zero, set it back to zero
      if (pet_info['weight'] < .5){
        pet_info['weight'] = .5;
      }
      //weight max 50
      if (pet_info['weight'] >= 50){
        pet_info['weight'] = 50;
      }
      //happiness cant go lower than 0
      if (pet_info['happiness'] < 0){
        pet_info['happiness'] = 0;
      }
      //happiness max 60
      if (pet_info['happiness'] >= 60){
        pet_info['happiness'] = 60;
      }
      //intelligence cant go lower than 0
      if (pet_info['intelligence'] < 0){
        pet_info['intelligence'] = 0;
      }
    }
    
    // Updates your HTML with the current values in your pet_info object
    function updatePetInfoInHtml() {
      $('.name').text(pet_info['name']);
      $('.weight').text(pet_info['weight']);
      $('.happiness').text(pet_info['happiness']);
      $('.intelligence').text(pet_info['intelligence']);
      $('.comment').text(pet_info['comment']);
    }
  