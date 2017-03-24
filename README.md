# translator-intro
Translator introduction website.

## Setup

1. Install [Git](https://git-scm.com/), [Ruby](https://www.ruby-lang.org), then [RubyGems](https://rubygems.org), then [Bundler](http://bundler.io/).

2. Download code:
```sh
git clone git@github.com:MicrosoftTCE/translator-intro.git
```

3. Install [Jekyll](https://jekyllrb.com/):
```sh
cd translator-intro
bundle install
```

## Run development server

After performing the above setup:

```sh
bundle exec jekyll serve
```

You should now be able to see the website at http://127.0.0.1:4000

## Serving website

### On GitHub (recommended)

This site is currently served from [GitHub Pages](https://pages.github.com/), which [automatically builds Jekyll sites](https://help.github.com/articles/using-jekyll-as-a-static-site-generator-with-github-pages/).

https://microsofttce.github.io/translator-intro/

Therefore, any code changes that are pushed to this repository will automatically become live at the above URL.

### Elsewhere

To serve this project from a hosting location other than GitHub Pages (after completing above setup):

1. Build the site
```sh
bundle exec jekyll build
```

2. Host the contents of the `_site` directory however you'd like:
```sh
cd _site
python -m SimpleHTTPServer
```
