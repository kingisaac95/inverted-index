

const books = require('../../app/class/invertedIndexClass');

// A test suite to read book data
describe('Inverted Index Suite', () => {
  // Create an instance of the Index class
  const newIndex = new InvertedIndex();
  const emptyBook = [];
  const sampleSentence = 'As &you can see here, you have defined *the function';
  const multipleSearch = 'Coverage lines for you';
  newIndex.createIndex('books', books);

  describe('Class Inverted Index', () => {
    it('should be a class', () => {
      expect(newIndex instanceof InvertedIndex).toBe(true);
      expect(newIndex instanceof Object).toBe(true);
      expect(typeof (newIndex)).toBe('object');
    });
  });

  describe('Tokenize String', () => {
    it('should be available in class InvertedIndex', () => {
      expect(InvertedIndex.tokenize).toBeDefined();
    });
    it('should return an array containing alphabets only', () => {
      expect(InvertedIndex.tokenize(sampleSentence)).not.toContain('&');
    });
    it('should return an array containing the correct number of words', () => {
      expect(InvertedIndex.tokenize(sampleSentence).length).toBe(10);
    });
  });

  describe('Unique Words', () => {
    it('should be available in class InvertedIndex', () => {
      expect(InvertedIndex.uniqueWords).toBeDefined();
    });
    it('should return an array of words without duplicates', () => {
      expect(InvertedIndex.uniqueWords(sampleSentence).length).toBe(9);
    });
  });

  describe('Read Book Data', () => {
    it('should have createIndex available in class InvertedIndex', () => {
      expect(newIndex.createIndex).toBeDefined();
    });
    it('should ensure the JSON file is not empty', () => {
      expect(newIndex.createIndex('emptyBook', emptyBook))
        .toBe('JSON file is Empty');
      expect(newIndex.createIndex('books', books))
        .not.toBe('JSON file is Empty');
    });
  });

  describe('Populate Index', () => {
    it('should have an Index created', () => {
      expect(newIndex.index.books).toBeDefined();
    });
    it('should accurately map words to their document location', () => {
      expect(Object.keys(newIndex.index).length).toBe(1);
      expect(Object.keys(newIndex.index.books).length).toBe(38);
      expect(newIndex.index.books.heroku).toEqual([0]);
      expect(newIndex.index.books.your).toEqual([0, 1]);
    });
  });

  describe('Get Index', () => {
    it('should return an accurate index Object of the indexed file', () => {
      expect(newIndex.getIndex('books')).toBeDefined();
      expect(Object.keys(newIndex.getIndex('books')).length).toBe(38);
    });
  });

  describe('Search Index', () => {
    it('should have searchIndex method accessible in the class', () => {
      expect(newIndex.searchIndex).toBeDefined();
    });
    it('should return correct index for each word if index to search is given',
      () => {
        expect(newIndex.searchIndex('heroku', 'books')).toEqual({
          heroku: [0]
        });
        expect(newIndex.searchIndex('your', 'books')).toEqual({
          your: [0, 1]
        });
        expect(newIndex.searchIndex('amity', 'books')).toEqual({
          amity: 'We are Sorry but amity is not found in our database'
        });
        expect(newIndex.searchIndex(multipleSearch, 'books')).toEqual({
          coverage: [1],
          for: 'We are Sorry but for is not found in our database',
          lines: [1],
          you: [0, 1]
        });
      });
    it('should return correct index for each word without index to search',
      () => {
        expect(newIndex.searchIndex('heroku')).toEqual([{ heroku: [0] }]);
        expect(newIndex.searchIndex('your')).toEqual([{
          your: [0, 1]
        }]);
        expect(newIndex.searchIndex('amity')).toEqual([{
          amity: 'We are Sorry but amity is not found in our database'
        }]);
        expect(newIndex.searchIndex(multipleSearch)).toEqual([
          { coverage: [1] },
          { for: 'We are Sorry but for is not found in our database' },
          { lines: [1] },
          { you: [0, 1] }
        ]);
      });
  });
});
