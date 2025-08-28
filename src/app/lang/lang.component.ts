import { Component, OnInit } from '@angular/core';

import { Method } from '../models/method.model';
import _ from 'lodash';

@Component({
  selector: 'app-lang',
  templateUrl: '../shared/method-list.template.html',
})
export class LangComponent implements OnInit {
  /** 標題 */
  title = 'Lang';
  /** 列表 */
  methods: Array<Method> = [];

  ngOnInit(): void {
    this.methods = [
      // isNative
      {
        name: '_.isNative(value)',
        description: '檢查是否為原生函式',
        link: 'https://lodash.com/docs/4.17.15#isNative',
        example: this.getIsNativeExample(),
        nativeExample: this.getIsNativeNativeExample()
      },

      // isNil
      {
        name: '_.isNil(value)',
        description: '檢查是否為 null 或 undefined',
        link: 'https://lodash.com/docs/4.17.15#isNil',
        example: this.getIsNilExample(),
        nativeExample: this.getIsNilNativeExample(),
      },

      // isNull
      {
        name: '_.isNull(value)',
        description: '檢查是否為 null',
        link: 'https://lodash.com/docs/4.17.15#isNull',
        example: this.getIsNullExample(),
        nativeExample: this.getIsNullNativeExample()
      },

      // isUndefined
      {
        name: '_.isUndefined(value)',
        description: '檢查是否為 undefined',
        link: 'https://lodash.com/docs/4.17.15#isUndefined',
        example: this.getIsUndefinedExample(),
        nativeExample: this.getIsUndefinedNativeExample()
      },

      // isNumber
      {
        name: '_.isNumber(value)',
        description: '檢查是否為數值(原始或物件)',
        link: 'https://lodash.com/docs/4.17.15#isNumber',
        example: this.getIsNumberExample(),
        nativeExample: this.getIsNumberNativeExample()
      },

      // isString
      {
        name: '_.isString(value)',
        description: '檢查是否為字串 (原始或物件)',
        link: 'https://lodash.com/docs/4.17.15#isString',
        example: this.getIsStringExample(),
        nativeExample: this.getIsStringNativeExample()
      },

      // isObject
      {
        name: '_.isObject(value)',
        description: '檢查是否為物件 (包括：陣列、函式、物件、正則、數值物件、字串物件)',
        link: 'https://lodash.com/docs/4.17.15#isObject',
        example: this.getIsObjectExample(),
        nativeExample: this.getIsObjectNativeExample()
      },

      // isObjectLike
      {
        name: '_.isObjectLike(value)',
        description: '檢查是否「類物件」(不是 null 且 typeof === "object")',
        link: 'https://lodash.com/docs/4.17.15#isObjectLike',
        example: this.getIsObjectLikeExample(),
        nativeExample: this.getIsObjectLikeNativeExample()
      },

      // isPlainObject
      {
        name: '_.isPlainObject(value)',
        description: '檢查是否為純物件 (Object建構函式 or 無原型/Object原型)',
        link: 'https://lodash.com/docs/4.17.15#isPlainObject',
        example: this.getIsPlainObjectExample(),
        nativeExample: this.getIsPlainObjectNativeExample()
      },

      // isRegExp
      {
        name: '_.isRegExp(value)',
        description: '檢查是否為正則',
        link: 'https://lodash.com/docs/4.17.15#isRegExp',
        example: this.getIsRegExpExample(),
        nativeExample: this.getIsRegExpNativeExample()
      },

      // isSafeInteger
      {
        name: '_.isSafeInteger(value)',
        description: '檢查是否為安全整數',
        link: 'https://lodash.com/docs/4.17.15#isSafeInteger',
        example: this.getIsSafeIntegerExample(),
        nativeExample: this.getIsSafeIntegerNativeExample()
      },

      // isSet
      {
        name: '_.isSet(value)',
        description: '檢查是否為 Set',
        link: 'https://lodash.com/docs/4.17.15#isSet',
        example: this.getIsSetExample(),
        nativeExample: this.getIsSetNativeExample()
      },

      // isSymbol
      {
        name: '_.isSymbol(value)',
        description: '檢查是否為 Symbol (原始或物件)',
        link: 'https://lodash.com/docs/4.17.15#isSymbol',
        example: this.getIsSymbolExample(),
        nativeExample: this.getIsSymbolNativeExample(),
        references: [
          { label: 'Symbol', url: 'https://pjchender.dev/javascript/js-symbols/' }
        ]
      },

      // isTypedArray
      {
        name: '_.isTypedArray(value)',
        description: '檢查是否為 TypedArray',
        link: 'https://lodash.com/docs/4.17.15#isTypedArray',
        example: this.getIsTypedArrayExample(),
        nativeExample: this.getIsTypedArrayNativeExample(),
        references: [
          { label: 'TypedArray', url: 'https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Guide/Typed_arrays' }
        ]
      },

      // isWeakMap
      {
        name: '_.isWeakMap(value)',
        description: '檢查是否為 WeakMap',
        link: 'https://lodash.com/docs/4.17.15#isWeakMap',
        example: this.getIsWeakMapExample(),
        nativeExample: this.getIsWeakMapNativeExample(),
        references: [
          { label: 'JS記憶體管理', url: 'https://ithelp.ithome.com.tw/articles/10287533' },
          { label: 'WeakSet與WeakMap', url: 'https://ithelp.ithome.com.tw/articles/10297503' }
        ]
      },

      // isWeakSet
      {
        name: '_.isWeakSet(value)',
        description: '檢查是否為 WeakSet',
        link: 'https://lodash.com/docs/4.17.15#isWeakSet',
        example: this.getIsWeakSetExample(),
        nativeExample: this.getIsWeakSetNativeExample(),
        references: [
          { label: 'JS記憶體管理', url: 'https://ithelp.ithome.com.tw/articles/10287533' },
          { label: 'WeakSet與WeakMap', url: 'https://ithelp.ithome.com.tw/articles/10297503' }
        ]
      }
    ];
  }

  // #region _.isNative

  /** isNative範例 */
  getIsNativeExample() {
    return `// 檢查原生函式
_.isNative(Array.prototype.push); // true
_.isNative(Object.keys);          // true

// 檢查自定義函式
function myFunction() {}
_.isNative(myFunction);           // false

// 檢查 Lodash 函式
_.isNative(_.map);                // false`;
  }

  /** isNative原生範例 */
  getIsNativeNativeExample() {
    return `const isNative = (v: any) => typeof v === 'function' && /\[native code\]/.test(v.toString());

// 檢查原生函式
isNative(Array.prototype.push); // true
isNative(Object.keys);          // true

// 檢查自定義函式
function myFunction() {}
isNative(myFunction);           // false

// 檢查 Lodash 函式
isNative(_.map);                // false`;
  }

  // #endregion

  // #region _.isNil / _.isNull / _.isUndefined

  /** isNil範例 */
  getIsNilExample() {
    return `_.isNil(null);       // true  (null)
_.isNil(undefined);  // true  (undefined)
_.isNil(NaN);        // false (NaN)`;
  }

  /** isNil原生範例 */
  getIsNilNativeExample() {
    return `const isNil = (v: any) => v === null || v === undefined;

isNil(null);       // true  (null)
isNil(undefined);  // true  (undefined)
isNil(NaN);        // false (NaN)`;
  }

  /** isNull範例 */
  getIsNullExample() {
    return `_.isNull(null);      // true  (null)
_.isNull(undefined); // false (undefined)`;
  }

  /** isNull原生範例 */
  getIsNullNativeExample() {
    return `const isNull = (v: any) => v === null;

isNull(null);      // true  (null)
isNull(undefined); // false (undefined)`;
  }

  /** isUndefined範例 */
  getIsUndefinedExample() {
    return `_.isUndefined(undefined); // true  (undefined)
_.isUndefined(null);      // false (null)`;
  }

  /** isUndefined原生範例 */
  getIsUndefinedNativeExample() {
    return `const isUndefined = (v: any) => v === undefined;

isUndefined(undefined); // true  (undefined)
isUndefined(null);      // false (null)`;
  }

  // #endregion

  // #region _.isNumber / _.isString

  /** isNumber範例 */
  getIsNumberExample() {
    return `_.isNumber(3);              // true  (數值)
_.isNumber(new Number(3));  // true  (數值物件)
_.isNumber(NaN);            // true  (NaN)
_.isNumber('3');            // false (字串)`;
  }

  /** isNumber原生範例 */
  getIsNumberNativeExample() {
    return `const isNumber = (v: any) => typeof v === 'number' || v instanceof Number;

isNumber(3);              // true  (數值)
isNumber(new Number(3));  // true  (數值物件)
isNumber(NaN);            // true  (NaN)
isNumber('3');            // false (字串)`;
  }

  /** isString範例 */
  getIsStringExample() {
    return `_.isString('abc');             // true  (原始字串)
_.isString(new String('abc')); // true  (字串物件)
_.isString(1);                 // false (數值)`;
  }

  /** isString原生範例 */
  getIsStringNativeExample() {
    return `const isString = (v: any) => typeof v === 'string' || v instanceof String;

isString('abc');             // true  (原始字串)
isString(new String('abc')); // true  (字串物件)
isString(1);                 // false (數值)`;
  }

  // #endregion

  // #region _.isObject / _.isObjectLike
  /** isObject範例 */
  getIsObjectExample() {
    return `// 物件
_.isObject([]);               // true  (陣列)
_.isObject({});               // true  (物件)
_.isObject(function(){});     // true  (函式)
_.isObject(/abc/);            // true  (正則)
_.isObject(new Number(0));    // true  (數值物件)
_.isObject(new String(''));   // true  (字串物件)

// 非物件
_.isObject(42);               // false (數值)
_.isObject('hello');          // false (字串)
_.isObject(true);             // false (布林)
_.isObject(null);             // false (null)
_.isObject(undefined);        // false (undefined)`;
  }

  /** isObject原生範例 */
  getIsObjectNativeExample() {
    return `const isObject = (v: any) => v !== null && (typeof v === 'object' || typeof v === 'function');

// 物件
isObject([]);               // true  (陣列)
isObject({});               // true  (物件)
isObject(function(){});     // true  (函式)
isObject(/abc/);            // true  (正則)
isObject(new Number(0));    // true  (數值物件)
isObject(new String(''));   // true  (字串物件)

// 非物件
isObject(42);               // false (數值)
isObject('hello');          // false (字串)
isObject(true);             // false (布林)
isObject(null);             // false (null)
isObject(undefined);        // false (undefined)`;
  }

  /** isObjectLike範例 */
  getIsObjectLikeExample() {
    return `// 物件 (object-like)
_.isObjectLike([]);               // true  (陣列)
_.isObjectLike({});               // true  (物件)
_.isObjectLike(/abc/);            // true  (正則)
_.isObjectLike(new Number(0));    // true  (數值物件)
_.isObjectLike(new String(''));   // true  (字串物件)

// 非物件 (非 object-like)
_.isObjectLike(function(){});     // false (函式)
_.isObjectLike(42);               // false (數值)
_.isObjectLike('hello');          // false (字串)
_.isObjectLike(true);             // false (布林)
_.isObjectLike(null);             // false (null)
_.isObjectLike(undefined);        // false (undefined)`;
  }

  /** isObjectLike原生範例 */
  getIsObjectLikeNativeExample() {
    return `const isObjectLike = (v: any) => v !== null && typeof v === 'object';

// 物件 (object-like)
isObjectLike([]);               // true  (陣列)
isObjectLike({});               // true  (物件)
isObjectLike(/abc/);            // true  (正則)
isObjectLike(new Number(0));    // true  (數值物件)
isObjectLike(new String(''));   // true  (字串物件)
isObjectLike(new Date());       // true  (日期物件)

// 非物件 (非 object-like)
isObjectLike(function(){});     // false (函式)
isObjectLike(42);               // false (數值)
isObjectLike('hello');          // false (字串)
isObjectLike(true);             // false (布林)
isObjectLike(null);             // false (null)
isObjectLike(undefined);        // false (undefined)`;
  }

  // #endregion

  // #region _.isPlainObject

  /** isPlainObject範例 */
  getIsPlainObjectExample() {
    return `class Person {
  age: number;
  constructor() {
    this.age = 18;
  }
}

_.isPlainObject({ x: 0, y: 0 });                  // true  (純物件)
_.isPlainObject(new Object());                    // true  (Object建構函式)
_.isPlainObject(new Person());                    // false (自訂建構函式)
_.isPlainObject(Object.create(Object.prototype)); // true  (Object原型)
_.isPlainObject(Object.create(null));             // true  (無原型)
_.isPlainObject(Object.create({ p: 1 }));         // false (自訂原型)`;
  }

  /** isPlainObject原生範例 */
  getIsPlainObjectNativeExample() {
    return `const isPlainObject = (v: any) => {
  const proto = Object.getPrototypeOf(v);
  return v !== null && (proto === Object.prototype || proto === null)
}

isPlainObject({ x: 0, y: 0 });                  // true  (純物件)
isPlainObject(new Object());                    // true  (Object建構函式)
isPlainObject(new Person());                    // false (自訂建構函式)
isPlainObject(Object.create(Object.prototype)); // true  (Object原型)
isPlainObject(Object.create(null));             // true  (無原型)
isPlainObject(Object.create({ p: 1 }));         // false (自訂原型)`;
  }

  // #endregion

  // #region _.isRegExp

  /** isRegExp範例 */
  getIsRegExpExample() {
    return `_.isRegExp(/abc/);             // true  (正則)
_.isRegExp('/abc/');           // false (字串)
_.isRegExp(new RegExp('abc')); // true  (正則)`;
  }

  /** isRegExp原生範例 */
  getIsRegExpNativeExample() {
    return `const isRegExp = (v: any) => v instanceof RegExp;

isRegExp(/abc/);             // true  (正則)
isRegExp('/abc/');           // false (字串)
isRegExp(new RegExp('abc')); // true  (正則)`;
  }

  // #endregion

  // #region _.isSafeInteger

  /** isSafeInteger範例 */
  getIsSafeIntegerExample() {
    return `_.isSafeInteger(3);                           // true  (整數)
_.isSafeInteger(Number.MAX_SAFE_INTEGER);     // true  (最大安全整數)
_.isSafeInteger(Number.MAX_SAFE_INTEGER + 1); // false (超過安全範圍)
_.isSafeInteger(Infinity);                    // false (Infinity)
_.isSafeInteger('3');                         // false (字串)`;
  }

  /** isSafeInteger原生範例 */
  getIsSafeIntegerNativeExample() {
    return `Number.isSafeInteger(3);                           // true  (整數)
Number.isSafeInteger(Number.MAX_SAFE_INTEGER);     // true  (最大安全整數)
Number.isSafeInteger(Number.MAX_SAFE_INTEGER + 1); // false (超過安全範圍)
Number.isSafeInteger(Infinity);                    // false (Infinity)
Number.isSafeInteger('3');                         // false (字串)`;
  }

  // #endregion

  // #region _.isSet

  getIsSetExample() {
    return `_.isSet(new Set);      // true  (Set)
_.isSet(new WeakSet);  // false (WeakSet)`;
  }

  getIsSetNativeExample() {
    return `const isSet = (v: any) => v instanceof Set;

isSet(new Set());      // true  (Set)
isSet(new WeakSet());  // false (WeakSet)`;
  }

  // #endregion

  // #region _.isSymbol

  getIsSymbolExample() {
    return `_.isSymbol(Symbol('a'));         // true  (Symbol)
_.isSymbol('abc');               // false (字串)
_.isSymbol(Object(Symbol('a'))); // true  (Symbol 物件)`;
  }

  getIsSymbolNativeExample() {
    return `const isSymbol = (v: any) => typeof v === 'symbol' || v instanceof Symbol;

isSymbol(Symbol('a'));          // true  (Symbol)
isSymbol('abc');                // false (字串)
isSymbol(Object(Symbol('a')));  // true  (Symbol 物件)`;
  }

  // #endregion

  // #region _.isTypedArray

  getIsTypedArrayExample() {
    return `_.isTypedArray(new Uint8Array);   // true  (Uint8Array)
_.isTypedArray(new Float32Array); // true  (Float32Array)
_.isTypedArray([]);               // false (一般陣列)`;
  }

  getIsTypedArrayNativeExample() {
    return `const isTypedArray = (v: any) => ArrayBuffer.isView(v) && !(v instanceof DataView);

isTypedArray(new Uint8Array());   // true  (Uint8Array)
isTypedArray(new Float32Array()); // true  (Float32Array)
isTypedArray([]);                 // false (一般陣列)`;
  }

  // #endregion

  // #region _.isWeakMap

  getIsWeakMapExample() {
    return `_.isWeakMap(new WeakMap); // true  (WeakMap)
_.isWeakMap(new Map);     // false (Map)`;
  }

  getIsWeakMapNativeExample() {
    return `const isWeakMap = (v: any) => v instanceof WeakMap;

isWeakMap(new WeakMap()); // true  (WeakMap)
isWeakMap(new Map());     // false (Map)`;
  }

  // #endregion

  // #region _.isWeakSet

  getIsWeakSetExample() {
    return `_.isWeakSet(new WeakSet); // true  (WeakSet)
_.isWeakSet(new Set);     // false (Set)`;
  }

  getIsWeakSetNativeExample() {
    return `const isWeakSet = (v: any) => v instanceof WeakSet;

isWeakSet(new WeakSet()); // true  (WeakSet)
isWeakSet(new Set());     // false (Set)`;
  }

  // #endregion
}

