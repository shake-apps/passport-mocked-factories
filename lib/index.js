let PassportMockedFactories = require('./passport_mocked_factories');

let passport_mocked_factories = new PassportMockedFactories();

let factories = require('./factories');
Object.keys(factories).forEach(function (factory) {
  passport_mocked_factories.add(factory, factories[factories]);
});

return passport_mocked_factories;
