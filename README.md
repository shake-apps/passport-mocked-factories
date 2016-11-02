# Passport-mocked-factories
Designed as an easy way to create full profile reponses for passport

#### How to use in your code

```javascript
if (process.env.NODE_ENV == 'test' ) {
  Strategy = require('passport-mocked').Strategy;
} else {
  Strategy = require('passport-facebook').Strategy;
}

passport.use(new Strategy({
    name: 'facebook',
    clientID: process.env.FACEBOOK_APP_ID,
    clientSecret: process.env.FACEBOOK_APP_SECRET,
    callbackURL: "http://localhost:3000/auth/facebook/callback"
  },
  function (accessToken, refreshToken, profile, done) {
    User.findOrCreate({ facebookId: profile.id }, function (err, user) {
      return done(err, user);
    });
  });
);
```

#### How to use in your test

```javascript

// the node app needs to be loaded and running in the same process as the tests
// using the testing framework of your choice
// probably something like selenium, since you'll most likely need a browser

let passportMockedFactories = require('passport-mocked-factories');
var passport = require('passport');

this.When(^/I log in to facebook as:$/, function (table) {
  passport._strategies.facebook._profile = passportMockedFactories.build('Facebook', table.hashes()[0]);
  return browser.get('/auth/facebook');
});
```