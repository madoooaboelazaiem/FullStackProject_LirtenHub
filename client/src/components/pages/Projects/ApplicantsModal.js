import ReactModal from 'react-modal';
const customStyles = {
    content : {
      top                   : '50%',
      left                  : '50%',
      right                 : 'auto',
      bottom                : 'auto',
      marginRight           : '-50%',
      transform             : 'translate(-50%, -50%)'
    }
  };
  class ApplicantsModal extends React.Component {
    state = { showModal: false };
      
    
    
    handleOpenModal () {
      this.setState({ showModal: true });
    }
    
    handleCloseModal () {
      this.setState({ showModal: false });
    }
    render(){ 
      this.handleOpenModal = this.handleOpenModal.bind(this);
      this.handleCloseModal = this.handleCloseModal.bind(this);
      return (
        <div>
          <button onClick={this.handleOpenModal}>Trigger Modal</button>
          <ReactModal 
             isOpen={this.state.showModal}
             contentLabel="Minimal Modal Example"
             style={customStyles}
          >
            <button onClick={this.handleCloseModal}>Close Modal</button>
          </ReactModal>
        </div>
        
      );
    }
  }
  export default ApplicantsModal