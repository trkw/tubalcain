---
title: もうErgoDoxで消耗してるの？
date: 2016-09-15
layout: Post
tag: ErgoDox
entryread: ErgoDoxの購入編
badge: ergodox.svg
authors:
  - miyaoka
---

# というわけで

前回の購入編に続いて、ErgoDoxのセットアップ編です。いってみましょう。

![keyboard-configurator massdrop com_ext_ergodox](https://cloud.githubusercontent.com/assets/1443118/18560360/33c102d0-7bb6-11e6-8aca-994e1845f4d5.png)

まずはキーレイアウトです。

特殊なキーボードだから配置も特殊なわけで、デフォルトでこんな感じです。

いかにも消耗しちゃいますね。このまま使うのはつらいのでいじっていきましょう。

# 悩む

![img_5239](https://cloud.githubusercontent.com/assets/1443118/18521791/7661ffbe-7ae8-11e6-83c2-4de23cbbd30f.JPG)

ErgoDoxの特徴としては、左右セパレート式で完全にシンメトリなキー配置ということが挙げられます。

これは左右同じ基盤を使って裏返しに作ることで制作費を抑えるためだとか聞きました。

ですが、一般的なキーボードはそうではないので従来のキー配置をそのまま再現できないところが消耗しどころになります。

![github com_miyaoka_qmk_firm](https://cloud.githubusercontent.com/assets/1443118/18559651/33a5877e-7bb3-11e6-97f4-a8b1c2a91636.png)

キー設定はC言語のファイルにキーコードの配列を記述して、それをコンパイルしてファームウェアに焼きこむ必要があります。つらいですね。消耗しますね。

いちおうGUIツールもあったりするのですが、細かいところが設定できなかったりするらしいのであんまり試してません。まあ慣れれば手書きもそんなにつらくないです。やり方は書いてる人がいろいろ居るのでGoogleという便利なサイトでググってください。

# モックる

![img_5248](https://cloud.githubusercontent.com/assets/1443118/18521794/77f6a852-7ae8-11e6-942a-3f7aa8b5dd0f.JPG)

モニタ上で構想して消耗しすぎたので印刷してモックを作り始めました。

中央のアルファベット＆数字は従来通りで良いのですが、普通のキーボードだとその右側にいろいろとキーがあります。こいつらをどうするかがパズルのようで悩ましく、しかしながら面白いところでもあります。

# あるべきキーボード

![img_5261-2](https://cloud.githubusercontent.com/assets/1443118/18558114/cf9e42bc-7bac-11e6-8fed-493b2217c1bd.jpg)

試しに設定していろいろと打ってみると、ErgoDoxのキーボードの特性がちょっと分かってきました。

上記の図は自分の主観ですが

緑：**打ちやす～い**

赤：**打ちづら～い**

という感じです。正直、真ん中辺りのキーは要らないんじゃないかと思います。代わりに親指周りは円状に5キーくらいずつ並べて欲しいです。

![so-i-made-a-keyboard-135-638](https://cloud.githubusercontent.com/assets/1443118/18560855/598468c0-7bb8-11e6-9f87-d73157cf70e3.jpg)

[So, I made a keyboard | SlideShare](http://www.slideshare.net/obrajesse/2013-osdcmadeakeyboard/)

[Rebuildの第9回](http://rebuild.fm/9/)のゲストで喋っていたJesse Vincentさんの創作キーボード史を見ていくと、最終的には手の形に行き着く感じがします。

# とはいえまあ

![img_5259](https://cloud.githubusercontent.com/assets/1443118/18557721/10db8872-7bab-11e6-8787-ef821632f87c.jpg)

とにかくあれですね。それでも初めてのセパレート式、初めてのオープンソースファームウェアということで、理想を追い求めて楽しいキーボードです。生産性は今のところ従来比の2%くらいまで落ちました。消耗してます。頑張りたいです。

次はセットアップを終えての実戦投入、風雲篇です。
