# jcm-classnames

A lightweight JavaScript utility performing className concatenation for JSX and CSS modules applications.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Support](#support)
- [Contributing](#contributing)

## Installation

```javascript
npm i jcm-classnames
```

## Usage

- The `cnInit` takes imported CSS module styles object and returns main function that takes any number of string arguments which can be a list of classes separated by " " or "," and returns concatenated string of corresponding styles object values. If class key is not defined, the error will be throwed.

```javascript
import React, { Component } from "react";
import cnInit from "jcm-classnames";
import styles from "./styles.css";
const cn = cnInit(styles);

const Button = () => <button className={cn("btn", "main-btn")} />; // => className={`${styles.btn} ${styles["main-btn"]}`}

export default Button;
```

### Options

```javascript
cn("btn", "main-btn");

cn("btn main-btn");

cn("btn, main-btn red", "active");
```

## Support

Please [open an issue](https://github.com/Fewed/jcm-classnames/issues/new) for support.

## Contributing

Please contribute using [Github Flow](https://guides.github.com/introduction/flow/). Create a branch, add commits, and [open a pull request](https://github.com/Fewed/jcm-classnames/compare).
