import React from 'react'
import Modal from 'react-modal'
import { useState } from 'react'
import { Link } from 'react-router-dom'


const FollowList = ({visible, toggleVisible, userList, header}) => {
  return(
   <Modal isOpen={visible} onRequestClose={toggleVisible} contentLabel={header}>
     <div className="modal-dialog custom-modal-size"> {/* Custom class to control the size */}
      <div className="modal-content">
        <div className="modal-header">
          <h3 className="modal-title">{header} </h3>
            <br/>
            <br/>
          <button type="button" className="border no-border close" onClick={toggleVisible}>
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div className="modal-body">
           <div className='list-group'>
            {
              userList.map(user =>
                 <Link className='list-group-item text-primary' to={{ pathname: `/profile/${user}`}} onClick={toggleVisible}>
                    @{user}
                 </Link>
                )
            }
           </div>
        </div>
      </div>
    </div>
  </Modal>

 )
}
export default FollowList;