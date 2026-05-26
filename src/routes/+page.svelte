<script lang="ts">
  import { SITE_TITLE, SITE_DESCRIPTION } from '$lib/constants/site';
</script>

<svelte:head>
  <title>{SITE_TITLE}</title>
  <meta name="description" content={SITE_DESCRIPTION} />
  <meta property="og:title" content={SITE_TITLE} />
  <meta property="og:description" content={SITE_DESCRIPTION} />
  <meta name="twitter:description" content={SITE_DESCRIPTION} />
</svelte:head>

<h1>{SITE_TITLE}</h1>
<p>{SITE_DESCRIPTION}</p>
