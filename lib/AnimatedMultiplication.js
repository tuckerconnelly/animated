









'use strict';var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}

var AnimatedWithChildren=require('./AnimatedWithChildren');
var Animated=require('./Animated');
var AnimatedValue=require('./AnimatedValue');
var AnimatedInterpolation=require('./AnimatedInterpolation');
var Interpolation=require('./Interpolation');var



AnimatedMultiplication=function(_AnimatedWithChildren){_inherits(AnimatedMultiplication,_AnimatedWithChildren);



function AnimatedMultiplication(a,b){_classCallCheck(this,AnimatedMultiplication);var _this=_possibleConstructorReturn(this,(AnimatedMultiplication.__proto__||Object.getPrototypeOf(AnimatedMultiplication)).call(this));

_this._a=typeof a==='number'?new AnimatedValue(a):a;
_this._b=typeof b==='number'?new AnimatedValue(b):b;return _this;
}_createClass(AnimatedMultiplication,[{key:'__getValue',value:function __getValue()

{
return this._a.__getValue()*this._b.__getValue();
}},{key:'interpolate',value:function interpolate(

config){
return new AnimatedInterpolation(this,Interpolation.create(config));
}},{key:'__attach',value:function __attach()

{
this._a.__addChild(this);
this._b.__addChild(this);
}},{key:'__detach',value:function __detach()

{
this._a.__removeChild(this);
this._b.__removeChild(this);
}}]);return AnimatedMultiplication;}(AnimatedWithChildren);


module.exports=AnimatedMultiplication;