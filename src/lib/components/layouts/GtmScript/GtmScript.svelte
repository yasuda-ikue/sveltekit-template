<!--
@component
# Google Tag ManagerのインラインJS
-->

<script lang="ts">
  import type { Snippet } from 'svelte';
  import { GTM_ID } from '$lib/constants/analytics';
  import { dev } from '$app/environment';

  const { children }: { children: Snippet } = $props();
</script>

<svelte:head>
  {#if GTM_ID && !dev}
    <script
      async
      src="https://www.googletagmanager.com/gtm.js?id={GTM_ID}&l=NicoGoogleTagManagerDataLayer"
    ></script>
    <script>
      window.NicoGoogleTagManagerDataLayer = window.NicoGoogleTagManagerDataLayer || [];
      window.NicoGoogleTagManagerDataLayer.push({
      'gtm.start': new Date().getTime(),
      event: 'gtm.js',
      });
    </script>
  {/if}
</svelte:head>

{@render children()}

{#if GTM_ID && !dev}
  <noscript>
    <iframe
      src="https://www.googletagmanager.com/ns.html?id={GTM_ID}"
      height="0"
      width="0"
      style:display="none"
      style:visibility="hidden"
      title="GTM Fallback"
    ></iframe>
  </noscript>
{/if}
