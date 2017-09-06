(function(angular){
  'use strict';
  function Editable($scope, $element, $attrs){
    var ctrl = this;
    ctrl.editMode = false;

    ctrl.handleModeChange = function(){
      if(ctrl.editMode){
        ctrl.onUpdate({value: ctrl.fieldValue});
        ctrl.fieldValueCopy =ctrl.fieldValue;
      }
      ctrl.editMode = !ctrl.editMode;
    };

    ctrl.reset = function(){
      ctrl.fieldValue = ctrl.fieldValueCopy;
    };

    ctrl.$onInit = function(){
      ctrl.fieldValueCopy = ctrl.fieldValue;

      if(!ctrl.fieldType){
        ctrl.fieldType = 'text';
      }
    };
  }

  angular.module('myHero').component('editableField', {
    templateUrl:'editableField.html',
    controller: Editable,
    bindings:{
      fieldValue:'<',
      fieldType: '@',
      onUpdate:'&'
    }
  });
})(window.angular);
