#frontend-template
ver 1.0 2016/01/28

## できること
- HTMLテンプレートエンジン(jade)
- SASS/SCSS
- SASSLint
- CSSベンダープレフィクス自動化
- CSSのプロパティ自動ソート
- スタイルガイド生成
- JSHint
- 画像の圧縮
- BrowserSync

## 構成
```
package.json 
gulpfile.js
/gulp - gulpのタスク設定ファイル置き場
/src - 作業用フォルダ
| ┣ /images - 画像フォルダ public/imagesに複製される
| ┣ /js - jsフォルダ 直下ファイルのみpublic/jsに出力される
| ┣ /lib - ライブラリフォルダ public/libに複製される
| ┣ /scss - sass/scssフォルダ 直下のstyle.scssのみpublic/cssに出力
| |  ┗ /base - リセットなど基本的なもの
| |  ┗ /lib - cssライブラリフォルダ
| |  ┗ style.scss - すべてのファイルを読み込む
| ┣ /view - jadeフォルダ 
|    ┗ /parts - 使いまわせるテンプレートフォルダ
|    ┗ index.jade - public/index.htmlとして出力
```