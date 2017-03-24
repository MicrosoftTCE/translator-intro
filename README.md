# translator-intro
This repository contains two components:
- a website serving as an introductory page to Translator
- userscripts that modify the behavior of Translator

# Website

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

Therefore, any code changes that are pushed to the `gh-pages` branch of this repository will automatically become live at the above URL.

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

# userscripts

The directory `userscripts` contains files intended for use with the [Tampermonkey](https://tampermonkey.net/) web browser extension.

These scripts were installed on Surface tablets to slightly modify the behavior of Translator in the following ways:

- `Translator Join.user.js`
  - Set the applicant name to "Applicant <random number>"
  - Set the language selection based on the "language" URL parameter
- `Translator Chat.user.js`
  - Redirect user back to this website when Translator displays an exit dialogue
  - Redirect user back to this website when Translator force-exits the user
  
## Installing

To install these scripts on a web browser so that Translator's behavior is modified as described above:

1. Install the [Tampermonkey](https://tampermonkey.net/) extension

2. Install the two scripts by browsing to their raw JavaScript representation in this repository. Tampermonkey should ask you to install them upon browsing to them. Please ensure you use the `gh-pages` branch:
    - https://github.com/MicrosoftTCE/translator-intro/raw/gh-pages/userscripts/Translator%20Chat.user.js
    - https://github.com/MicrosoftTCE/translator-intro/raw/gh-pages/userscripts/Translator%20Join.user.js
