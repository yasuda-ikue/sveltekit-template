# SvelteKit + Storybook

このリポジトリは、**SvelteKit**の最低限の環境に、UIコンポーネント開発環境の**Storybook**を統合したテンプレートです。
パッケージマネージャーには **pnpm** を採用し、余分なツールを省きつつ必要に応じて拡張しやすい構成にしています。

## 主なディレクトリ構成

```
/
├── static                # 静的ファイル
└── src
    ├── app.html          # ページのテンプレート
    ├── routes            # アプリケーションのルート
    └── lib
        ├── components    # UIコンポーネント
        │      └── component
        │             ├── img
        │             ├── index.ts
        │             ├── *.stories.svelte
        │             └── *.svelte
        ├── constants     # 定数
        ├── data          # jsonデータなど
        ├── stores        # ストア
        ├── styles        # スタイル
        └── utils         # ユーティリティ

```
- 詳細は[プロジェクト構成](https://svelte.jp/docs/kit/project-structure)（公式）をご確認ください

