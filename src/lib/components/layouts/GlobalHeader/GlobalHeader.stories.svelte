<script module lang="ts">
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import { GlobalHeader } from '.';

  const { Story } = defineMeta({
    title: 'layouts/GlobalHeader',
    component: GlobalHeader,
  });
</script>

<Story name="Default" />
