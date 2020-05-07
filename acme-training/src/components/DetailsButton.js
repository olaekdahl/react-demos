import React from 'react'
import Modal from 'react-modal';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)'
    }
};

let DetailsButton = (props) => {
    const [state, setState] = React.useState({ modalIsOpen: false });

    let openModal = () => {
        setState({ modalIsOpen: true });
    }

    // let afterOpenModal = () => {
    //     // references are now sync'd and can be accessed.
    //     this.subtitle.style.color = '#f00';
    // }

    let closeModal = () => {
        setState({ modalIsOpen: false });
    }

    Modal.setAppElement('#root');

    return (
        <div>
            <button className="btn btn-sm btn-outline-primary py-0" style={{fontSize: "0.8em"}} onClick={openModal}>Details</button>
            <Modal
                isOpen={state.modalIsOpen}
                // onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >

                <button className="btn btn-sm py-0 btn-danger" style={{fontSize: "0.8em"}} onClick={closeModal}>x</button>
                <p></p>
                <b>Character Details</b>

                <p></p>
                <div>{props.name}</div>

            </Modal>
        </div>
    )
}

export default DetailsButton;