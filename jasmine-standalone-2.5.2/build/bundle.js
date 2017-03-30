(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
// const values = require('object.values');

//  book with valid contents
const book = require('../../json files/books.json');
//  book with invalid content
// const invalidTitleAndText = require('../../json files/books copy 3.json');
//  book with valid content
const anotherValidBook = require('../../json files/News.json');

const invertedIndex = new InvertedIndex();
describe('InvertedIndex', () => {
  invertedIndex.createIndex('book.json', book);
  invertedIndex.createIndex('anotherValidBook.json', anotherValidBook);

  describe('InvertedIndex class', () => {
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

  // describe('validateFile should check files', () => {
  //   it('should check that the contents of the file to be uploaded is valid',
  //   () => {
  //     expect(invertedIndex.validateFile(book)).toBeTruthy();
  //   });
  // });

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

},{"../../json files/News.json":2,"../../json files/books.json":3}],2:[function(require,module,exports){
module.exports=[
   {"title": "Why PDP lost Ondo – Kashamu",
    "text":" The senator also crticised the Senator Ahmed Makarfi-led National Caretaker Committee of the party over the statement credited to its spokesman, Prince Dayo Adeyeye, where he threatened to sanction those in the camp of Senator Ali Modu Sheriff."

},

 {"title": "How Akeredolu reaped from PDP’s mistakes",
    "text":"For Olusegun Mimiko, the outgoing governor of Ondo State, Saturday governorship election was like a war. Though he had fought many political battles before, coming out unscathed in almost all, he saw the last election as the most important political battle he needed to win in order to safeguard his political future."

},

 {"title": "How can Nigeria curb buying of votes during elections",
    "text":"There are electoral laws regulating such practice. But these provisions are not sufficiently enforced. Our elections ought not to be a product of conspiracy defined by cash-and-carry democracy. We should let the popular will to be fully expressed."

},

 {"title": "The Wealthiest Pastors in the World",
    "text":"Many may have their doubts as to whether these very rich preachers are pre-ordained or self-proclaimed, but one thing is for sure, spreading the word has greatly impacted not only the ears who hear it, but also the bank accounts of the mouths who preach it. One can say these pastors are indeed ‘blessed.’ Here are the richest pastors in the world."

},

 {"title": "Mixed reactions greet Akeredolu’s victory",
    "text":" Jegede, who spoke to journalists in Akure, the state capital on Sunday, neither commended nor condemned the conduct of the poll, but said that his reaction about the election would soon be made public.."

},
{"title": "Why PDP lost Ondo – Kashamu",
    "text":" The senator also crticised the Senator Ahmed Makarfi-led National Caretaker Committee of the party over the statement credited to its spokesman, Prince Dayo Adeyeye, where he threatened to sanction those in the camp of Senator Ali Modu Sheriff."

},

 {"title": "How Akeredolu reaped from PDP’s mistakes",
    "text":"For Olusegun Mimiko, the outgoing governor of Ondo State, Saturday governorship election was like a war. Though he had fought many political battles before, coming out unscathed in almost all, he saw the last election as the most important political battle he needed to win in order to safeguard his political future."

},

 {"title": "How can Nigeria curb buying of votes during elections",
    "text":"There are electoral laws regulating such practice. But these provisions are not sufficiently enforced. Our elections ought not to be a product of conspiracy defined by cash-and-carry democracy. We should let the popular will to be fully expressed."

},

 {"title": "The Wealthiest Pastors in the World",
    "text":"Many may have their doubts as to whether these very rich preachers are pre-ordained or self-proclaimed, but one thing is for sure, spreading the word has greatly impacted not only the ears who hear it, but also the bank accounts of the mouths who preach it. One can say these pastors are indeed ‘blessed.’ Here are the richest pastors in the world."

},

 {"title": "Mixed reactions greet Akeredolu’s victory",
    "text":" Jegede, who spoke to journalists in Akure, the state capital on Sunday, neither commended nor condemned the conduct of the poll, but said that his reaction about the election would soon be made public.."

}
]

},{}],3:[function(require,module,exports){
module.exports=[
  {
    "title": "Alice in Wonderland",
    "text": "Alice falls into a rabbit hole and enters a world full of imagination."
  },

  {
    "title": "The Lord of the Rings: The Fellowship of the Ring.",
    "text": "An unusual alliance of man, elf, dwarf, wizard and hobbit seek to destroy a powerful ring."
  },
  {
    "title" : "The Cat in the Hat",
    "text" : "The sun did not shine. It was too wet to play. So we sat in the house All that cold, cold, wet day. I sat there with Sally. We sat there, we two. And I said, “How I wish We had something to do!” Too wet to go out And too cold to play ball. So we sat in the house. We did nothing at all. So all we could do was to Sit! Sit! Sit! Sit! And we did not like it. Not one little bit. And then Something went BUMP! How that bump made us jump! "
  },
  {
    "title" : "Ender's Game",
    "text" : "The monitor lady smiled very nicely and tousled his hair and said, 'Andrew, I suppose by now you're just absolutely sick of having that horrid monitor. Well, I have good news for you. That monitor is going to come out today. We're going to just take it right out, and it won't hurt a bit.'"
  }
]
},{}]},{},[1])