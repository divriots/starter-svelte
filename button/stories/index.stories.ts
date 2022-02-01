//import '~/main/src/style.scss';
import { Button } from '~/button/index.js';

export const storyButton = () => Button;

export const storyButtonDisabled = () => ({
  Component: Button,
  props: {
    disabled: true,
  },
});
