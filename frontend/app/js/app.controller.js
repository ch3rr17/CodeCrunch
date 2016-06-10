(function() {
    'use strict';

    angular
        .module('app')
        .controller('AppController', AppController);

    AppController.$inject = ['authService'];

    /* @ngInject */
    function AppController(authService) {
        var vm = this;
        vm.loginUser = function() {
            console.log("loginUser called")
            authService.login(vm.loginForm).then(
                function(response) {
                    toastr.success('Login successful!');
                },
                function(error) {
                    toastr.error("Error: " + error.message);
                    console.log("Error: " + error.message + " error.status");
                }
            );
        };

         vm.registerUser = function(){
            console.log("test");	
            authService.register(vm.registerForm).then(
                function(response){
                    toastr.success('Registration successful!');
                }, function(error){
                    toastr.error("Error: " + error.message);
                    console.log("Error: " + error.message + " error.status");
                });
        };
    }
})();