/**
* Assemble Contrib Plugin: Lunr
* https://github.com/assemble/assemble-contrib-lunr
*
* Copyright (c) 2013 Brian Woodward
* @author: https://github.com/doowb
*
* @param {[type]} params [description]
* @param {Function} callback [description]
* @return {[type]} [description]
*/


var options = {
  stage: 'render:*:*'
};


/**
 * Lunr Search Plugin
 * @param  {Object}   params
 * @param  {Function} callback
 */
module.exports = function(params, callback) {
  'use strict';

  var opts = params.assemble.options;
  opts.lunr = opts.lunr || {};


  callback();
};

module.exports.options = options;
