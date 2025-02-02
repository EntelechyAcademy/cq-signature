# Contributing

Thank you so much for your interest in contributing! Below is a quick checklist to follow to help keep the contribution process quick!

## TL;DR: Checklist

When opening an [issue](#issues):
- [ ] search open/closed issues
- [ ] discuss bug/enhancement in new or old issue

[PR](#prs) time:
- [ ] write tests
- [ ] implement feature/fix bug
- [ ] update docs
- [ ] make a note in change log

Remember, you don't need to do it all yourself; any of these are helpful! 😎

## Issues

### Search open + closed issues for similar cases.

You may find an open issue that closely matches what you are thinking. You
may also find a closed issue with discussion that either solves your problem
or explains why we are unlikely to solve it in the near future.

If you find a matching issue that is open, and marked `accepted` and/or `help
wanted`, you might want to [open a PR](#prs).

### Open an issue.

Let's discuss your issue. Could be as simple as unclear documentation or a
wonky config file.
If you're suggesting a feature, it might exist and need better
documentation, or it might be in process. Even given those, some discussion might
be warranted to ensure the enhancement is clear.

You're welcome to jump right to a PR, but without a discussion, can't make any
guarantees about merging.

That said: sometimes seeing the code makes the discussion clearer.😄

This is a helpful contribution all by itself. Thanks!

## PRs

If you would like to implement something, firstly: thanks! Community contributions
are a magical thing: They make open source possible.

**Working on your first Pull Request?**
You can learn how from this _free_ series [How to Contribute to an Open Source Project on GitHub](https://egghead.io/series/how-to-contribute-to-an-open-source-project-on-github).

Here are some things to keep in mind when working on a PR:

#### Tests

A PR that is just failing test cases for an existing issue is very helpful, as this
can take as much time (if not more) as it takes to implement a new feature or fix
a bug.

If you only have enough time to write tests, fantastic! Submit away. This is a great
jumping-off point for a core contributor or even another PR to continue what you've started.

#### Docs

For changes and new features, please add or update the relevant docs. These are either in [~/docs][./docs] or in the
docs directory under the specific app module in [~/app-modules][./app-modules].

Bugfixes may not warrant docs changes, though it's worth skimming the existing
docs to see if there are any relevant caveats that need to be removed.

## Code of Conduct

This is not so much a set of guidelines as a reference for what I hope may become
a shared perspective on the project. Comments are welcome, I'd like this to be as clear as possible.

### Empathy

People have feelings and perspectives, and people say and believe things for good reasons.

If you find that you summarily disagree with a perspective stated by someone else,
you likely each have histories that have moved you in opposite directions on a continuum
that probably does not have a "wrong" or "right" end. It may be that you simply
are working toward different goals that require different strategies. Every decision
has pros and cons, and could result in some winners and some losers. It's great to
discuss this so that both are well-known, and realize that even with infinite discussion,
cons and losers will likely never go to zero.

Also note that we're not doing brain surgery here, so while it's fine if we spend some time
understanding each other, cordial disagreement should not be expensive in the
long run, and we can accept that we will get some things wrong before we get them right (if ever!).

If we can all get together behind the common goal of embracing empathy, everything else should be able to work itself out.

#### Attribution

The majority of this doc was inspired (or straight up thiefed) from the excellent CONTRIBUTING.md file from the `eslint-plugin-import` npm package,
which in turn was inspired by https://mozillascience.github.io/working-open-workshop/contributing/.
Thank you!
