"use strict";var s=function(e,r){return function(){try{return r||e((r={exports:{}}).exports,r),r.exports}catch(a){throw (r=0, a)}};};var t=s(function(R,u){
var d=require('@stdlib/blas-ext-base-gsumors/dist').ndarray;function f(e,r,a,c){return e<=0?NaN:d(e,r,a,c)/e}u.exports=f
});var i=s(function(b,n){
var m=require('@stdlib/strided-base-stride2offset/dist'),y=t();function p(e,r,a){return y(e,r,a,m(e,a))}n.exports=p
});var v=s(function(h,q){
var x=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),o=i(),g=t();x(o,"ndarray",g);q.exports=o
});var l=v();module.exports=l;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
