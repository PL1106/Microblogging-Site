import Header from './components/Header';
import Comment from './components/Comment';
import './style/header.css';
import './style/post-button.css';
import './style/comment.css';

function App() {
  return (
    <div>
      <Header />
      <div style={{ padding: '20px', display: 'flex', justifyContent: 'center' }}>
        <Comment />
      </div>
    </div>
  );
}

export default App;
