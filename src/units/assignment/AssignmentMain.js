import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import left from '../../assests/images/icons-8-left.png';
import left2x from '../../assests/images/icons-8-left@2x.png';
import left3x from '../../assests/images/icons-8-left@3x.png';
import BaseLayoutWrapper from '../../components/baselayout/BaseLayout';
import { useAppContextState } from '../../services/context';
import './AssignmentMain.css';
import MyAssignment from "./components/MyAssignment";

const AssignmentBase = () => {
    /*********************** */
    // STATES
    /*********************** */
    const history = useHistory()
    const [appglobal, setAppGlobal] = useAppContextState()

    useEffect(() => {
        appglobal.pagetitle = "Assignment List"
    }, [])

    /************************** */
    // EVENTS
    /************************* */
    const handleAssignmentItemRoute = (item) => {
        history.push('/assignment/discussion/' + item.id)
    }

    return (
        <BaseLayoutWrapper>
            <div className="assignemntlanding_wrapper">
                <div className="assignmentmain_row">
                    <div className="assignmentmain-header">
                        <button className="assign-back-discussion" onClick={history.goBack}>
                            <img
                                src={left}
                                srcSet={`${left2x} 2x, ${left3x} 3x`}
                                alt='left' />
                        </button>
                        <span className="assignment">Assignment</span>
                    </div>
                </div>
                <MyAssignment handleAssignmentItem={handleAssignmentItemRoute} />
            </div>
        </BaseLayoutWrapper>
    )
}

export default AssignmentBase