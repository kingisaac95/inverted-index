const values = require('object.values');

//  import test books
const book = require('../../json files/books.json');
const emptyJsonFile = require('../../json files/emptyJsonFile.json');
const emptyArrayFile = require('../../json files/emptyArrayFile.json');
const invalid = require('../../json files/invalidFile.json');
const notArray = require('../../json files/notArray.json');
const invalidTitleAndText = require('../../json files/books copy 3.json');
const anotherBook = require('../../json files/anotherBook.json');

const invertedIndex = new InvertedIndex();
describe('InvertedIndex', () => {
  invertedIndex.createIndex('books.json', book);
  invertedIndex.createIndex('anotherBook.json', anotherBook);

  describe('InvertedIndex class', () => {
    it('should have readFile method', () => {
      expect(typeof InvertedIndex.readFile).toBe('function');
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

    it('should have validateFile method', () => {
      expect(typeof InvertedIndex.validateFile).toBe('function');
    });

    it('should have getUnique method', () => {
      expect(typeof InvertedIndex.getUnique).toBe('function');
    });

    it('should have formatJSON method', () => {
      expect(typeof InvertedIndex.formatJSON).toBe('function');
    });

    it('should have tokenize method', () => {
      expect(typeof InvertedIndex.tokenize).toBe('function');
    });
  });

  describe('validateFile', () => {
    it('should check that the contents of the file to be uploaded is valid',
    () => {
      expect(InvertedIndex.validateFile(book)).toBeTruthy();
    });

    it('should return false for empty json files', () => {
      expect(InvertedIndex.validateFile(emptyJsonFile)).toBeFalsy();
    });

    it('should return true if file has property "title" and "text" ', () => {
      expect(InvertedIndex.validateFile(book)).toBeTruthy();
    });

    it('should return false if file does not have property "title" and "text"',
     () => {
       expect(InvertedIndex.validateFile(invalidTitleAndText)).toBeFalsy();
     });

    it('should return false if file is not an array of JSON object',
     () => {
       expect(InvertedIndex.validateFile(notArray)).toBeFalsy();
     });

    it('should return false if file is an empty array',
     () => {
       expect(InvertedIndex.validateFile(emptyArrayFile)).toBeFalsy();
     });

    it('should return false if file is a JSON but not an array of an array',
     () => {
       expect(InvertedIndex.validateFile(invalid)).toBeFalsy();
     });
  });

  describe('createIndex', () => {
    it('should return a msg if index is not created', () => {
      expect(invertedIndex.createIndex(invalid)).toEqual(false);
    });
  });

  describe('getIndices', () => {
    it('should verify that index has been created', () => {
      expect(Object.keys(invertedIndex.getIndices('books.json')).length)
      .toBeGreaterThan(0);
    });

    it('should check that index maps the string to the correct objects in json'
     + ' array', () => {
      const createdIndex = {
        a: [0],
        alice: [0],
        and: [0],
        enters: [0],
        falls: [0],
        full: [0],
        hole: [0],
        imagination: [0],
        in: [0],
        into: [0],
        of: [0],
        rabbit: [0],
        wonderland: [0],
        world: [0]
      };
      let result = {};
      result = invertedIndex.getIndices('anotherBook.json');
      expect(Object.keys(result)).toEqual(Object.keys(createdIndex));
      expect(values(result)).toEqual(values(createdIndex));
    });
  });

  describe('searchIndices', () => {
    it('should return true if search term is a string', () => {
      const words = 'I love Barbie and Alice';
      expect(Object.keys(invertedIndex.searchIndices(words,
        'book.json'))).toBeTruthy();
    });

    it('should return true if search term is a string', () => {
      const newWords = ['I love Barbie and Alice'];
      expect(Object.keys(invertedIndex.searchIndices(newWords,
        'anotherBook.json'))).toBeTruthy();
    });

    it('should return true if search term is a number', () => {
      const number = 1234;
      expect(Object.keys(invertedIndex.searchIndices(number,
        'anotherBook.json'))).toBeTruthy();
    });

    it('should search through single files that are indexed', () => {
      const expectedResult = {
        0:
        {
          barbie: [1],
          and: [0, 1],
          cindarella: [1],
          dearie: [0]
        }
      };
      let search = {};
      search = invertedIndex.searchIndices('anotherBook.json',
        'barbie, mercy and cindarella dearie');
      expect(Object.keys(search)).toEqual(Object.keys(expectedResult));
      expect(values(expectedResult)).toEqual(values(expectedResult));
    });

    it('should search through all files', () => {
      const allFiles =
        {
          0:
          {
            alice: [0],
            an: [1],
            barbie: [2],
            cartoons: [2],
            of: [0, 1],
            unusual: [1],
            wizard: [1]
          },
          1:
          {
            barbie: [1]
          }
        };

      let search = {};
      search = invertedIndex.searchIndices('all',
        'Barbie loves cartoons but she\'s scared of an unusual wizard,' +
          'alice fall\'s');
      expect(Object.keys(search)).toEqual(Object.keys(allFiles));
      expect(values(allFiles)).toEqual(values(allFiles));
    });
  });
});
