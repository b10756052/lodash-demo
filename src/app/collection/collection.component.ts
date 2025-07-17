import { Component, OnInit } from '@angular/core';

import _ from 'lodash';

@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styleUrl: './collection.component.scss'
})
export class CollectionComponent implements OnInit {
  methods: Array<Method> = [];

  ngOnInit(): void {
    this.methods = [
      // countBy
      {
        name: '_.countBy(collection, [iteratee=_.identity])',
        description: '創建物件，key是計算出來的值，value是值出現的次數',
        link: 'https://lodash.com/docs/4.17.15#countBy',
        example: this.getCountByExample()
      },

      // each => forEach
      {
        name: '_.forEach(collection, [iteratee=_.identity])',
        description: '對每個元素執行函數，可以用return false來中斷循環',
        link: 'https://lodash.com/docs/4.17.15#forEach',
        example: this.getForEachExample(),
        notes: this.getForEachNotes(),
        nativeExample: this.getForEachNativeExample()
      },

      // eachRight => forEachRight
      {
        name: '_.forEachRight(collection, [iteratee=_.identity])',
        description: '跟 _.forEach 一模模一樣樣，差別在於從右到左執行',
        link: 'https://lodash.com/docs/4.17.15#forEachRight',
        example: this.getForEachRightExample()
      },

      // every
      {
        name: '_.every(collection, [predicate=_.identity])',
        description: '檢查所有元素是否都符合條件',
        link: 'https://lodash.com/docs/4.17.15#every',
        example: this.getEveryExample(),
        notes: this.getEveryNotes(),
        nativeExample: this.getEveryNativeExample()
      },

      // filter
      {
        name: '_.filter(collection, [predicate=_.identity])',
        description: '根據條件過濾元素，回傳新陣列',
        link: 'https://lodash.com/docs/4.17.15#filter',
        example: this.getFilterExample(),
        nativeExample: this.getFilterNativeExample()
      },

      // find
      {
        name: '_.find(collection, [predicate=_.identity], [fromIndex=0])',
        description: '找到第一個符合條件的元素',
        link: 'https://lodash.com/docs/4.17.15#find',
        example: this.getFindExample(),
        nativeExample: this.getFindNativeExample()
      },

      // findLast
      {
        name: '_.findLast(collection, [predicate=_.identity], [fromIndex=collection.length-1])',
        description: '找到最後一個符合條件的元素 (會從右到左找)',
        link: 'https://lodash.com/docs/4.17.15#findLast',
        example: this.getFindLastExample(),
      },

      // flatMap
      {
        name: '_.flatMap(collection, [iteratee=_.identity])',
        description: '對每個元素執行函數後攤平 (只攤一層)',
        link: 'https://lodash.com/docs/4.17.15#flatMap',
        example: this.getFlatMapExample(),
        nativeExample: this.getFlatMapNativeExample()
      },

      // flatMapDeep
      {
        name: '_.flatMapDeep(collection, [iteratee=_.identity])',
        description: '對每個元素執行函數後攤平 (攤全部層)',
        link: 'https://lodash.com/docs/4.17.15#flatMapDeep',
        example: this.getFlatMapDeepExample(),
        nativeExample: this.getFlatMapDeepNativeExample()
      },

      // flatMapDepth
      {
        name: '_.flatMapDepth(collection, [iteratee=_.identity], [depth=1])',
        description: '對每個元素執行函數後攤平 (攤指定層數)',
        link: 'https://lodash.com/docs/4.17.15#flatMapDepth',
        example: this.getFlatMapDepthExample(),
        nativeExample: this.getFlatMapDepthNativeExample()
      },

      // groupBy
      {
        name: '_.groupBy(collection, [iteratee=_.identity])',
        description: '根據函數結果將集合元素分組成物件',
        link: 'https://lodash.com/docs/4.17.15#groupBy',
        example: this.getGroupByExample()
      },

      // includes
      {
        name: '_.includes(collection, value, [fromIndex=0])',
        description: '檢查是否包含指定元素',
        link: 'https://lodash.com/docs/4.17.15#includes',
        example: this.getIncludesExample(),
        nativeExample: this.getIncludesNativeExample()
      }
    ]
  }

  // #region _.countBy

  /** _.countBy 範例 */
  getCountByExample() {
    return `const numArr = [6.1, 4.2, 6.3];
const nameArr = ['jack', 'jeff', 'tom', 'candy'];
const nameObj = { john: 25, jane: 30, bob: 25, alice: 35, tom: 30 };

// 陣列
_.countBy(numArr, Math.floor);
// => { '4': 1, '6': 2 }


// 縮寫寫法，會呼叫 _.property
_.countBy(nameArr, 'length');
// => { '3': 1, '4': 2, '5': 1 }


// 不傳函式，就是跑預設的 _.identity
_.countBy(nameArr);
// => { jack: 1, jeff: 1, tom: 1, candy: 1 }


// 物件
_.countBy(nameObj, (value) => \`\${value}歲\`);
// => { '25歲': 2, '30歲': 2, '35歲': 1 }
`
  }

  // #endregion

  // #region _.forEach

  /** _forEach 範例 */
  getForEachExample() {
    return `const arr = [1, 2];
const obj = { john: 25, jane: 30 };

// 陣列
_.forEach(arr, (value, index, collection) => {
  console.log(value, index, collection);
});
// => 1 0 [1, 2]
// => 2 1 [1, 2]


// 中斷循環
_.forEach(arr, (value) => {
  console.log(value);
  return false;
});
// => 1


// 物件
_.forEach(obj, (value, key, collection) => {
  console.log(value, key, collection);
});
// => 25 'john' { john: 25, jane: 30 }
// => 30 'jane' { john: 25, jane: 30 }`
  }

  /** _.forEach 注意事項 */
  getForEachNotes() {
    return `// 注意：如果物件含有 length 屬性，且為正整數，會被當作陣列處理

const weirdObj = { name: 'jj', age: '30', length: 2 };
_.forEach(weirdObj, (value, key) => {
  console.log(value, key);
});
// => undefined 0
// => undefined 1


const weirdObj2 = { name: 'jj', age: '30', length: -2 };
_.forEach(weirdObj2, (value, key) => {
  console.log(value, key);
});
// => 'jj' name
// => '30' age
// => -2 length


// 可用 _.forIn 代替
_.forIn(weirdObj, (value, key) => {
  console.log(key, value);
});
// => 'jj' name
// => '30' age
// => 2 length`
  }


  /** _.forEach 原生 */
  getForEachNativeExample() {
    return `// 不能中斷循環，且只能傳陣列
[1, 2, 3].forEach((value) => {
  console.log(value);
  return false;
});
// => 1
// => 2
// => 3`
  }

  // #endregion

  // #region _.forEachRight

  /** _.forEachRight 範例 */
  getForEachRightExample() {
    return `const arr = [1, 2];
const obj = { john: 25, jane: 30 };

// 陣列
_.forEachRight(arr, (value, index, collection) => {
  console.log(value, index, collection);
});
// => 2 1 [1, 2]
// => 1 0 [1, 2]


// 物件
_.forEachRight(obj, (value, key, collection) => {
  console.log(value, key, collection);
});
// => 30 'jane' { john: 25, jane: 30 }
// => 25 'john' { john: 25, jane: 30 }`;
  }

  // #endregion

  // #region _.every

  /** _.every 範例 */
  getEveryExample() {
    return `const arr = [1, 2, 3];
const obj = { a: 1, b: 2, c: 3 };
const objs = [
  { name: 'John', age: 25 },
  { name: 'Jay', age: 30 }
];


// 陣列
_.every(arr, n => n > 2);
// => false (不是全部都大於 2)


// 物件
_.every(obj, n => n > 0);
// => true (全部都大於 0)


// 縮寫寫法，會呼叫 _.property
_.every(objs, 'age');
// => true (全部都有 age 屬性)


// 縮寫寫法，會呼叫 _.matches
_.every(objs, { age: 25 });
// => false (不是全部 age 都是 25)


// 縮寫寫法，會呼叫 _.matchesProperty
_.every(objs, ['name', 'John']);
// => false (不是全部 name 都是 John)`
  }

  /** _.every 注意事項 */
  getEveryNotes() {
    return `// 注意：跟原生 Array.every 一樣，空集合會回傳 true

_.every([], n => n > 2);
// => true`
  }

  /** _.every 原生 */
  getEveryNativeExample() {
    return `const arr = [1, 2, 3];

arr.every(n => n < 5);
// => true

arr.every(n => n > 2);
// => false`
  }

  // #endregion

  // #region _.filter

  /** _.filter 範例 */
  getFilterExample() {
    return `const arr = [1, 2, 3, 4, 5];
const objs = [
  { name: 'John', age: 25, isMember: true },
  { name: 'Jane', age: 17, isMember: false },
];

_.filter(arr, n => n > 3);
// => [4, 5]


_.filter(objs, { age: 25 });
// => [{ name: 'John', age: 25, isMember: true }]


_.filter(objs, 'isMember');
// => [{ name: 'John', age: 25, isMember: true }]`;
  }

  /** _.filter 原生 */
  getFilterNativeExample() {
    return `const arr = [1, 2, 3, 4, 5];

arr.filter(n => n > 3);
// => [4, 5]`
  }

  // #endregion

  // #region _.find

  /** _.find 範例 */
  getFindExample() {
    return `const arr = [1, 2, 3, 4, 5];
const objs = [
  { name: 'John', age: 25, isMember: true },
  { name: 'Jane', age: 17, isMember: false },
];

_.find(arr, n => n > 1);
// => 2


_.find(arr, n => n > 1, 2);
// => 3 (從 index 2 開始找，第一個大於 1 的數字)


_.find(objs, { age: 17 });
// => { name: 'Jane', age: 17, isMember: false }


_.find(objs, 'isMember');
// => { name: 'John', age: 25, isMember: true }`
  }

  /** _.find 原生 */
  getFindNativeExample() {
    return `const arr = [1, 2, 3, 4, 5];
const objs = [
  { name: 'John', age: 25, isMember: true },
  { name: 'Jane', age: 17, isMember: false },
];

// 不能指定 fromIndex
arr.find(n => n > 1);
// => 2 (第一個大於 1 的數字)


objs.find(x => x.age === 17);
// => { name: 'Jane', age: 17, isMember: false }


objs.find(x => x.isMember);
// => { name: 'John', age: 25, isMember: true }`
  }

  // #endregion

  // #region _.findLast

  /** _.findLast 範例 */
  getFindLastExample() {
    return `const arr = [1, 2, 3, 4, 5];
const objs = [
  { name: 'John', age: 25, isMember: true },
  { name: 'Jane', age: 17, isMember: false },
  { name: 'Bob', age: 30, isMember: true }
];


_.findLast(arr, n => n > 3);
// => 5 (最後一個大於 3 的數字)


_.findLast(objs, 'isMember');
// => { name: 'Bob', age: 30, isMember: true }`
  }

  // #endregion

  // #region _.flatMap

  /** _.flatMap 範例 */
  getFlatMapExample() {
    return `const arr = ['hello', 'world'];
const objs = [
  { student: { scores: [80, 90] } },
  { student: { scores: [70, 60, 50] } },
];


_.flatMap(arr, word => word.split(''));
// => ['h', 'e', 'l', 'l', 'o', 'w', 'o', 'r', 'l', 'd']


_.flatMap(objs, 'student.scores');
// => [80, 90, 70, 60, 50]`;
  }

  /** _.flatMap 原生 */
  getFlatMapNativeExample() {
    return `const arr = ['hello', 'world'];
const objs = [
  { student: { scores: [80, 90] } },
  { student: { scores: [70, 60, 50] } },
];


arr.flatMap(word => word.split(''));
// => ['h', 'e', 'l', 'l', 'o', 'w', 'o', 'r', 'l', 'd']


objs.flatMap(obj => obj.student.scores);
// => [80, 90, 70, 60, 50]`;
  }

  // #endregion

  // #region _.flatMapDeep

  /** _.flatMapDeep 範例 */
  getFlatMapDeepExample() {
    return `const arr = ['hello', 'world'];
const objs = [
  { student: { scores: [80, 90] } },
  { student: { scores: [70, [60, [50]]] } },
];


_.flatMapDeep(arr, word => [word, [word.split('')]]);
// => ['hello', 'h', 'e', 'l', 'l', 'o', 'world', 'w', 'o', 'r', 'l', 'd']


_.flatMapDeep(objs, 'student.scores');
// => [80, 90, 70, 60, 50]`;
  }

  /** _.flatMapDeep 原生 */
  getFlatMapDeepNativeExample() {
    return `const arr = ['hello', 'world'];
const objs = [
  { student: { scores: [80, 90] } },
  { student: { scores: [70, [60, [50]]] } },
];


arr.map(word => [word, [word.split('')]]).flat(Infinity);
// => ['hello', 'h', 'e', 'l', 'l', 'o', 'world', 'w', 'o', 'r', 'l', 'd']


objs.map(obj => obj.student.scores).flat(Infinity);
// => [80, 90, 70, 60, 50]`;
  }

  // #endregion

  // #region _.flatMapDepth

  /** _.flatMapDepth 範例 */
  getFlatMapDepthExample() {
    return `const arr = ['hello', 'world'];
const objs = [
  { student: { scores: [80, 90] } },
  { student: { scores: [70, [60, [50]]] } },
];


_.flatMapDepth(arr, word => [word, [word.split('')]], 2);
// => ['hello', ['h', 'e', 'l', 'l', 'o'], 'world', ['w', 'o', 'r', 'l', 'd']]


_.flatMapDepth(objs, 'student.scores', 2);
// => [80, 90, 70, 60, [50]]`;
  }

  /** _.flatMapDepth 原生 */
  getFlatMapDepthNativeExample() {
    return `const arr = ['hello', 'world'];
const objs = [
  { student: { scores: [80, 90] } },
  { student: { scores: [70, [60, [50]]] } },
];


arr.map(word => [word, [word.split('')]]).flat(2);
// => ['hello', ['h', 'e', 'l', 'l', 'o'], 'world', ['w', 'o', 'r', 'l', 'd']]


objs.map(obj => obj.student.scores).flat(2);
// => [80, 90, 70, 60, [50]]`;
  }

  // #endregion

  // #region _.groupBy

  /** _.groupBy 範例 */
  getGroupByExample() {
    return `const arr = ['hello', 'world', 'hi', 'ok'];
const objs = [
  { student: { scores: [50, 50] } },
  { student: { scores: [60, 60] } },
  { student: { scores: [100] } }
];


_.groupBy(arr, 'length');
// => { '2': ['hi', 'ok'], '5': ['hello', 'world'] }


// 依分數總和分組
_.groupBy(objs, obj => _.sum(obj.student.scores));
// => { '100': [{ student: { scores: [50, 50] } }, { student: { scores: [100] } }], '120': [{ student: { scores: [60, 60] } }] }
`;
  }

  // #endregion

  // #region _.includes

  /** _.includes 範例 */
  getIncludesExample() {
    return `const arr = [1, 2, 3];
const obj = { name: 'jay', age: 20, };
const str = 'hello world';


_.includes(arr, 2);
// => true


_.includes(arr, 4);
// => false


_.includes(arr, 2, 2);
// => false (從 index 2 開始找，找不到 2)


_.includes(obj, 'jay');
// => true


_.includes(str, 'world');
// => true
`;
  }

  /** _.includes 原生 */
  getIncludesNativeExample() {
    return `// 不能處理物件
const arr = [1, 2, 3];
arr.includes(2);
// => true
`;
  }

  // #endregion
}

interface Method {
  /** 名稱 */
  name: string;
  /** 解釋 */
  description: string;
  /** 文件連結 */
  link: string;
  /** 範例 */
  example: string;
  /** 注意事項 */
  notes?: string;
  /** 原生 */
  nativeExample?: string;
}
