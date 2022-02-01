<button on:click {...$$props}>
  <slot>Button</slot>
</button>

<style>
  button {
    background-color: seagreen;
    padding: 1rem 2rem;
    color: white;
    border: none;
    font-size: 1.1rem;
    border-radius: 5px;
  }
</style>