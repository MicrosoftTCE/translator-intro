// ==UserScript==
// @name         Translator Chat
// @namespace    http://microsoftnewyork.com
// @version      0.1
// @description  Augment functionality of Translator's chat interface.
// @author       Ross Dakin
// @match        https://msrmtc01.azurewebsites.net/chatRoom*
// @grant        none

// ==/UserScript==

(function() {
  'use strict';

  // can we dry this up by accessing the params above somehow?
  console.debug('[IDNYC Translator Chat] loaded version 0.1');

  function getUrlParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
  }

  function getScope(callback) {
    var scope = angular.element($('mt-exit-view').get(0)).scope();
    console.debug('[IDNYC Translator Chat] scope:', scope ? scope : 'falsy');

    if (scope) {
      callback(scope);
    } else {
      window.setTimeout(function() {
        getScope(callback);
      }, 10); // takes about 40ms in practice
    }
  }

  function setScopeParam(scope, paramName, value) {
    console.debug('[IDNYC Translator Chat] old', paramName, scope[paramName]);
    console.debug('[IDNYC Translator Chat] new', paramName, value);

    scope[paramName] = value;
  }

  function redirect() {
    var param = 'returnTo';
    var url = getUrlParameterByName(param);
    url = decodeURIComponent(url);

    if (url) {
      console.debug('[IDNYC Translator Chat] redirecting', url);
      document.location = url;
    } else {
      console.warn('[IDNYC Translator Chat] tried to redirect but no ' + param + 'URL param found');
    }
  }

  function redirectOnExitDialog(scope) {
    scope.$watch('isShowExitDialog', function(newValue, oldValue) {
      console.debug('[IDNYC Translator Chat] isShowExitDialog changed', newValue, oldValue);

      if (newValue) {
        setScopeParam(scope, 'isBrowserExitDialogRequired', false);
        redirect();
      }
    });
  }

  function redirectOnForcedExit(scope) {
    scope.$watch('isForcedExit', function(newValue, oldValue) {
      console.debug('[IDNYC Translator Chat] isForcedExit changed', newValue, oldValue);

      if (newValue) {
        setScopeParam(scope, 'isBrowserExitDialogRequired', false);
        redirect();
      }
    });
  }

  function init() {
    getScope(function(scope) {
      if (scope.isCreator) {
        // NOOP
      } else {
        redirectOnExitDialog(scope);
        redirectOnForcedExit(scope);
      }
    });
  }

  init();
})();
