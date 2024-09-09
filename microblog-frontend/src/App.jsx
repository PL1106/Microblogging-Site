import Header from '../src/components/header'
import '../src/style/header.css'
import PostButton from '../src/components/Postbutton'
import '../src/style/post-button.css'



function App() {
  const handlePostClick = () => {
    console.log('Post button clicked');
  };



  return (
    <div>
      <Header />
      <div style={{ padding: '20px', textAlign: 'center' }}>
        <PostButton onClick={handlePostClick} label="Post" />
      </div>
    </div>
  );
}

export default App;
