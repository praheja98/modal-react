import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import Modal from './Modal.js';
import AnotherModal from './AnotherModal.js';
const root = document.getElementById('root');


class App extends Component {
  state = {showModal: false,showAnotherModal:false}
  handleShowMessageClick = () => this.setState({showModal: true})
  handleCloseModal = () => this.setState({showModal: false})
  handleCloseAnotherModal = () => this.setState({showAnotherModal: false})
  openAnotherModal = () => this.setState({showAnotherModal: true})
  render() {
    return (
      <div
        style={{
          height: '100%',
          display: 'grid',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <div
          style={{
            maxWidth: 400,
            position: 'relative',
          }}
        >
          <h1>My App</h1>
          <p>
            This is an example of how you might use React.createPortal. I think
            it is a pretty neat API that is yet another awesome escape hatch
            that React provides for practical reasons. Sometimes you just need
            to render something completely outside the React Tree.
          </p>
          <button onClick={this.handleShowMessageClick}>
            Show Secret Modal
          </button>
          {this.state.showModal ? (
            <Modal onClose={this.handleCloseModal}>
              This is the secret modal message!
	     <button onClick={this.openAnotherModal}> Open Modal </button>
            </Modal>
          ) : null }
	  {this.state.showAnotherModal ? (
			  <AnotherModal onClose={this.handleCloseAnotherModal}>
			this is a sample 
			  </AnotherModal>
	  ) : null}




        </div>
      </div>
    )
  }
}

export default App;
