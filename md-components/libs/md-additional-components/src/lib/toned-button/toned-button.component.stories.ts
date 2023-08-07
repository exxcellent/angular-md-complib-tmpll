import type { Meta, StoryObj } from '@storybook/angular';
import { TonedButtonComponent } from './toned-button.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<TonedButtonComponent> = {
  component: TonedButtonComponent,
  render: (args: TonedButtonComponent) => ({
  }),
  title: 'TonedButtonComponent',
};
export default meta;
type Story = StoryObj<TonedButtonComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/toned-button works!/gi)).toBeTruthy();
  },
};
