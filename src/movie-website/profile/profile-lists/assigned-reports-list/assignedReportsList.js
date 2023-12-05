import React, { useEffect, useState } from "react";
import "../../index.css"
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router";
import { findAdminReportsThunk } from "../../../services/reports-thunks";
import AssignedReportsListItem from "./assignedReportsListItem";
import TagBtn from "../../../../ui-styling/buttons/text/tagBtn";

function AssignedReportsList() {
    const { currentUser } = useSelector((state) => state.user);
    const { reports } = useSelector((state) => state.reports)
    let unresolvedReports = [];

    const [viewAll, setViewAll] = useState(false)
    const [visibleReports, setVisibleReports] = useState(unresolvedReports)
    let {username} = useParams();
    const dispatch = useDispatch();


    let adminUsername = currentUser.username;

    useEffect(() => {
        dispatch(findAdminReportsThunk(adminUsername))
    }, [adminUsername, dispatch]);

    useEffect(() => {
      const updatedUnresolvedReports = reports.filter(report => !report.is_resolved);
      if (viewAll) {
          setVisibleReports(reports);
      } else {
          setVisibleReports(updatedUnresolvedReports);
      }
    }, [reports, viewAll])

    const handleToggleView = () => {
      setViewAll(!viewAll)
    }


    return (
        <div>
            <ul className="wd-profile-list list-group">
                <li>
                    <h3>{currentUser.firstname}'s Assigned Reports:</h3><br />
                    <div className="d-flex justify-content-center">
                      <TagBtn text="View Unresolved" selected={!viewAll} fn={handleToggleView}/>
                      <TagBtn text="View All Reports" selected={viewAll} fn={handleToggleView}/>
                    </div>
                    <br/>
                </li>
                {
                    visibleReports.map(report => {
                        return <><AssignedReportsListItem
                            key={report.rep_id}
                            adminUsername={adminUsername}
                            rep_id={report.rep_id}
                            rev_id={report.rev_id}
                            category={report.category}
                            date_submitted={report.date_submitted}
                            submitter_id={report.submitter_id} 
                            report_text={report.report_text} 
                            movie_id={report.movie_id}
                            critic_id={report.critic_id}
                            review_text={report.review_text}
                            is_resolved={report.is_resolved}
                         />
                         <br/>
                         </>
                    }
                    )
                }
            </ul>
        </div>
    );
}
export default AssignedReportsList;
