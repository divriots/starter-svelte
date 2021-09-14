<script>
  import Button from '~/button'
  import Icon from '~/icon'

  let dark = false;

  let style;

  function switchTheme() {
    dark = !dark;
  }

  function updateStyle(state) {
    style && (style.textContent = state
      ? '@import url(../../switch-theme/dist/dark.css'
      : '');
  }

  $: updateStyle(dark);
</script>

<Button on:click={switchTheme}>
  <Icon icon="fas-{dark? 'sun' : 'moon'}" />
  <style bind:this={style}></style>
</Button>