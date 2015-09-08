(function () {
    "use strict";

    function HomeService($http, $q) {
        return function () {
            var deferred = $q.defer();
            var current = new Date();
            var date = current.getFullYear() + "-" + (current.getMonth()+1) + "-" + current.getDay();
            var get = $http.get("http://www.devibe.com.br/Agenda/JSON?op=>=&data=" + date);
            get.then(function (data) {
                deferred.resolve(data);
            }, function (err) {
                deferred.reject(err);
            });
            return deferred.promise;
        };
    }

    HomeService.$inject = [
        "$http",
        "$q"
    ];

    angular
            .module("app.home")
            .factory("HomeService", HomeService);
})();