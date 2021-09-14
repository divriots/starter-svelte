import '~/main/src/light.scss';

import Icon from '../src/Icon.svelte';

export const storyIcon = () => ({
  Component: Icon,
  props: {
    icon: 'fab-font-awesome',
  },
});
