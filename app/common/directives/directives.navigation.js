angular.module('directives')
.directive('listItem',[function(){
  return {
    'restrict': 'A',
    'link' :function($scope,$elem,$attrs) {
      $elem.addClass('anchor');
      $elem.on('click',function(){
        angular.element('.anchor').removeClass('active');
        $elem.addClass('active');
      });
    }
  }
}]);