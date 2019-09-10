import { configure } from '@storybook/react';

function loadStories() {
  require('../src/main.stories');
  require('../src/components/atoms/-divider/atoms.stories');
  require('../src/components/molecules/-divider/molecules.stories');
  require('../src/components/organisms/-divider/organisms.stories');
  require('../src/components/templates/-divider/templates.stories');

  //atoms
  require('../src/components/atoms/button/button.stories');
}

configure(loadStories, module);
