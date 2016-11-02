function PassportMockedFactory () {
  this._factories = { };
};

PassportMockedFactory.prototype.add = function (name, fn) {
  this._factories[name] = fn;
};

PassportMockedFactory.prototype.build = function () {
  let args = Array.prototype.slice.call(arguments)
    , name = args.shift();

  if (!this.isDefined(name)) {
    throw Error(name + ' has not been defined');
  }

  return this.get(name)(args);
};

PassportMockedFactory.prototype.isDefined = function (name) {
  return !!this.get(name);
};

PassportMockedFactory.prototype.get = function (name) {
  return this._factories[name];
};

module.exports = PassportMockedFactory;
