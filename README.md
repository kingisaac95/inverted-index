[![Build Status](https://travis-ci.org/andela-korjiewuru/inverted-index.svg?branch=development)](https://travis-ci.org/andela-korjiewuru/inverted-index)
[![Code Climate](https://codeclimate.com/github/andela-korjiewuru/inverted-index/badges/gpa.svg)](https://codeclimate.com/github/andela-korjiewuru/inverted-index)
[![Coverage Status](https://coveralls.io/repos/github/andela-korjiewuru/inverted-index/badge.svg?branch=development)](https://coveralls.io/github/andela-korjiewuru/inverted-index?branch=development)

### dexIt Inverted Index Application

[dexIt](https://my-dexit.herokuapp.com/)

<img width="1280" alt="screen shot 2017-07-13 at 8 42 13 am" src="https://user-images.githubusercontent.com/26261917/28155657-85e04cc8-67a7-11e7-90c3-83ec51e8dfbc.png">

dexIt enables you to upload your JSON array files, create an index map of words in to the corresponding JSON document in the array, and perform search on the words present.

#### Using the App

When the app is installed, follow the guide below to use InvertedIndex App

1. Click on `Uploadfile` to upload a file(s)
2. Upon successful upload, the select bxz in 'File upload detials' section to choose from uploaded file(s).
3. Click on `Get Index` to create the Index for the selected file
4. View the created Indices displayed in a tabular format in the right corner under `Table of Indices`
5. You can searh through one or all files that have already been indexed.

###### Note:
* You may want to use the `What is this?` and `Usage guide` in the application menu to get more acquinted with the app.
* You can do multiple uploads of JSON files

#### Prerequisites

You should have the following technologies installed to use the app

```
node
```

#### Installing

To clone the repo, run the following command

```
git clone https://github.com/andela-korjiewuru/inverted-index.git
```

#### Install the project dependencies

```
npm install
```

#### Running the App

node server

#### Running the tests

To run the test, run the following command

```
npm test
```

#### Limitations

This application has a few limitations.
* You can only search through one or all files. Currently the user cannot decide to search through a group of select file out of all indexed files.
* When a user searches through all files, the name of the book does not appear alongside the tables, rather the tables are arranged in the order with which the indices are created.

#### Author

Orjiewuru Kingdom Isaac
