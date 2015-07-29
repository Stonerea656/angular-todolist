'use strict';	
	
var tasks = [
	{
		"id"		:	"1",
		"content"	:	"Résumé",
		"isDone"	:	true
	},
	{
		"id"		:	"2",
		"content"	:	"Learn Backbone",
		"isDone"	:	true
	},
	{
		"id"		:	"3",
		"content"	:	"Learn Angular",
		"isDone"	:	false
	},
	{
		"id"		:	"4",
		"content"	:	"Commit new app",
		"isDone"	:	false
	}
];	

app.service('taskProvider',function(){

		this.getTasks = function(){
			return tasks;
		}
		
		this.addTask = function(task){
			tasks.push(task);
			
			return tasks;
		}
		
		this.removeTasks = function(tasks){

			return tasks;
		}
		
		this.updateItem = function(item){
			items.$save(item);
		}
});



