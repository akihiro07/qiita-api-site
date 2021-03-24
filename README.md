# qiita-api-site

## 概要

Qiita API を用いたウェブサイト

## URL

https://qiita-api-site.vercel.app/

## 機能
- ログイン
  - アクセストークンを入力したログイン
  - 無効なアクセストークンの場合はログインしない
- ユーザーID検索
- 記事一覧表示
  - 「ユーザーID検索」の結果を表示
- 記事詳細表示
  - 記事一覧表示ページから遷移可能

### ログインユーザーのみ
- ログアウト
- ログインユーザーの記事一覧表示（限定公開の記事も表示）
- ログインユーザーの記事詳細表示
- ログインユーザーの記事削除
  - マイページで削除可能
  - `confirm`が出るので即削除はされない
- ログインユーザーの記事新規作成
  - ヘッダーの「記事を作成」ボタンから画面遷移可能
  - 「限定共有」か「公開」かを選択可能
- ログインユーザーの記事編集
  - マイページから画面遷移可能

## ページ
- ログインページ
- マイページ
- 検索記事一覧ページ
- 記事詳細ページ
- 新規投稿ページ
- 記事編集ページ

## Build Setup

```bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:3000
$ yarn dev

# build for production and launch server
$ yarn build
$ yarn start

# generate static project
$ yarn generate
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).
