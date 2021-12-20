<script>
  import { onMount } from 'svelte';
  import Button from '../../button/src/Button.svelte';
  import Icon from '../../icon/src/Icon.svelte';

  let dark = false;
  let root;

  function switchTheme() {
    dark = !dark;
  }

  function updateStyle(state) {
    root && root.setAttribute('color-scheme', dark ? 'dark' : 'light');
  }

  onMount(() => {
    root = document.documentElement;
  });

  $: updateStyle(dark);
</script>

<Button on:click={switchTheme}>
  <Icon icon="fas-{dark ? 'sun' : 'moon'}" />
</Button>
