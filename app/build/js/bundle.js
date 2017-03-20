(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
const app = angular.module('invertedIndex', []);

// configure angular toastr for notifications
toastr.options.closeButton = true;
toastr.options.closeMethod = 'fadeOut';
toastr.options.closeDuration = 300;
toastr.options.preventDuplicates = true;

app.controller('ivController', ['$scope', ($scope) => {
  $scope.fileNames = [];
  $scope.invertedIndexes = [];
  $scope.fileObject = {};
  const invertedIndex = new InvertedIndex();
  const files = document.getElementById('file-input');
  const indexBtn = document.getElementById('getIndex');
  const selectedFile = document.getElementById('selectedFile');
  const fileReader = new FileReader();
  $scope.fileContent = {};
  $scope.titles = {};
  $scope.documentCount = 0;
  $scope.indices = {};
  $scope.indexedWords = {};
  $scope.indexedFiles = [];
  $scope.show = false;

  // event listeners
  indexBtn.addEventListener('click', () => {
    const fileName = selectedFile.value;
    $scope.createIndex(fileName);
  });

  files.addEventListener('change', () => {
    $scope.uploadFile(files);
  });
  function validateJSON(file) {
    Object.keys(file).forEach((prop) => {
      if (!prop.hasOwnProperty('text') || !prop.hasOwnProperty('text')) {
        return true;
      }
    });
  }
  $scope.uploadFile = (file) => {
    file = file.files;
    // invertedIndex.validateFile(file);
    for (let i = 0; i < file.length; i += 1) {
      if (file[i].name.split('.').pop() !== 'json') {
        return toastr.error('file must be a JSON');
      }
      if ($scope.fileNames.indexOf(file[i].name) !== -1) {
        return toastr.error(`${file[i].name} already uploaded!`);
      }
      invertedIndex.readFile(file[i])
      .then((prop) => {
        if (!validateJSON(prop)) {
          toastr.error('invalid file');
          return false;
        }
        $scope.fileContent[file[i].name] = prop;
        $scope.$apply($scope.fileNames.push(file[i].name));
        toastr.success(`${file[i].name} upload successful`);
      })
      .catch(error =>  toastr.error(error));
    }
  };

  function validateJSON(file) {
    let val = true;
    file.forEach((prop) => {
      if (!prop.hasOwnProperty('text') || !prop.hasOwnProperty('text')) {
        val = false;
        return false;
      }
    });
    return val;
  }

  $scope.createIndex = (fileName) => {
    if (fileName === '-- select a file to index --') {
      return toastr.error('you have to select a file');
    }

    // get file content
    Object.keys($scope.fileContent).forEach((key) => {
      $scope.fileObject = ($scope.fileContent[key]);
    });

    // get file titles
    const count = [];
    Object.keys($scope.fileObject).forEach((key, index) => {
      $scope.titles[key] = $scope.fileObject[key].title;
      count.push(index);
    });
    $scope.documentCount = count;
    console.log($scope.fileContent)
    console.log($scope.titles)
    console.log($scope.documentCount)

    invertedIndex.createIndex(fileName, $scope.fileObject);

    $scope.indices = invertedIndex.getIndices(fileName);
    console.log($scope.indices);
    $scope.indexedFiles = invertedIndex.indexedFiles;

    Object.keys($scope.indices).forEach((key) => {
      $scope.indexedWords = $scope.indices[key];
    });

    // console.log(invertedIndex.searchFunction(query, filter));

    $scope.show = true;
    return toastr.success(`${selectedFile.value} index created`);
  };
}]);

},{}]},{},[1]);
