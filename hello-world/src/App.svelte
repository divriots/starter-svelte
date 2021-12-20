<script>
  import '~/main/src/style.scss';

  import { SwitchTheme } from '~/switch-theme';

  export let name;
</script>

<main>
  <SwitchTheme />
  <h1>Hello {name ? name : 'World'}!</h1>
</main>
