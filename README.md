# meteor-storybook-stubs

Some stubs to make it easier to use Storybook in a Meteor project

Currently using an older version of Storybook that is node 14 compatible

Look in `example/.storybook/__mocks__/meteor` for Meteor mocks

### Incomplete

This is by no means complete. I added things to allow to storybook to run and be useful. You can take it further and contribute

It does not support any Tracker functions or database read/writes

You can stub your own Meteor methods if you want, that's not hard to do

# Why use Storybook?

Storybook is useful for a number of things

1. To preview components before the app is finished (eg in design phase)
1. To preview components with different data, including long texts, foreign languages etc
1. To test components with data that may be hard to do in the finished app itself.
1. As a reference for your designs
1. As a kind of documentation

# Is this necessary?

If you use the React container pattern properly, and separate out any Meteor and API calls into wrapper components, or a context, then you won't need it.

If you have programmers who don't follow the pattern, or an existing code base, then you will need it to help you get Storybook to a point where it helps you.
