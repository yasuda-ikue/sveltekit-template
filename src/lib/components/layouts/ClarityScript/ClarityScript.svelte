<!--
@component
# ClarityのインラインJS

- ts側の変数は、scriptタグの属性には渡せるが中のコードには渡せなそう
- 性質上、Storybookは用意していない
-->

<script lang="ts">
  import { CLARITY_ID } from '$lib/constants/analytics';
</script>

<svelte:head>
  {#if CLARITY_ID}
    <script async src="https://www.clarity.ms/tag/{CLARITY_ID}"></script>
    <script>
      window.clarity = window.clarity || function() {(window.clarity.q = window.clarity.q || []).push(arguments)};
    </script>
  {/if}
</svelte:head>
