'use strict';

/**
 * @ngdoc function
 * @name todoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the todoApp
 */
angular.module('todoApp')
    .controller('todoController', function(){
        this.taskCollection = ['groceries', 'programming', 'watch lotr'];

        // Adds task to the list
        this.addTask = function() {
            this.taskCollection.unshift(this.task);
        };

        // Clears input
        this.clearInput = function() {
            this.task = '';
        };

        // Remove task
        this.deleteTask = function(index) {
            this.taskCollection.splice(index, 1);
        };

        // Once form has been submitted, add a task + empty input + add done button
        this.newTaskSubmit = function() {
            this.addTask();
            this.clearInput();
        };
    });
