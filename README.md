# sibling

在App中渲染兄弟组件

[![Build Status](https://travis-ci.org/react-native-pure/sibling.svg?branch=master)](https://travis-ci.org/react-native-pure/sibling)
[![Coverage Status](https://coveralls.io/repos/github/react-native-pure/sibling/badge.svg?branch=master)](https://coveralls.io/github/react-native-pure/sibling?branch=master)
[![npm version](https://img.shields.io/npm/v/@react-native-pure/sibling.svg)](https://www.npmjs.com/package/@react-native-pure/sibling)
[![npm license](https://img.shields.io/npm/l/@react-native-pure/sibling.svg)](https://www.npmjs.com/package/@react-native-pure/sibling)
[![npm download](https://img.shields.io/npm/dm/@react-native-pure/sibling.svg)](https://www.npmjs.com/package/@react-native-pure/sibling)
[![npm download](https://img.shields.io/npm/dt/@react-native-pure/sibling.svg)](https://www.npmjs.com/package/@react-native-pure/sibling)

## Install

```
$ npm i @react-native-pure/sibling
```

## Simple Usage

```
import Sibling from "@react-native-pure/sibling"

//添加
const remove=Sibling.append(
    <View>
        ...
    </View>
);

//删除
remove();

```
