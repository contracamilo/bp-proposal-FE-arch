import { configure } from '@storybook/react';

function loadStories() {
  require('../stories/index.js');
  require('../src/components/atoms/-divider/atoms.stories');
  require('../src/components/molecules/-divider/molecules.stories');
  require('../src/components/organisms/-divider/organisms.stories');
  require('../src/components/templates/-divider/templates.stories');
}

configure(loadStories, module);
