# SvelteKit + Storybook

このリポジトリは、**SvelteKit**の最低限の環境に、UIコンポーネント開発環境の**Storybook**を統合したテンプレートです。
パッケージマネージャーには **pnpm** を採用し、余分なツールを省きつつ必要に応じて拡張しやすい構成にしています。

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
        └── */
            └── +page.svelte

```
- 詳細は[プロジェクト構成](https://svelte.jp/docs/kit/project-structure)（公式）をご確認ください

