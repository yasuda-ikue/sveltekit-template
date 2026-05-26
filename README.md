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


### 初期設定が必要なファイル
プロジェクトを開始したら、まず以下の定数ファイルを実際のプロジェクトに合わせて更新してください。

* `src/lib/constants/site.ts`: サイトのURL、タイトル、説明文などの基本情報。
* `src/lib/constants/analytics.ts`: Google Tag Manager (GTM) および Microsoft Clarity の計測ID。
  * ※ **開発環境 (`pnpm dev`) ではアクセス計測タグは発火せず、本番ビルド時のみ出力される**設計になっています。

## コーディングルール

1. **ファイル・ディレクトリの命名規則**
   * コンポーネントのディレクトリ名などは **パスカルケース (`PascalCase`)** または **ケバブケース (`kebab-case`)** で命名してください。（SvelteKit特有の `+page.svelte` 等は除外されています）。
2. **名前付きエクスポート (Named Export) の強制**
   * 予期せぬバグやリファクタリング漏れを防ぐため、モジュールのデフォルトエクスポート (`export default`) は原則禁止されています。
   * コンポーネントを作成する際は、同ディレクトリに `index.ts` を配置し、以下のように名前付きでエクスポートして呼び出してください。
     * 例: `export { default as Button } from './Button.svelte';`
3. **Svelte 5のイベントハンドラ**
   * 古い `on:click` ではなく、新しい `onclick` プロパティスタイルを使用してください。
4. **エディタ環境**
   * **VS Code** の使用を強く推奨します。リポジトリに保存時の自動整形（ESLint Auto-fix）の設定が含まれているため、拡張機能をインストールすれば自動でコードがフォーマットされます。
   
