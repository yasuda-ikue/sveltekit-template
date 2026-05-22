import { defineConfig } from 'eslint/config';
import storybook from 'eslint-plugin-storybook';
import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import tsParser from '@typescript-eslint/parser';
import globals from 'globals';
import unicornPlugin from 'eslint-plugin-unicorn';
import importPlugin from 'eslint-plugin-import';
import stylistic from '@stylistic/eslint-plugin';
import svelte from 'eslint-plugin-svelte';
import svelteConfig from './svelte.config.js';

/**
 * eslint設定
 */
export default defineConfig(
  /** 除外指定 */
  {
    ignores: [
      '.svelte-kit/',
      '.output/',
      '.vercel/',
      '.netlify/',
      '.wrangler/',
      'out/',
      'build/',
      '.pnpm-store/',
      'node_modules/',
      'storybook-static/',
      'storybook.log',
      '*.storybook.log',
      'vite.config.ts.timestamp-*',
    ],
  },

  /** 環境変数 */
  {
    languageOptions: {
      globals: {
        ...globals.browser,
      },
    },
  },
  {
    // サーバー用ファイルや、設定ファイルだけを対象にする
    files: [
      'src/**/*.server.ts',
      'src/**/*.server.js',
      'vite.config.ts',
      'svelte.config.js',
      '.storybook/**/*.ts',
    ],
    languageOptions: {
      globals: {
        ...globals.node, // ここでだけ Node.js のグローバル変数（processなど）を許可する
      },
    },
  },

  /** eslint推奨ルール */
  eslint.configs.recommended,

  /** Stylisticルール */
  {
    extends: [
      stylistic.configs.customize({
        blockSpacing: false,
        braceStyle: '1tbs',
        semi: true,
        jsx: false,
      }),
    ],
    rules: {
      '@stylistic/arrow-parens': ['error', 'as-needed'],
      '@stylistic/object-curly-spacing': ['error', 'always'],
      '@stylistic/type-annotation-spacing': ['error', { after: true }],
      '@stylistic/no-extra-semi': 'error',
      '@stylistic/arrow-spacing': ['error', {
        before: true,
        after: true,
      }],
      '@stylistic/operator-linebreak': ['error', 'after', {
        overrides: {
          '=': 'after',
          '|': 'before',
          '&': 'before',
          '?': 'before',
          ':': 'before',
        },
      }],
      '@stylistic/switch-colon-spacing': ['error', {
        after: true,
        before: false,
      }],
    },
  },

  /** TypeScriptルール（.svelteも対象） */
  {
    files: ['**/*.ts', '**/*.svelte'],
    languageOptions: {
      parserOptions: {
        projectService: {
          allowDefaultProject: [],
        },
        tsconfigRootDir: import.meta.dirname,
      },
    },
    extends: [
      ...tseslint.configs.recommendedTypeChecked,
      ...tseslint.configs.stylisticTypeChecked,
    ],
    plugins: {
      unicorn: unicornPlugin,
      import: importPlugin,
    },
    rules: {
      '@typescript-eslint/array-type': 'off',
      '@typescript-eslint/ban-ts-comment': ['error', { 'ts-nocheck': false }],
      '@typescript-eslint/consistent-type-definitions': ['error', 'type'],
      '@typescript-eslint/consistent-type-imports': ['error', { fixStyle: 'inline-type-imports' }],
      '@typescript-eslint/no-misused-promises': ['error', { checksVoidReturn: { attributes: false } }],
      '@typescript-eslint/no-unused-vars': ['error', {
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_',
        caughtErrorsIgnorePattern: '^_',
        destructuredArrayIgnorePattern: '^_',
      }],
      '@typescript-eslint/require-await': 'off',
      'unicorn/filename-case': [
        'error',
        {
          cases: {
            kebabCase: true,
            pascalCase: true,
          },
          ignore: [
            /^\+.*\.svelte$/,
            /^\[.*\]\.svelte$/,
            /^\+.*\.js$/,
            /^\+.*\.ts$/,
          ],
        },
      ],
      'import/no-default-export': 'error',
      'import/no-useless-path-segments': ['error', { noUselessIndex: true }],
      'prefer-arrow-callback': ['error', { allowNamedFunctions: false }],

      /**
       * FIXME:
       * ユーティリティ型を使うと、VSCode上で型は正しく補完されているのに
       * no-unsafe-xxx系のルールにひっかかってエラーになるケースがあるので
       * いったんオフにしている
       */
      '@typescript-eslint/no-unsafe-argument': 'off',
      '@typescript-eslint/no-unsafe-assignment': 'off',
      '@typescript-eslint/no-unsafe-call': 'off',
      '@typescript-eslint/no-unsafe-member-access': 'off',
      '@typescript-eslint/no-unsafe-return': 'off',
    },
  },
  {
    files: ['**/*.d.ts'],
    rules: {
      '@typescript-eslint/consistent-type-definitions': 'off',
    },
  },

  /** Svelteルール */
  {
    files: ['**/*.svelte'],
    languageOptions: {
      parserOptions: {
        extraFileExtensions: ['.svelte'],
        parser: tsParser,
        svelteConfig,
      },
    },
    extends: [
      ...svelte.configs.recommended,
    ],
    rules: {
      'svelte/block-lang': ['error', { script: ['ts'] }],
      'svelte/button-has-type': ['error', {
        button: true,
        submit: true,
        reset: true,
      }],
      'svelte/derived-has-same-inputs-outputs': 'error',
      'svelte/html-closing-bracket-spacing': 'error',
      'svelte/html-quotes': 'error',
      'svelte/html-self-closing': 'error',
      'svelte/indent': ['error', {
        indentScript: true,
        ignoredNodes: [
          'TSTypeAliasDeclaration',
          'TSTypeAliasDeclaration *',
          'TSUnionType',
          'TSIntersectionType',
        ],
      }],
      'svelte/max-attributes-per-line': ['error', { singleline: 4 }],
      'svelte/mustache-spacing': 'error',
      'svelte/no-spaces-around-equal-signs-in-attribute': 'error',
      'svelte/prefer-class-directive': ['error', { prefer: 'empty' }],
      'svelte/prefer-const': ['error', { excludedRunes: [] }],
      'svelte/prefer-style-directive': 'error',
      'svelte/shorthand-attribute': 'error',
      'svelte/shorthand-directive': 'error',
      'svelte/spaced-html-comment': 'error',

      'prefer-const': 'off', // eslint推奨設定のprefer-constはコンフリクトするのでoff
      '@stylistic/indent': 'off', // Stylisticのindentはコンフリクトするのでoff
      '@typescript-eslint/no-floating-promises': 'off', // Svelteファイルでは未処理Promise検知で誤検知するためoff
      'svelte/no-navigation-without-resolve': 'off', // 一旦off
    },
  },

  /** Storybookルール */
  {
    files: ['**/*.stories.@(ts|js|svelte)'],
    extends: [
      // Storybook@10移行で型が通らなくなったのでいったんanyで回避（ルールは適用される）
      ...storybook.configs['flat/recommended'] as any, // eslint-disable-line
    ],
  },

  /**
   * 基本モジュールのエクスポートはnamed exportに制約したいが
   * フレームワークの仕様でdefault exportにせざるをえないケースがあるので個別に除外する
   */
  {
    files: [
      '**/*.stories.ts',
      '**/*.stories.svelte',
      '**/*.d.ts',
      '*.config.ts',
      '*.config.js',
      '.storybook/*.ts',
    ],
    rules: {
      'import/no-default-export': 'off',
      // 'import/prefer-default-export': 'error',
    },
  },
);
