# Meteor mocks

These files provide some mocking ability for Meteor.
It doesn't cover everything (yet), we are adding things
as we need them.

### meteor/meteor.js

This file supports Meteor methods, and will return data.
In your `.stories` file, you can "prime" the data to be returned
by importing `{ Meteor }` as per normal. and then use

`Meteor.prime('method-name', params)`

any subsequent call, eg

`const result = Meteor.call('method-name',id,data:[...])`

will return the data from `Meteor.prime()`.

The mock function for `Meteor.call` doesn't look
at the parameters, but it could do, if that were needed
to allow for different test cases.
