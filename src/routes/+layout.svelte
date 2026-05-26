<script lang="ts">
  import { GtmScript } from '$lib/components/layouts/GtmScript';
  import { ClarityScript } from '$lib/components/layouts/ClarityScript';
  import '$lib/styles/global';
  const { children } = $props();
</script>

<ClarityScript />
<GtmScript>
  {@render children()}
</GtmScript>
