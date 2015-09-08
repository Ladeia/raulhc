(function () {
    "use strict";

    function homeController(HomeService) {
        var self = this;
        self.data = [];
        
        self.onload = function(){
            var calendar = HomeService();
            calendar.then(function(data){
                self.data = data.data;
            },function(err){
                alert("Falha ao carregar agenda!");
            });
        };
        
        self.onload();
    }
    
    homeController.$inject = [
        "HomeService"
    ];

    angular
            .module("app.home")
            .controller("HomeController", homeController);
})();