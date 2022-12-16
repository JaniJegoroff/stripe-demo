# selenium-ruby example

### Tested setup

```
macOS Monterey
12.6.3
```
```
node -v
v19.2.0
```
```
ruby -v
ruby 3.1.2p20 (2022-04-12 revision 4491bb740a) [x86_64-darwin21]
```
```
chromedriver -v
ChromeDriver 107.0.5304.62
```
```
Chrome browser
Version 107.0.5304.87 (Official Build) (x86_64)
```

### Install dependencies

```
# install Ruby dependencies
gem install bundler
bundle install
```

### Run tests

Run tests in `headed` mode
```
bundle exec rake
```

Run tests in `headless` mode
```
HEADLESS=1 bundle exec rake
```
