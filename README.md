[![npm version](https://badge.fury.io/js/%40louislombardo%2Fbabel-plugin-fix-font-awesome.svg)](https://badge.fury.io/js/%40louislombardo%2Fbabel-plugin-fix-font-awesome)

[Blog Post](https://medium.com/@louislombardoiv/babel-for-fun-and-profit-d680e9c81323)

## Installation

```shell
npm i -D @louislombardo/babel-plugin-fix-font-awesome
```

In your babel config:

```js
module.exports = {
  presets: ["module:metro-react-native-babel-preset"],
  plugins: ["@louislombardo/babel-plugin-fix-font-awesome"],
}
```

## Fix Font Awesome

This is a Babel plugin aimed at transforming imports from Font Awesome to reduce React Native bundle sizes

This:

```ts
import { faBadgeCheck } from '@fortawesome/pro-solid-svg-icons';
import { faCheck, faCalendar as proCalendarIcon } from '@fortawesome/pro-regular-svg-icons';
```

Becomes this:

```ts
import { faBadgeCheck } from '@fortawesome/pro-solid-svg-icons/faBadgeCheck';
import { faCheck } from '@fortawesome/pro-regular-svg-icons/faCheck';
import { faCalendar as proCalendarIcon } from '@fortawesome/pro-regular-svg-icons/faCalendar';
```

