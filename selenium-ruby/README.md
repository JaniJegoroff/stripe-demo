# selenium-ruby example

### Tested setup

```
macOS Monterey
12.6.1
```
```
node -v
v18.10.0
```
```
ruby -v
ruby 3.1.2p20 (2022-04-12 revision 4491bb740a) [x86_64-darwin21]
```
```
chromedriver -v
ChromeDriver 105.0.5195.52 (412c95e
```
```
Chrome browser
Version 105.0.5195.102 (Official Build) (x86_64)
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
