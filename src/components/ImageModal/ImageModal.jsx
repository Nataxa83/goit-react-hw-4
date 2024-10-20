import Modal from 'react-modal';
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
const ImageModal = ({ isOpenModal, closeModal, regular, location, description}) => {
  return (
<Modal
        isOpen={isOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
        
        
        >
       <img className={css.modalImg} src={regular} alt={description} />

      <p className={css.data}><span className={css.infoTerm}>Location:</span> {location}</p>
      <p className={css.data}><span className={css.infoTerm}>Desc:</span> {description}</p>
</Modal>
);  };

      export default ImageModal;
      