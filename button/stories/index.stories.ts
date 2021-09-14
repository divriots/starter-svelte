import '~/main/src/light.scss';

import Button from '../src/Button.svelte';

export const storyButton = () => Button;

export const storyButtonDisabled = () => ({
  Component: Button,
  props: {
    disabled: true,
  },
});
