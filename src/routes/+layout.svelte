<script lang="ts">
  import '#lib/styles/global';
  import { GlobalHeader } from '#lib/components/layouts/GlobalHeader';
  const { children } = $props();
</script>

<GlobalHeader />
{@render children()}
