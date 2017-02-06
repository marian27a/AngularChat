homeApp.controller("homeCtrl", ["$scope", "homeService", function ($scope, homeService){
              
    this.comments = homeService.getComments();
   // this.comment = homeService.getComment()
    this.removeComment = homeService.removeComment;
    //var comments = this.comments;
    $scope.comments = homeService.getComments();
    
    $scope.comment = {
                    author: "Гість",
                    topic: "",
                    message: "",
                    date: ""
                };
    
    $scope.changeComment = function(index){
        var comments = homeService.getComments();
        $scope.currentComment = {};
        for(var i in comments[index]){
            console.log(comments[index]);
            $scope.currentComment[""+i] = comments[index][""+i];
        }
        $scope.currentIndex = index;
    };
    
    $scope.SaveChanges = function(){
        $scope.comments[$scope.currentIndex] = $scope.currentComment;
    }
        
    
    
    this.submitComment = function(){
        homeService.submitComment($scope.comment);
        $scope.commentForm.$setPristine();
        $scope.comment = {
                    author: "",
                    topic: "",
                    message: "",
                    date: ""
                };
        };
    
    
    }]);
    