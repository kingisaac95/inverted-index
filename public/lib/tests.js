// 'use strict';

// describe('Inverted Index class', function() {
//   beforeEach(function() {
//     this.indexInstance = new Index();
//     this.valid = '[{"title": "The hill","text": "Some may trust in"},\
//     {"title": "Travis","text": "The travis in CI is not in."}]';
//     this.invalid = '[{"text": "Some may trust in"},{"title": "Travis"}]';
//   });

//   describe('Read book data', function() {

//     it('should return false if an invalid JSON array was read', function() {
//       let indexed = this.indexInstance.createIndex('invalid json as a string',
//         'invalid.json');
//       expect(indexed).toBeFalsy();
//     });

//     it('should return false if an empty json was read', function() {
//       let indexed = this.indexInstance.createIndex([], 'invalid.json');
//       expect(indexed).toBeFalsy();
//     });
//   });

//   describe('Populate Index', function() {
//     it('should create index once the json file has been read', function() {
//       this.indexInstance.createIndex(this.valid, 'valid.json');
//       expect(this.indexInstance.getIndex('valid.json')).toBeDefined();
//     });

//     it('should return the right index value if a valid json is passed',
//       function () {
//         this.indexInstance.createIndex(this.valid, 'valid.json');
//         let indexed = this.indexInstance.getIndex('valid.json');
//         let answer = {
//           some: [0],
//           the: [0, 1],
//           hill: [0],
//           may: [0],
//           in: [0, 1],
//           travis: [1],
//           ci: [1],
//           is: [1],
//           not: [1],
//           trust: [0]
//         };
//         expect(indexed).toEqual(answer);
//     });

//     it('should return false if some docs don\'t have title or text',
//       function() {
//         let indexed = this.indexInstance.createIndex(this.invalid, 'invalid.json');
//         expect(indexed).toBeFalsy();
//       });
//   });

//   describe('Search index', function() {

//     it('should return an array of object(s) with each word as keys and the \
//       value is an array of the document index', function() {
//         let book = '[{"title": "The hill","text": "Some may trust in"},\
//         {"title": "Travis", "text": "The travis in CI is not in"}]';

//         this.indexInstance.createIndex(book, 'book.json');
//         let result = this.indexInstance.searchIndex('in Travis', 'book.json');
//         let expectedResult = [
//           {
//             indexes: {in:[0,1], travis:[1]},
//             searchedFile: 'book.json',
//             documents: [0, 1]
//           }
//         ];
//         expect(result).toEqual(expectedResult);
//     });

//     it('should return an array of search result for each file if the \
//       file searched is all', function() {
//         let book1 = '[{"title": "The hill","text": "Some may trust in"},\
//         {"title": "Travis", "text": "The travis in CI is not in"}]';

//         let book2 = '[{"title": "The hill","text": "Some may trust in"},\
//         {"title": "Travis", "text": "The travis in CI is not in"}]';

//         this.indexInstance.createIndex(book1, 'book1.json');
//         this.indexInstance.createIndex(book2, 'book2.json');
//         let expectedResult = [
//           {
//             documents: [0, 1],
//             indexes: {
//               the: [0,1]
//             },
//             searchedFile: 'book1.json'
//           },
//           {
//             documents: [0, 1],
//             indexes: {
//               the: [0,1]
//             },
//             searchedFile: 'book2.json'
//           }
//         ];
//         let result = this.indexInstance.searchIndex('the', 'all');
//         expect(result).toEqual(expectedResult);
//       });

//     it('should return false if an empty string is passed as search query',
//       function() {
//         let book = '[{"title": "The hill", "text": "Some may trust in"},\
//         {"title": "Travis", "text": "The travis in CI is not in"}]';
//         this.indexInstance.createIndex(book, 'book.json');
//         let result = this.indexInstance.searchIndex('   ');
//         expect(result).toBeFalsy();
//     });
//   });
// });

// /* const tokenize = (obj) => {
//   let newText = ' ';
//   for (let i = 0; i < obj.length; i + 1) {
//     newText += obj[i].text.toLowerCase();
//   }
//   const generated = newText.replace(/[^\w\s]/gi, ' ').match(/\w+/g);
//   return generated;
// }; */
