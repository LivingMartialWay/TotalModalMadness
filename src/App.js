import React, { useState, useEffect } from 'react';
import youtube from './apis/youtube';
import VideoDetail from './components/VideoDetail/';
import Modal from './components/Modal/'
import './app.css';

const App = () => {
  const KEY = 'AIzaSyBjt4ct6iJ8oEUCJzE-7iYzw3YNuDCK6Ng';
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [modal, setModal] = useState(true);
  const [tc, acceptTC] = useState(false);

  const ToggleModal = () => {setModal(!modal); console.log(tc);};
  const AcceptTerms = () => {acceptTC(tc => true); ToggleModal();};

  useEffect(() => {
      onTermSubmit('Bruce Lee on Natural Instinct & Control cihan bilgi');
  }, []);

  const onTermSubmit =  async term => {
    const response = await youtube.get('/search', {
      params: {
        q: term,
        type: 'video',
        key: KEY
      }
    });
    setSelectedVideo(response.data.items[0])
  };

  return (
    <div className="App">
      <Modal show={modal} close={ToggleModal} tandc={AcceptTerms}
        title="<still a dynamic title>">
        Bruce Lee's martial philosophies apply to devs, too.
      </Modal>
      <div className="ui container">
      <button className="clickMe" onClick={() => ToggleModal()}>Show Modal</button>
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
              <VideoDetail video={selectedVideo} />
            </div>
            <div className="five wide column">
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default App;
