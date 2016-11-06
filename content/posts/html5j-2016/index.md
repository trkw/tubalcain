---
title: HTML5カンファレンス2016でモダンを考えてみませんか？
date: 2016-09-03
layout: Post
tag: HTML5j-2016
entryread: HTML5カンファレンスに言ってきた感想
authors:
  - miyaoka
image: 'html5j.jpg'
badge: 'html5j.svg'
---


# 中村修 「Webという名のDistributed Operating System」

<iframe width="640" height="360" src="https://www.youtube.com/embed/QlW6OM7VXFI" frameborder="0" allowfullscreen></iframe>

## webのミッション
- HDR対応テレビ、コンテンツを例に
  - テレビでピクセルの輝度情報を操作できるようになった
  - やがてブラウザでも「どうしてHDR使えないの？」と思うかもしれない
  - webも対応していかないといけない
- webってそもそも
  - ハイパーリンク
  - 既存の紙の文化の世界を再現
  - これからは新しい社会をハンドリングできるようにするのが課題

## BigData, AI, IoTといったバズワード
- 中心にあるのは結局webでしょ
- web技術に立脚

## 実はwebってなんなのか
- webという名の分散OS
- OSという視点で見る
- Internetで世界中が繋がったコンピュータ > その上にAPI > アプリケーション

| | UNIX | Web |
| ---- | ---- | ---- |
| 計算資源 | ハードウェアと情報<br>様々なデバイス（CPU, Memory, Disk, Printer, NIC）<br>情報：ファイル、カメラ、キーボード | インターネットで繋がった世界中のコンピューター<br>IoTで繋がるすべてのデバイス<br>Webページは勿論、世界中のドキュメント
| 管理して提供 | File System、システムコールやライブラリ、etc.<br>情報の保護（セキュリティ、認証、暗号、etc.） | HTTP/HTTPS<br>HTML<br>URI<br>API |

## 感想
- なんでWeb技術が注目され、Webに集約されていくのかという現状に対して大局的な視野感
- Web技術=JSではなく、世界の情報を操作するための技術という意識

# Reactの最新動向とベストプラクティス

<iframe width="640" height="360" src="https://www.youtube.com/embed/sNjCELYzEkU" frameborder="0" allowfullscreen></iframe>

- スライド：[Reactの最新動向とベストプラクティス // Speaker Deck](https://speakerdeck.com/koba04/reactfalsezui-xin-dong-xiang-tobesutopurakuteisu)
- みんな大好きReactのおさらい
- PureComponentなど最適化周り
- Componentの拡張周り
- ツール
  - [Storybook - UI dev environment you'll love to use](https://getstorybook.io/)
    - Componentをカタログ化して任意のstateで確認できる
    - つかったことないので便利そう
    - ドキュメント共有的によさそう
  - [Redux DevTools extension](https://github.com/zalmoxisus/redux-devtools-extension)
    - Actionの履歴を記録して取り消したり再生できたりするのでいろいろ確認できる
    - [react-redux-starter-kit](https://github.com/davezuko/react-redux-starter-kit) なんかだと組み込まれてる

## 感想
なるべくstateを持たない部分に切り分けて更新を省くようにするなど。あまり最適化までは気を配ってなかったけど、意識すると設計として良くなる感じがする

# AudioとガジェットをWebで遊ぶ - Web Audio/MIDI, Web Bluetooh

<iframe width="640" height="360" src="https://www.youtube.com/embed/RP96J1hbl6c?start=1221" frameborder="0" allowfullscreen></iframe>

- Internet 25年
  - WebGL
  - 次はWeb Audio API
- Web Audio APIについて
- Web MIDI API
  - [Soundmondo](https://soundmondo.yamahasynth.com/)
  - [Madeon's Adventure Machine](http://www.madeon.fr/adventuremachine/)
- Web Bluetooth
  - wifiに比べて、ネットワークの設定要らない
  - ブラウザで無線デバイス操作
- Progressive Web App
  - offlineでデバイスを動かす
    - nativeのようなUX
    - ネットワークを必要としない

## 感想
- このへん自分にとってはぜんぜん未知のゾーン
- ただ[mi:muz on Strikingly](http://mimuz.strikingly.com/)のようなArduino使ったフィジカルWebアプリというのを以前聞いて、現行のweb世界に留まらない領域に興味があった
- 電子工作もやったことないけどハルロックで興味ある
- Web技術だけど利用シーンはフィジカルでオフラインというのが生活に密接してて良い感じがする

# Material Design for Web

<iframe width="640" height="360" src="https://www.youtube.com/embed/kVC0DATUZLg?start=4709" frameborder="0" allowfullscreen></iframe>

- 背景
  - 同じサービスなのにインターフェースが違う
  - デバイスによって提供されるGmailがバラバラで混乱
  - 2011: マルチデバイス化が進み課題化
  - 2014: Material Design発表
  - googleだけの問題ではないので公開
- Material desginコンセプト
  - Tangible Surface（デジタルな紙）
    - z軸のヒエラルキーで重要度表現
  - Print Like desgin（印刷物のデザイン）
    - 紙面的なグリッド配置
    - コンテントに応じたカラー
  - Meaningful Motion（意味のある動き）
    - 時間軸の表現。どこから来てどこへ行くのか
    - transition: 画面間の移行
    - transform: 変形することで、自分が何をしたのか伝える
    - 状態の変化
      - 動的なサービスにおいて、ユーザーに対しての非言語コミュニケーション
- 事例
  - Inbox
    - gmailのmaterial design化
  - [Google Cultural Institute](https://www.google.com/culturalinstitute/beta/?hl=ja)
  - [Google I/O 2016](https://events.google.com/io2016/)
  - PESTO
- Framework
  - Polymar Elements
  - Angular Material
  - Material Design Lite
    - FWに依存せずHTML CSS JS、Pureに組み込める
- デザインフレームワーク
  - FWに縛られない、FWを使うことがゴールではない
  - FWを使ってなにをできるかというところを追求
    - たとえばFWによって浮いた時間でエラー画面まで作りこむところにブランドが出る

## 感想
- 全部サイトに書いてある内容だと言ってたけれど、改めて一通り語ってもらうとなるほどですねという内容
- このブログも漠然とmaterial desginを取り込んでみたいなーと思っていたけれど、しかし表現的には無個性になってしまう感じもする
- サービスありきのところに、デバイスに関わらず同質な体験を提供するというのが本質的な目的だろう

# High Performance Web - ここ最近の"変化"のまとめ

<iframe width="640" height="360" src="https://www.youtube.com/embed/pd-sIWmVRp0" frameborder="0" allowfullscreen></iframe>

- High Performance Web User Interface
  - モバイル化、アプリ化することで[RAIL](https://developers.google.com/web/tools/chrome-devtools/profile/evaluate-performance/rail)の優先度が変わってきた
    - WebサイトではLoad重視に対し、アプリではResponse, Animation重要
  - GPUを活用する
    - CSSプロパティでGPU使用する。やり方は泥臭い
    - transform: tranlateZ(0)：凶悪すぎる
      - will-change：Web標準化
- Scroll Performance
  - `<img lazyload>`： Web標準になりかけた
  - Intersection Observer：スクロール位置+マージンで読み込み
- Task Optimization
  - SetTimeout(0)ハックが横行
  - MSがSetImmediateを提案
  - GoogleがRIC(Request Idle Callback)

## 感想
- このへんもあんま良く分からないので、よしなに標準化されることを祈るばかりです

# Atom, Sublime Text, WebStormにVisual Studio Code 四大エディター真夏の大決戦！

<iframe width="640" height="360" src="https://www.youtube.com/embed/nmm8wyTmxkQ?start=18401" frameborder="0" allowfullscreen></iframe>

## 感想
- 数年前なら盛り上がってたっぽいGUIエディタ論争だけど、もはや差が無いので盛り上がりづらい。決戦度ゼロ
  - せいぜいactivate-power-modeで笑うくらい
  - 源流のSublime Textで出来ることは後発のエディタはだいたいできる
    - TextMate->Sublime->Atom
  - Sublimeの解説本は2年前だが使える。そのくらい枯れてるのでみんな同じ
- 自分はVS Code派。だって後発で新しいし…
- その中でWebStormだけ異色というか、シンプルなエディタではなく有償のIDEなので毛色が違う
  - github issueから自動的にbranch生成したり
  - 連携ツールが豊富。全部入り。いろいろインテグレられすぎてて既存の環境でやってる身からするとゴテ味を感じる。
  - ある程度の規模の集団で統一的に使うのが利用シーンっぽい感じ？

# 全体の感想

- カンファレンス
  - 初めて参加してみた
  - 会場の東京電機大学は駅前すぐで、気づいたら敷地に入っていて驚いた（自分の大学は駅から遠かった）
  - CodeIQのブースで駄菓子を貰った。ポテフは食べたことが無かったが[『だがしかし』](http://www.shogakukan.co.jp/pr/dagashikashi/)で見たアレだと思った。
- モダン考
  - このごろの感覚的に、Webにとってモダンはもはや同義語のようなもので、モダンといえばWeb技術で、Web技術はモダンであるべきという意識がなんとなくあった
    - でもなんでそれがWebで、モダンとはなんなのかよく分かってなかった
    - 基調講演を聞いて、繋がった世界の計算機資源を操作する技術だからこそWeb技術なんだなーと
  - 逆にモダンでないと感じるもの：小さいボタン、統一的でないデザイン、セマンティックでない構成 etc…
    - 一昔前だとwindows感丸出しのアプリとか
    - サービスがデバイスやOS、フレームワークに依存しているとレガシーに感じる
    - デバイスなどの多様化を捌いて同質のサービスを提供できているかどうかがモダンらしさか
- markdownでメモ取ってる人多かった感じがする
  - 自分もmarkdownでメモ取ってた
  - エディタ上でもプレビューできるけど、このブログシステムだとローカルでブログ記事としてブラウザで見れる
  - オフラインで書けるブログというのがちょっと面白い
  - webpackのHot Module Replacementでリロード無しでブラウザに反映される
  - 専用のエディタに依存していないのがモダンだ
  - モダンと言っても、利用者にとってはデザイン・UXとしてのモダンさ、開発者としては開発フローとしてのモダンさとあって求めているものは別々
  - このブログは後者から始まってるけど前者も追求したい
- フィジカルWebアプリ
  - Web技術の利用シーンに生活が入ってくると視野が広がる




