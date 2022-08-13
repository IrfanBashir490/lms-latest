import React, { lazy, useEffect, useState } from 'react';
import { BrowserRouter as Router, Link, NavLink, Switch, useHistory, useRouteMatch } from 'react-router-dom';
import collaboration from '../../assests/images/icons-8-collaboration.png';
import collaboration2x from '../../assests/images/icons-8-collaboration@2x.png';
import collaboration3x from '../../assests/images/icons-8-collaboration@3x.png';
import left from '../../assests/images/icons-8-left.png';
import left2x from '../../assests/images/icons-8-left@2x.png';
import left3x from '../../assests/images/icons-8-left@3x.png';
import repository from '../../assests/images/repository-selected-white.png';
import repository2x from '../../assests/images/repository-selected-white@2x.png';
import repository3x from '../../assests/images/repository-selected-white@3x.png';
import BaseLayoutWrapper from '../../components/baselayout/BaseLayout';
import { useAppContextState } from '../../services/context';
import { PrivateRoute } from '../../utils/PrivateRoute';
import './DiscussionMain.css';

const DiscussionRepository = lazy(() => import("./components/DiscussionRepository"));
const MyDiscussion = lazy(() => import("./components/MyDiscussion"));

const DiscussionMain = (props) => {

    /*********************** */
    // STATES
    /*********************** */
    const history = useHistory()
    const [appglobal, setAppGlobal] = useAppContextState()
    const [buttonStyle, setButtonStyle] = useState({
        interactStyle: "myInteractionButton", repoStyle: "respositoryStyling", mainText: "My Interaction"
    })

    useEffect(() => {
        appglobal.pagetitle = "Discussion"
    }, [])

    /************************** */
    // EVENTS
    /************************* */
    const handleInteractChange = () => {
        setButtonStyle({
            interactStyle: "myInteractionButton", repoStyle: "respositoryStyling", mainText: "My Interaction"
        })
    }
    const handleRepoChange = () => {
        setButtonStyle({
            interactStyle: "myInteractionsStyling", repoStyle: "respositoryButton", mainText: "Interaction Repository"
        })
    }
    const handleDiscussionItemRoute = (item) => {
        history.push('/interaction/discussion/' + item.id)
    }
    const { path, url } = useRouteMatch();
    return (
        <BaseLayoutWrapper>
            <div className="discussion-container">
                {buttonStyle.mainText === "My Interaction" ?
                    <NavLink to={`${url}/create`} >
                        <div className="createInteractionButton">
                            <span className="create_discussion"> + Create </span>
                        </div>
                    </NavLink>
                    : null
                }

                <Router>
                    <div className="flex-styling">
                        <button className="back-discussion" onClick={history.goBack}>
                            <img
                                src={left}
                                srcSet={`${left2x} 2x, ${left3x} 3x`}
                                alt='left' />
                        </button>
                        <span className="interaction">{buttonStyle.mainText}</span>
                        <Link className={buttonStyle.interactStyle} to={"/interaction"} onClick={handleInteractChange}>
                            <span style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }} >
                                <img className="icons8-collaboration" src={collaboration} srcSet={`${collaboration2x} 2x, ${collaboration3x} 3x`} alt="collaboration"></img>
                                <span className="MyInteractions_text">My Interactions</span>
                            </span>
                        </Link>
                        <Link className={buttonStyle.repoStyle} to={"/interaction/repository"} onClick={handleRepoChange}>
                            <span style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }} >
                                <img className="Repository-un-selected" src={repository} srcSet={`${repository2x} 2x,${repository3x} 3x`} alt="repository"></img>
                                <span className="Repository_text">Repository</span>
                            </span>
                        </Link>
                    </div>

                    <Switch>
                        <PrivateRoute exact path={`${path}`}>
                            <MyDiscussion handleDiscussionItem={handleDiscussionItemRoute} />
                        </PrivateRoute>

                        <PrivateRoute exact path={`${path}/repository`}>
                            <DiscussionRepository handleDiscussionItem={handleDiscussionItemRoute} />
                        </PrivateRoute>
                    </Switch>
                </Router>
            </div>
        </BaseLayoutWrapper>
    )
}

export default DiscussionMain;