<script module lang="ts">
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import { List } from '.';

  const { Story } = defineMeta({
    title: 'sections/lists/List',
    component: List,
  });
</script>

<Story name="Default" />
