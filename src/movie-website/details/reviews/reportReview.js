import React from 'react'
import Modal from 'react-modal'
import { useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { createReportThunk } from '../../services/reports-thunks';
import formatDateTime from '../../../util/formatDateTime';
import { current } from '@reduxjs/toolkit';



const ReportReview = ({reporting, toggleReporting, rev_id}) => {
  const { username } = useSelector((state) => state.user.currentUser);
  const[reportText, setReportText] = useState('')
  const[category, setCategory] = useState('Select one')
  const[errorMessage, setErrorMessage] = useState(false)

  const dispatch = useDispatch()

  const onSubmitReport = (event) => {
    event.preventDefault()
    if (category === 'Select one') {
      setErrorMessage(true)
      return
    }

    let timestamp = new Date();
    timestamp = formatDateTime(timestamp.toISOString())

    const report = {
      reportText,
      category,
      timestamp,
      username,
      rev_id
    }
    console.log("GOING TO DISPATCH")
    dispatch(createReportThunk(report))

    toggleReporting()
    setCategory('Select one')
    setReportText('')
    setErrorMessage(false)
  }

  const handleCategoryChoice = (event) => {
    setCategory(event.target.value)
  }

  const handleTextChange = (event) => {
    setReportText(event.target.value)
  }

  return(
   <Modal isOpen={reporting} onRequestClose={toggleReporting} contentLabel="Report Review">
     <div className="modal-dialog custom-modal-size"> {/* Custom class to control the size */}
      <div className="modal-content">
        <div className="modal-header">
          <h3 className="modal-title">Report Review </h3>
            <br/>
            <br/>
          <button type="button" className="border no-border close" onClick={toggleReporting}>
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div className="modal-body">
          <form onSubmit={onSubmitReport}>
            <label for="report-dropdown" className="fs-4"> Category (Required) </label>
            <div>
            <select id="report-dropdown"
                    value={category}
                    onChange={handleCategoryChoice}>
                <option value='none' selected>Select one</option>
                <option value='spam'>Unwanted commercial content or spam</option>
                <option value='illegal'>Illegal content</option>
                <option value='harassment'>Harassment or bullying</option>
                <option value='spoilers'>Review contains spoilers</option>
                <option value='misinformation'>Misinformation</option>
                <option value='other'>Other</option>
            </select>
            </div>
            <br/>
            <br/>
            <textarea className="form-control form-control-lg wd-width-100 fs-5" 
                      placeholder="Additional comments (optional)"
                      value={reportText}
                      onChange={handleTextChange}> 
            </textarea>
            <button type="submit" className="btn btn-primary mt-3">Submit</button>
          </form>
          {
            errorMessage &&
            <>
            <br/>
            <div className="text-danger"> Please select a category from the list. </div>
            </>
          }
        </div>
      </div>
    </div>
  </Modal>

 )
}
export default ReportReview;