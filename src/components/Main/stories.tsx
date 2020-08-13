import { withKnobs, text } from '@storybook/addon-knobs'
import { Story, Meta } from '@storybook/react/types-6-0'
import Main from '.'

export default {
  title: 'Main',
  component: Main,
  decorators: [withKnobs]
} as Meta

export const Basic: Story = () => (
  <Main
    description={text(
      'Description',
      'Starter project with Next, React and Typescript!'
    )}
    title={text('Title', 'Spectrum Boilerplate')}
  />
)
