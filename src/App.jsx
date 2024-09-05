import Header from './components/Header'
import './style/header.css'
import PostButton from './components/Postbutton';
import './style/post-button.css'



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
