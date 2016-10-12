// ==UserScript==
// @name         Translator Join
// @namespace    http://microsoftnewyork.com
// @version      0.2
// @description  Augment functionality of Translator's "join" interface.
// @author       Ross Dakin
// @match        https://msrmtc01.azurewebsites.net/join*
// @grant        none

// ==/UserScript==

(function() {
  'use strict';

  // can we dry this up by accessing the params above somehow?
  console.debug('[IDNYC Translator Join] loaded version 0.1');

  function getUrlParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
  }

  function setScopeParam(scope, paramName, value) {
    console.debug('[IDNYC Translator Join] old', paramName, scope[paramName]);
    console.debug('[IDNYC Translator Join] new', paramName, value);

    scope[paramName] = value;
    scope.$apply();
  }

  function setLanguageCode(scope) {
    var newLanguageCode = getUrlParameterByName('language');

    console.debug('[IDNYC Translator Join] setLanguageCode:', scope.speechLanguages);

    if (!newLanguageCode) {
      console.warn('[IDNYC Translator Join] new languageCode is falsy; aborting');
      return;
    }

    if (scope.speechLanguages &&
        scope.speechLanguages.length) {
      setScopeParam(scope, 'languageCode', newLanguageCode);
    } else {
      window.setTimeout(function() {
        setLanguageCode(scope);
      }, 10); // takes about 40ms in practice
    }
  }

  function setApplicantName(scope) {
    var name = 'Applicant ' + Math.round(Math.random() * 1000);

    setScopeParam(scope, 'nickname', name);
  }

  function getScope(callback) {
    var scope = angular.element('#languageCode').scope();
    console.debug('[IDNYC Translator Join] scope:', scope ? scope : 'falsy');

    if (scope) {
      callback(scope);
    } else {
      window.setTimeout(function() {
        getScope(callback);
      }, 10); // takes about 40ms in practice
    }
  }

  function init() {
    getScope(function(scope) {
      setLanguageCode(scope);
      setApplicantName(scope);

      $('#roomId').on('focus', function() { $(this).val(null); });
    });
  }

  init();
})();
