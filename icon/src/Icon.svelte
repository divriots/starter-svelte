<script>
  import '@fortawesome/fontawesome-free/css/all.css';

  export let icon;

  let idx = $$props.icon.indexOf('-');

  $: collection = $$props.icon.slice(0, idx);
  $: name = $$props.icon.slice(idx+1);
</script>

<i class="{collection} fa-{name}">
  <slot />
</i>