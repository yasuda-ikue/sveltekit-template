# SvelteKit + Storybook

このリポジトリは、**SvelteKit**の最低限の環境に、UIコンポーネント開発環境の**Storybook**を統合したテンプレートです。
パッケージマネージャーには **pnpm** を採用し、余分なツールを省きつつ必要に応じて拡張しやすい構成にしています。


## 使用技術
フレームワーク: SvelteKit + Svelte 5 (Runes対応)
UIカタログ: Storybook
Lint/Formatter: ESLint (Flat Config) + TypeScript ESLint + Stylistic
ビルド出力: @sveltejs/adapter-static による静的サイト書き出し (SSG)

## 主なディレクトリ構成

```
/
├── static                # 静的ファイル
└── src
    ├── app.html          # ページのテンプレート
    ├── lib
    │    ├── constants     # 定数
    │    ├── data          # jsonデータなど
    │    ├── stores        # ストア
    │    ├── styles        # スタイル
    │    ├── utils         # ユーティリティ
    │    └── components    # コンポーネント
    │        ├── ui        # Button, Icon など最小単位のパーツ
    │        │   └── ComponentName　　# パスカルケースで命名
    │        │       ├── img
    │        │       ├── index.ts
    │        │       ├── ComponentName.stories.svelte
    │        │       └── ComponentName.svelte
    │        ├── layouts    # Header, Footer など全体共通の枠組み
    │        ├── sections   # 生放送リストなど、複数ページで使い回す大きめの塊
    │        └── pages      # 各ページ固有のパーツ
    │            ├── top
    │            └── about
    └── routes/       ※ ここではUIを作らず、componentsを呼び出してデータを渡すだけ
        ├── +page.svelte
        └── (dir)/
            └── +page.svelte

```
- 詳細は[プロジェクト構成](https://svelte.jp/docs/kit/project-structure)（公式）をご確認ください


## セットアップ

### パッケージのインストール
```bash
$ pnpm install
```

### 開発サーバーの起動 (SvelteKit)
```bash
$ pnpm dev
```

### Storybookの起動
```bash
$ pnpm storybook
```

### 本番ビルド (outディレクトリへ静的出力)
```bash
$ pnpm build
```

- `out/` ディレクトリにビルドされたファイルが出力されます

### ビルドのプレビュー

```bash
$ pnpm preview
```

- `out/` ディレクトリに対してサーバーを起動するので、先に `pnpm build` でファイルが出力されてある必要があります


## スクリプト
- `dev`: 開発サーバーを起動
- `build`: プロジェクトをビルド
- `preview`: ビルド後のプレビューサーバーを起動
- `storybook`: storybookを起動

