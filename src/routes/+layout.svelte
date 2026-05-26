<script lang="ts">
  import '$lib/styles/global';
  const { children } = $props();
</script>

<svelte:head />

{@render children()}
