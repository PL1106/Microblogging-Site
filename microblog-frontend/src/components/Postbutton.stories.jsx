import PostButton from '../components/Postbutton'; 

export default {
  title: 'Components/PostButton',
  component: PostButton,
};

const Template = (args) => <PostButton {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'Post', 
  onClick: () => alert('Button clicked!'), 
};

