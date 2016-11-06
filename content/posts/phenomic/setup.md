---
title: Phenomicはじめてみませんか？
date: 2016-09-21
layout: Post
tag: phenomic
entryread: Phenomicのインストール編
authors:
  - trkw
image: 'phenomic.jpg'
badge: 'phenomic.svg'
---

# インストール編

このブログで初めに紹介した静的サイトジェネレータのPhenomicのインストール編。

今回はインストールから起動までを書いていきたいと思います。

# 前提

Node.jsのインストールから使い方は各自調べて。

動かなくても各自調べて。

# 準備
Phenomicを使うには少なくとも、下記環境が必要と公式に書かれているので、私はこのバージョンより高いもので対応してます。

- `Node.js@^4.2.0`
- `npm@^3.0.0`

Node.jsのバージョン管理にはnvmを推奨と書かれていますが、これも慣れたものでいいでしょう。
特に説明するつもりはないので各自で整えてください。
ちなみに私はanyenvでndenvを使ってます。

# 簡易なセットアップ

お使いの環境に応じてコマンドを入力しましょう。

## macOS / Linux

```
DIR=your-website-folder && mkdir $DIR && cd $DIR && mkdir node_modules && \
npm i Phenomic && ./node_modules/.bin/Phenomic setup && npm i && npm start
```

## Windows

```
SET DIR=your-website-folder && mkdir %DIR% && cd %DIR% && mkdir node_modules && ^
npm i phenomic && ./node_modules/.bin/phenomic setup && npm i && npm start
```

恐らくこのコマンドで、環境は整いますがもう少し詳細にコマンドの説明をしていきます。

# インストールの詳細

## サイト名のディレクトリを作成

サイトのディレクトリを作成します。

```
DIR=your-website-folder
mkdir $DIR && cd $DIR
```

## node_modulesディレクトリの作成

サイト内にPhenomicをインストールするよう、node_modulesディレクトリを作成します。
作成したディレクトリのスコープでインストールすることが出来ます。

```
mkdir node_modules
```

## npmからインストールする場合

npmで管理されてる安定したバージョンを指定してインストールすることが出来ます。

```
npm i phenomic
```

## gitからインストールする場合

PhenomicはGitHubだけではなく、GitLab、BitBucketでもソース管理をしてるためリモートリポジトリは好きなところを設定してください。

またgitの場合、最新のコミットを取得できます。

```
npm i babel-cli babel-preset-react babel-preset-es2015 babel-preset-stage-1 babel-plugin-flow-react-proptypes
npm i https://github.com/MoOx/phenomic.git
```

## セットアップ

セットアップが実行されます。

```
./node_modules/.bin/phenomic setup
```

下記の入力を元に、package.jsonが生成されます。

```
Note: All values can be adjusted later.
? Dashed name of your project (eg: my-project)
? Website url (eg: http://abc.xyz/)
? Repository url (eg: https://github.com/MoOx/phenomic.git, optional)
? Twitter nickname (eg: MoOx, optional)
? Do you want a CNAME file (eg: for GitHub Pages)? (y/N)
Generated package.json file
Copied boilerplate
Setup done. Now run "npm install" to get started
```

## 依存パッケージのインストール

```
npm i
```
## ページの確認

```
npm start
```

Phenomicが起動します。

```
phenomic:builder:server Dev server started on http://0.0.0.0:3333/ +0ms
```

`npm start`はpackage.jsonを読むと`phenomic start`が実行されている。

`0.0.0.0:3333`で自動起動します。ファイルの編集を行うと自動更新されます。

はじめのセットは下記のようなページが表示されました。

![phenomic-browser](https://cloud.githubusercontent.com/assets/2557813/18695047/0d574b26-7fea-11e6-9402-9cb7848fd06d.png)

# 次回
Phenomicの使い方について書いていきたいと思います。