---
title: Slack Beta 試しましたか？
date: 2016-09-20
layout: Post
tag: slack
badge: slack.svg
authors:
  - trkw
---

[Slack beta](https://slack.com/beta/osx)が「早い」「早くなった気がする」「faster」と皆さん言ってるので、
どんな感じなのかと調べてみることにする。

# 早速

既存のアカウントで起動時間と使用メモリをテストしてみる。

# 起動時間
まずは起動時間を計測してみた

## Old Slack

起動時間: 00:10:34

割りといつもこんくらいかかってる。

![old](https://cloud.githubusercontent.com/assets/2557813/18638134/f174c0d0-7ec9-11e6-9099-cb4b826017a5.gif)


## New Slack Beta

起動時間: 00:05:46

おおー確かに早い。

![new](https://cloud.githubusercontent.com/assets/2557813/18638170/1d0d4ef6-7eca-11e6-857a-6a280274c192.gif)

# プロセスのCPU、メモリ使用率

アクティビティモニタで見てみたけど、
Slack betaではSlack Helperというものが動くようになっている。

Chromeみたいな感じがします。

## CPU使用率

<img width="674" alt="2016-09-20 1 47 34" src="https://cloud.githubusercontent.com/assets/2557813/18640741/671467be-7ed4-11e6-8e3e-b2feb4c5f0ce.png">

## メモリ使用率

<img width="606" alt="2016-09-20 0 56 24" src="https://cloud.githubusercontent.com/assets/2557813/18639158/b98eed86-7ecd-11e6-8807-deebb995a113.png">



# UIの変化

<img width="1064" alt="2016-09-20 1 09 01" src="https://cloud.githubusercontent.com/assets/2557813/18639458/f5126ee0-7ece-11e6-929a-b1ff733ed7e3.png">

## アプリケーション全体

タイトル部分（閉じる、最小化、ズーム含む）に区切りがないよう美しいUIに刷新された。

## サイドメニュー

サイドメニューの幅は若干広くなり、チームアイコンが大きくなった。

チームのアイコンはカラースキームに応じて変化する

![color](https://cloud.githubusercontent.com/assets/2557813/18640992/9d563504-7ed5-11e6-867b-6dc3d9207efe.gif)


## メニューバー

メニューバーにアイコンがでるようになりました。
ここから各チームへのアクセスが可能となる。

必要のない人やこれだけでいい人もいるかもしれないので、
Dockのアイコンを削ったり、メニューバーアイコンを削ったりする設定がほしいかも。

<img width="89" alt="2016-09-20 1 02 51" src="https://cloud.githubusercontent.com/assets/2557813/18639238/0adec1f2-7ece-11e6-830a-541684978c30.png">


# ダウンロードの仕方

https://slack.com/beta/osx

ここからどうぞ。

<img width="1158" alt="slack beta" src="https://cloud.githubusercontent.com/assets/2557813/18638710/2341a90a-7ecc-11e6-8a9a-0bc43ece3c56.png">

## 紹介記事

Product Huntの紹介記事はこちら。

> https://www.producthunt.com/tech/slack-beta

TheNextWebの紹介記事はこちら。
> http://thenextweb.com/apps/2016/09/14/slack-beta-app/

# まとめ

## 改善されたと思うところ

- 起動速度
- チーム切り替え速度
- UIの刷新
- メニューバーからのアクセス

何か問題があったら、積極的に`/feedback`に色々書いていこうと思います。

速度の違いくらいわかる男なんだと言い聞かせて使い続けてみる。