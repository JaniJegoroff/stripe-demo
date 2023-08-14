# selenium-ruby example

### Tested setup

```
macOS Monterey
12.6.8
```
```
node -v
v20.5.0
```
```
ruby -v
ruby 3.1.2p20 (2022-04-12 revision 4491bb740a) [x86_64-darwin21]
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
