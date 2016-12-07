"use strict";
(function(){
  var shuffle = function(array) {
    var m = array.length, t, i;
    while (m) {
      i = Math.floor(Math.random() * m--);
      t = array[m];
      array[m] = array[i];
      array[i] = t;
    }
    return array;
  }
  angular
  .module("questions", [])
  .controller("questionsController", function(){
    this.items = Object.keys(questions)
    this.currentQuestion = "Test your coding knowledge."
    this.update = function(){
      this.questions = []
      for( var item in this.selected ){
	if(this.selected[item]){
	  this.questions.push(...questions[item])
	}
      }
      this.questions = shuffle(this.questions)
      this.currentQuestion = this.questions[0]
      this.currentQuestionIndex = 0
    }
    this.next = function(e){
      if(!this.questions.length) return
      if(e.keyCode === 37){
	this.currentQuestionIndex--
	if(this.currentQuestionIndex == -1) this.currentQuestionIndex = this.questions.length - 1;
	this.currentQuestion = this.questions[this.currentQuestionIndex]
      } else {
	this.currentQuestionIndex++
	if(this.currentQuestionIndex == this.questions.length) this.currentQuestionIndex = 0;
	this.currentQuestion = this.questions[this.currentQuestionIndex]
      }
    }
    this.toggleLight = function(){
      document.body.classList.toggle("dark")
    }
  })
})()
