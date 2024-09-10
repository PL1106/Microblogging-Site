import Comment from '../components/Comment'; 

export default {
  title: 'Components/Comment',
  component: Comment,
};


const Template = (args) => <Comment {...args} />;

export const Default = Template.bind({});
Default.args = {
  
};


export const WithLongComment = Template.bind({});
WithLongComment.args = {
};
