import './App.css';

const ShareButton = () => {
  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: 'Share this content',
        text: 'Check out this awesome content!',
        url: 'https://example.com',
      })
        .then(() => console.log('Shared successfully'))
        .catch((error) => console.error('Error sharing:', error));

    } else {
      // Fallback to modal window if share menu is not available
      console.log(navigator.share)

    }

  };


  return (
    <button onClick={handleShare}>Share</button>
  );

};

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ShareButton />
      </header>
    </div>
  );
}

export default App;
