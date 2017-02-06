'use strict';

homeApp.service("homeService", function(){
               var comments = [{
                    author: "Admin",
                    topic: "Introduction",
                    message: "Great Angular chat",
                    date:"2015-08-13T17:57:28.556094Z"
                }];
                
                this.submitComment = function(comment){
                    var date = new Date().toISOString();
                    comment.date = date
                    comments.unshift(comment);
                    comment = {
                    author: "",
                    topic: "",
                    message: "",
                    date: ""
                    };
                };
                
                this.getComments = function(){
                    return comments;
                };
                this.getComment = function(index){
                    return comments[index];
                };
    
                this.removeComment = function(index){
                    comments.splice(index, 1);
                }
                
                
                
                });