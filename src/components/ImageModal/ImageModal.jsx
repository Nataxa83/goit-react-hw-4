import Modal from 'react-modal';
import ReactDOM from 'react-dom';
Modal.setAppElement('#root');
import css from './ImageModal.module.css'

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
};
const ImageModal = ({ isOpenModal, closeModal, regular, description}) => {
  return (
<Modal
        isOpen={isOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
       
       <img className={css.modalImg} src={regular} alt={description} />
      </Modal>
       );
      };

      export default ImageModal;
      