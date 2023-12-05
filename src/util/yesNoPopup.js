import React from 'react'
import Modal from 'react-modal'
import './index.css'
import WhiteTextBtn from '../ui-styling/buttons/text/whiteTextBtn'


/* 
 * A popup that confirms whether the user wants to do something;
 * gives yes and no option
 */
const YesNoPopup = ({visible, toggleVisible, text, yesFn}) => {
  return(
   <Modal isOpen={visible} onRequestClose={toggleVisible} contentLabel="Are you sure?">
     <div className="modal-dialog modal-sm">
      <div className="modal-content">
        <div className="modal-header">
          <h2 className="modal-title text-center w-100 mb-5"> Are You Sure? </h2>
            <br/>
            <br/>
        </div>
        <div className="modal-body">
          <div className='fs-4 mb-3'>{text}</div>
        </div>
        <div className='d-flex flex-row w-100 justify-content-center'>
          <WhiteTextBtn text="Yes" fn={yesFn}/>
          <WhiteTextBtn text="No" fn={toggleVisible}/>
        </div>
      </div>
    </div>
  </Modal>
 )
}
export default YesNoPopup;