(function(angular){
  'use strict';
  function HeroListController($scope, $element, $attrs){
    var ctrl = this;

    ctrl.list = [
      {
        name: 'Batman',
        location:''
      },
      {
        name: 'Linterna verde',
        location:'xyz'
      }
    ];

    ctrl.updateHero = function(hero, prop, value){
      hero[prop] = value;
    };

    ctrl.deleteHero =function(hero){
      var idx = ctrl.list.indexOf(hero);
      if(idx >= 0){
        ctrl.list.splice(idx,1);
      }
    };
  }

  angular.module('myHero').component('heroList',{
    templateUrl: 'heroList.html',
    controller: HeroListController
  });

})(window.angular);
