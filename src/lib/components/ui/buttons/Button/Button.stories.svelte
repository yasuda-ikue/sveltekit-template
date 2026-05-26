<script module lang="ts">
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import { Button } from '.';

  const { Story } = defineMeta({
    title: 'ui/buttons/Button',
    component: Button,
  });
</script>

<Story name="Default" />
