(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (global = global || self, factory(global.IotaAreaCodes = {}));
}(this, (function (exports) { 'use strict';

  /**
   * Create an Invoice.
   * @param options The Cetusteck invoice fields
   * @returns The result string.
   */
  function create(options) {
      return "ok";
  }

  exports.create = create;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
