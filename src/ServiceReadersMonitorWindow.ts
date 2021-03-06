import angular from 'angular';
import templateAvailableHumanBooks from './templateAvailableHumanBooks';

export const ServiceReadersMonitorWindow = ['$window', '$compile', function($window, $compile) {

  let readersMonitorWindowWindow;

  function isClosed() {
    return angular.isUndefined(readersMonitorWindowWindow) || readersMonitorWindowWindow.closed;
  }

  $window.onbeforeunload = function() {
    if (isClosed()) {
      return;
    }
    readersMonitorWindowWindow.close();
  };

  return {
    toggle($scope) {

      let templateAvailableHumanBooksHeadElement;
      let templateAvailableHumanBooksBodyElement;

      if (!isClosed()) {
        readersMonitorWindowWindow.close();
        return;
      }

      readersMonitorWindowWindow = $window.open('about:blank', '', 'menubar=no,status=no');
      templateAvailableHumanBooksHeadElement = angular.element(templateAvailableHumanBooks.head);
      templateAvailableHumanBooksBodyElement = angular.element(templateAvailableHumanBooks.body);
      angular.element(readersMonitorWindowWindow.document.head).append(templateAvailableHumanBooksHeadElement);
      angular.element(readersMonitorWindowWindow.document.body).append(templateAvailableHumanBooksBodyElement);
      $compile(templateAvailableHumanBooksHeadElement)($scope);
      $compile(templateAvailableHumanBooksBodyElement)($scope);

    }
  };

}];
