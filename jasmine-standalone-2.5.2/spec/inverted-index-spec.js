// const values = require('object.values');

//  book with valid contents
const InvertedIndexClass = require('../../app/class/invertedIndexClass');
const book = require('../../json files/books.json');
//  book with invalid content
// const invalidTitleAndText = require('../../json files/books copy 3.json');
//  book with valid content
const anotherValidBook = require('../../json files/News.json');

  const invertedIndex = new InvertedIndexClass();
describe('invertedIndex Index', () => {
  invertedIndex.createIndex('book.json', book);
  invertedIndex.createIndex('anotherValidBook.json', anotherValidBook);

  describe('InvertedIndex class, check all class methods', () => {
    it('should have readFile method', () => {
      expect(typeof invertedIndex.readFile).toBe('function');
    });

    it('should have createIndex method', () => {
      expect(typeof invertedIndex.createIndex).toBe('function');
    });

    it('should have getIndices method', () => {
      expect(typeof invertedIndex.getIndices).toBe('function');
    });

    it('should have searchIndices method', () => {
      expect(typeof invertedIndex.searchIndices).toBe('function');
    });

    it('should have searchIndex method', () => {
      expect(typeof invertedIndex.searchIndex).toBe('function');
    });

    it('should have validateFile method', () => {
      expect(typeof invertedIndex.validateFile).toBe('function');
    });

    it('should have getUnique method', () => {
      expect(typeof invertedIndex.getUnique).toBe('function');
    });

    it('should have formatJSON method', () => {
      expect(typeof invertedIndex.formatJSON).toBe('function');
    });

    it('should have tokenize method', () => {
      expect(typeof invertedIndex.tokenize).toBe('function');
    });
  });

//   describe('validateFile should check files', () => {
//     it('should check that the contents of the file to be uploaded is valid',
//     () => {
//       expect(invertedIndex.validateFile(book)).toBeTruthy();
//     });

//     it('should return false for empty json files', () => {
//       expect(invertedIndex.validateFile(emptyJSON)).toBeFalsy();
//     });

//     it('should return true if file has property "title" and "text" ', () => {
//       expect(invertedIndex.validateFile(book)).toBeTruthy();
//     });

//     it('should return false if file does not have property "title" and "text"',
//      () => {
//        expect(invertedIndex.validateFile(invalidTitleAndText)).toBeFalsy();
//      });

//      it('should return false if file is not an array of JSON object',
//      () => {
//        expect(invertedIndex.validateFile(anArray)).toBeFalsy();
//      });

//     it('should return false if file is an empty array',
//      () => {
//        expect(invertedIndex.validateFile(emptyArray)).toBeFalsy();
//      });

//      it('should return false if file is a JSON file but not an array of an array',
//      () => {
//        expect(invertedIndex.validateFile(notValid)).toBeFalsy();
//      });
//   });

//   describe('Create Index', () => {
//     it('should return a msg if index is not created', () => {
//       let msg = 'Index not created';
//       expect(invertedIndex.createIndex(notValid)).toEqual(msg);
//     });
//   });

//   describe('Tokenize words', () => {
//     it('should check that tokens are splitted and in sorted order', () => {
//       let words = 'Hello Dear how are YOU';
//       const expectedTokens = ['are', 'dear', 'hello', 'how', 'you'];
//       words = invertedIndex.tokenize(words);
//       expect(expectedTokens).toEqual(words);
//     });
//   });

// describe('Generate Index', () => {
//     it('should verify that index has been created', () => {
//       expect(Object.keys(invertedIndex.getIndex('book.json')).length)
//       .toBeGreaterThan(0);
//     });

//     it('should check that index maps the string to the correct objects in json'
//      + ' array', () => {
//       const expectedIndex = {
//         and: [0, 1],
//         barbie: [1],
//         cindarella: [1],
//         cindy: [1],
//         dearie: [0],
//         going: [0],
//         hello: [0],
//         'how\'s': [0],
//         i: [0, 1],
//         it: [0],
//         love: [0, 1],
//         you: [0]
//       };
//       let result = {};
//       result = invertedIndex.getIndex('anotherValidBook.json');
//       expect(Object.keys(result)).toEqual(Object.keys(expectedIndex));
//       expect(values(result)).toEqual(values(expectedIndex));
//     });
//   });

//   describe('Search index', () => {
//     it('should return true if search term is a string', () => {
//       const words = 'I love Barbie and Alice'
//       expect(Object.keys(invertedIndex.searchIndex('words', 'book.json'))).toBeTruthy();
//     });

//     it('should return true if search term is a string', () => {
//       const newWords = ['I love Barbie and Alice'];
//       expect(Object.keys(invertedIndex.searchIndex('newWords', 'anotherValidBook.json'))).toBeTruthy();
//     });

//     it('should return true if search term is a number', () => {
//       const number = 1234;
//       expect(Object.keys(invertedIndex.searchIndex('number', 'anotherValidBook.json'))).toBeTruthy();
//     });

//     it('should search through single files that are indexed', () => {
//       const expectedResult = {
//         'anotherValidBook.json':
//         {
//           barbie: [1],
//           and: [0, 1],
//           cindarella: [1],
//           dearie: [0]
//         }
//       };
//       let search = {};
//       search = invertedIndex.searchIndex('barbie, mercy and cindarella dearie',
//       'anotherValidBook.json');
//       expect(Object.keys(search)).toEqual(Object.keys(expectedResult));
//       expect(values(expectedResult)).toEqual(values(expectedResult));
//     });

//     it('should search through all files', () => {
//       const allFiles = 
//       {
//         'book.json':
//         { 
//           alice: [0],
//           an: [1],
//           barbie: [2],
//           cartoons: [2],
//           of: [0, 1],
//           unusual: [1],
//           wizard: [1] 
//         },
//         'anotherValidBook.json': 
//         { 
//           barbie: [ 1 ] 
//         }
//       }

//       let search = {};
//       search = invertedIndex.searchIndex('Barbie loves cartoons but she\'s scared of an unusual wizard, alice fall\'s',
//       'All files');
//       expect(Object.keys(search)).toEqual(Object.keys(allFiles));
//       expect(values(allFiles)).toEqual(values(allFiles));
//     });
//   });
});
