import React, { Fragment, useEffect, useState } from 'react';
import { Dropdown, Row } from 'react-bootstrap';
import BootstrapTable from "react-bootstrap-table-next";
import { useHistory } from 'react-router-dom';
import addSelected from "../../../assests/images/add-selected.png";
import addSelected2x from "../../../assests/images/add-selected@2x.png";
import addSelected3x from "../../../assests/images/add-selected@3x.png";
import addUnselected from "../../../assests/images/add-unselected.png";
import addUnselected2x from "../../../assests/images/add-unselected@2x.png";
import addUnselected3x from "../../../assests/images/add-unselected@3x.png";
import arrow from "../../../assests/images/icons-8-expand-arrow-copy.png";
import arrow2x from "../../../assests/images/icons-8-expand-arrow-copy@2x.png";
import arrow3x from "../../../assests/images/icons-8-expand-arrow-copy@3x.png";
import left from '../../../assests/images/icons-8-left.png';
import left2x from '../../../assests/images/icons-8-left@2x.png';
import left3x from '../../../assests/images/icons-8-left@3x.png';
import readables from '../../../assests/images/readables.png';
import readables2x from '../../../assests/images/readables@2x.png';
import readables3x from '../../../assests/images/readables@3x.png';
import remove from "../../../assests/images/remove-selected.png";
import remove2x from "../../../assests/images/remove-selected@2x.png";
import remove3x from "../../../assests/images/remove-selected@3x.png";
import video from '../../../assests/images/video.png';
import video2x from '../../../assests/images/video@2x.png';
import video3x from '../../../assests/images/video@3x.png';
import BaseLayoutWrapper from '../../../components/baselayout/BaseLayout';
import { useAppContextState } from '../../../services/context';
import './ContentCreateSet.css';
import ModuleItem from './ModuleItem';

const ContentCreateSet = (props) => {

    const styles = {
        subContainerStyling: {
            width: '1080px',
            height: '1000px',
            borderRadius: '6px',
            boxShadow: '0 0 25px 0 rgba(54, 44, 89, 0.2)',
            backgroundColor: '#ffffff'
        },
        rowStyling: {
            marginLeft: '0',
            marginRight: '0'
        }
    }


    const history = useHistory()
    const [uipagestate, setUiPageState] = useState({
        selectedConceptName: "All Concept", selectedObjectiveName: "All Objectives", topics: [], topicIndex: []
    });
    const [index, setIndex] = useState([]);
    const [topic, setTopics] = useState([]);
    const [question, setQuestion] = useState([]);
    const [questionIndex, setQuestionIndex] = useState([]);
    const [appglobal, setAppGlobal] = useAppContextState()

    useEffect(() => {
        appglobal.pagetitle = "Create Module"
    }, [])

    const handleConceptSelect = (e, option) => {
        e.preventDefault()
        setUiPageState({ ...uipagestate, selectedConceptName: option.name })
        console.log(uipagestate.topicIndex, uipagestate.topics, uipagestate.selectedConceptName)
    }
    const handleObjectiveSelect = (e, option) => {
        e.preventDefault()
        setUiPageState({ ...uipagestate, selectedObjectiveName: option.name })
        console.log(uipagestate.topicIndex, uipagestate.topics, uipagestate.selectedConceptName)
    }
    const handleAddTopic = (e, indexs) => {
        e.preventDefault()
        setTopics(topic => [...topic, { topicName: indexs.name, duration: `${indexs.duration}min`, id: indexs.id, type: `${indexs.type}`, type2x: `${indexs.type}2x`, type3x: `${indexs.type}3x` }])
        topic.filter((x, i, a) => a.indexOf(x) == i)
        setIndex(index => [...index, indexs.id])
    }
    const handleAddQuestion = (e, indexs) => {
        e.preventDefault()
        setQuestion(question => [...question, { question: indexs.question, duration: `${indexs.duration}min`, id: indexs.id, type: `${indexs.type}`, type2x: `${indexs.type}2x`, type3x: `${indexs.type}3x` }])
        question.filter((x, i, a) => a.indexOf(x) == i)
        setQuestionIndex(questionIndex => [...questionIndex, indexs.id])
    }

    const removeTopic = (indexs) => {
        setIndex(index.filter(item => item != indexs))
        setTopics(topic.filter(item => item.id != indexs))
    }
    const clearAllTopic = (e) => {
        e.preventDefault()
        setIndex(index => []);
        setTopics(topic => []);
    }
    const concepts = [
        { name: "Test 1" }, { name: "Test 2" }, { name: "Test 3" }, { name: "Test 4" }, { name: "Test 5" },
    ];
    const objectives = [
        { name: "Test 1" }, { name: "Test 2" }, { name: "Test 3" }, { name: "Test 4" }, { name: "Test 5" },
    ];

    const typeIcon = (cell, row, rowIndex, formatExtraData, value) => {
        return (
            (cell === "video") ?
                <img alt="type" src={video} srcSet={`${video2x} 2x, ${video3x} 3x`} />
                :
                <img alt="type" src={readables} srcSet={`${readables2x} 2x, ${readables3x} 3x`} />
        );
    };


    const filterIndex = (topicIndex) => {
        return index.filter((x, i, a) => a.indexOf(x) == i)
    }
    const filterTopic = (topicIndex) => {
        // convert to JSON string the array content, then reverse it (to check from end to begining)
        // check if there is any occurence of the item in whole array
        // revert it to original state
        return topicIndex.map(JSON.stringify).reverse().filter(function (item, index, arr) { return arr.indexOf(item, index + 1) === -1; }).reverse().map(JSON.parse)
    }
    const addIcon = (cell, row, rowIndex) => {
        const temp = filterTopic(topic).filter((item) => item.id == row.id)
        return (
            (cell === "select") ?
                temp.map((item) => item.id === row.id)[0] ?
                    <img alt="add" src={addUnselected} srcSet={`${addUnselected2x} 2x, ${addUnselected3x} 3x`} />
                    :
                    <img alt="add" src={addSelected} srcSet={`${addSelected2x} 2x, ${addSelected3x} 3x`} onClick={(e) => handleAddTopic(e, row)} />
                : (cell === "un-select") ?
                    <img alt="add" src={addUnselected} srcSet={`${addUnselected2x} 2x, ${addUnselected3x} 3x`} />
                    :
                    <img alt="add" src={remove} srcSet={`${remove2x} 2x, ${remove3x} 3x`} />
        );
    };
    const addQuestionIcon = (cell, row) => {
        const temp = filterTopic(topic).filter((item) => item.id == row.id)
        return (
            (cell === "select") ?
                temp.map((item) => item.id === row.id)[0] ?
                    <img alt="add" src={addUnselected} srcSet={`${addUnselected2x} 2x, ${addUnselected3x} 3x`} />
                    :
                    <img alt="add" src={addSelected} srcSet={`${addSelected2x} 2x, ${addSelected3x} 3x`} />
                : (cell === "un-select") ?
                    <img alt="add" src={addUnselected} srcSet={`${addUnselected2x} 2x, ${addUnselected3x} 3x`} />
                    :
                    <img alt="add" src={remove} srcSet={`${remove2x} 2x, ${remove3x} 3x`} />
        );
    };


    const contents = [
        { id: 1, name: "Life Processes", type: "video", duration: "1", add: "select" },
        { id: 2, name: "Acids, Bases, and Salts", type: "readables", duration: "10", add: "select" },
        { id: 3, name: "Metals and Non-Metals", type: "video", duration: "3", add: "select" },
        { id: 4, name: "Metals and Non-Metals", type: "readables", duration: "6", add: "cant-select" },
        { id: 5, name: "Periodic Classification of Elements", type: "video", duration: "2", add: "select" },
        { id: 6, name: "Life Processes", type: "readables", duration: "5", add: "select" },
        { id: 7, name: "Control and Coordination", type: "readables", duration: "4", add: "select" },
        { id: 8, name: "How Do Organisms Reproduce", type: "video", duration: "7", add: "cant-select" },
        { id: 9, name: "How Do Organisms Reproduce", type: "video", duration: "7", add: "cant-select" },
        { id: 10, name: "How Do Organisms Reproduce", type: "video", duration: "7", add: "cant-select" },
        { id: 11, name: "How Do Organisms Reproduce", type: "video", duration: "7", add: "cant-select" },
        { id: 12, name: "How Do Organisms Reproduce", type: "video", duration: "7", add: "cant-select" },
        { id: 13, name: "How Do Organisms Reproduce", type: "video", duration: "7", add: "cant-select" },
        { id: 14, name: "How Do Organisms Reproduce", type: "video", duration: "7", add: "cant-select" },
        { id: 15, name: "How Do Organisms Reproduce", type: "video", duration: "7", add: "cant-select" },
    ];
    const questions = [
        { id: 1, question: "What is life Processes?", add: "select" },
        { id: 2, question: "what is acids, Bases, and Salts ? ", add: "select" },
        { id: 3, question: "Metals and Non-Metals", add: "select" },
        { id: 4, question: "Carbon and Its Compounds", add: "un-select" },
        { id: 5, question: "Periodic Classification of Elements", add: "select" },
        { id: 6, question: "Life Processes", add: "un-select" },
        { id: 7, question: "Control and Coordination", add: "select" },
        { id: 8, question: "How Do Organisms Reproduce", add: "select" },
        { id: 9, question: "Life Processes", add: "select" },
        { id: 10, question: "Life Processes", add: "select" },
        { id: 11, question: "Life Processes", add: "cant-select" },
        { id: 12, question: "Life Processes", add: "cant-select" },
        { id: 13, question: "Life Processes", add: "cant-select" },
        { id: 14, question: "Life Processes", add: "cant-select" },
        { id: 15, question: "Life Processes", add: "cant-select" },
        { id: 16, question: "Life Processes", add: "cant-select" },
        { id: 17, question: "Life Processes", add: "cant-select" },
        { id: 18, question: "Life Processes", add: "cant-select" },
        { id: 19, question: "Life Processes", add: "cant-select" },
        { id: 20, question: "Life Processes", add: "cant-select" },

    ]
    const conceptColumns = [
        {
            dataField: "id",
            text: "",
        }, {
            dataField: "name",
            width: 'auto',
            text: "Content  display name- (26)",
            headerStyle: {
                textAlign: "left",
            },
            style: {
                textAlign: "left",
            },
        }, {
            dataField: "type",
            formatter: typeIcon,
            text: "Type",
        }, {
            dataField: "duration",
            text: "Duration",
        }, {
            dataField: "add",
            text: "",
            formatter: addIcon,
            formatExtraData: topic,
        }
    ];
    const questionColumns = [
        {
            dataField: "id",
            text: "",
        }, {
            dataField: "question",
            width: 'auto',
            text: "Questions  - 154",
            headerStyle: {
                textAlign: "left",
            },
            style: {
                textAlign: "left",
            },
        }, {
            dataField: "add",
            formatter: addQuestionIcon,
            text: "",
        }
    ];
    const defaultSorted = [
        {
            dataField: "name",
            order: "desc",
        },
    ];

    return (
        <Fragment>
            <BaseLayoutWrapper>
                <div style={styles.subContainerStyling}>

                    <Row style={{ display: 'flex', flexDirection: 'column' }, styles.rowStyling} >
                        <span className='top-header-container'>
                            <a className="back" href="#" onClick={history.goBack}>
                                <img
                                    src={left}
                                    srcSet={`${left2x} 2x, ${left3x} 3x`}
                                    alt='left' />
                            </a>
                            <span className='top-header-title'> My Study Circle &gt; 6th Class &gt; Content Details &gt; Create Modules Set/ Sequence </span>
                        </span>
                        <hr style={{ border: 'solid 1px #d8d4ee', width: '1078px' }} />
                    </Row>

                    <Row style={{ display: 'flex', flexDirection: 'row' }, styles.rowStyling}>
                        <span className='content-holder' style={{ marginLeft: '30px', width: '300px' }} >
                            <span className='content-title'>Module Display Name </span>
                            <input type="text" className='content-select' />
                        </span>
                        <span className='content-holder' style={{ marginLeft: '50px', width: '300px' }}>
                            <span className='content-title'> Description </span>
                            <input type="text" className='content-select' />
                        </span>
                        <span className='content-holder' style={{ marginLeft: '66px', width: '80px' }}>
                            <span className='content-title'>Total Duration</span>
                            <span className='duration-display'>  {topic ? topic.reduce((totalDuration, item) => totalDuration + parseInt(item.duration), 0) : null} min  </span>
                        </span>
                        <span className='content-holder' style={{ marginLeft: '71px', width: '80px' }}>
                            <span className='content-title'>Topic </span>
                            <span className='duration-display'>  {topic ? topic.reduce((totalDuration, item) => totalDuration + parseInt(item.duration), 0) : null} min </span>
                        </span>

                    </Row>

                    <div className='topic-holder' style={{ display: 'flex', flexDirection: 'row' }}>
                        <div>
                            {topic.length > 0 ?
                                <span style={{ display: 'flex', flexDirection: 'row' }}>
                                    <span className='grey-text type'> Type </span>
                                    <span className='grey-text duration'> Duration </span>
                                </span>
                                : null
                            }
                            {filterTopic(topic).map((top, idx) => (
                                filterIndex(index).map((filter, iidx) =>
                                    (filter == top.id) ?
                                        <ModuleItem
                                            topicName={top.topicName}
                                            duration={top.duration}
                                            index={top.id}
                                            type={top.type}
                                            type2x={top.type2x}
                                            type3x={top.type3x}
                                            removeTopic={removeTopic}
                                            idx={idx + 1}
                                        />
                                        :
                                        null
                                )))
                            }
                        </div>
                        <div>
                            {topic.length > 0 ?
                                <span style={{ display: 'flex', flexDirection: 'row' }}>
                                    <span className='grey-text type'> Type </span>
                                    <span className='grey-text duration'> Duration </span>
                                </span>
                                : null
                            }
                            {filterTopic(topic).map((top, idx) => (
                                filterIndex(index).map((filter, iidx) =>
                                    (filter == top.id) ?
                                        <ModuleItem
                                            topicName={top.topicName}
                                            duration={top.duration}
                                            index={top.id}
                                            type={top.type}
                                            type2x={top.type2x}
                                            type3x={top.type3x}
                                            removeTopic={removeTopic}
                                            idx={idx + 1}
                                        />
                                        :
                                        null
                                )))
                            }
                        </div>
                    </div>

                    <span style={{ display: 'flex', flexDirection: 'row', marginTop: '23px' }}>
                        <span style={{ marginLeft: '41px' }}>
                            <Dropdown>
                                <Dropdown.Toggle className='dropdown-head'>
                                    {uipagestate.selectedConceptName}
                                    <img src={arrow} srcSet={`${arrow2x} 2x, ${arrow3x} 3x`} alt="arrow" className="arrow" />
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    {concepts.map((item, index) => (
                                        <Fragment key={index}>
                                            <Dropdown.Item onClick={(e) => handleConceptSelect(e, item)}
                                                className='dropdown-item'>
                                                {item.name}
                                            </Dropdown.Item>
                                        </Fragment>
                                    ))}
                                </Dropdown.Menu>
                            </Dropdown>

                        </span>
                        <span style={{ marginLeft: '41px' }}>
                            <Dropdown>
                                <Dropdown.Toggle className='dropdown-head'>
                                    {uipagestate.selectedObjectiveName}
                                    <img src={arrow} srcSet={`${arrow2x} 2x, ${arrow3x} 3x`} alt="arrow" className="arrow" />
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    {objectives.map((item, index) => (
                                        <Fragment key={index}>
                                            <Dropdown.Item onClick={(e) => handleObjectiveSelect(e, item)}
                                                className='dropdown-item'>
                                                {item.name}
                                            </Dropdown.Item>
                                        </Fragment>
                                    ))}
                                </Dropdown.Menu>
                            </Dropdown>
                        </span>
                    </span>
                    <div style={{ display: 'flex' }}>
                        <div className='table-wrapper'>
                            <BootstrapTable
                                bootstrap4
                                keyField="id"
                                data={contents}
                                columns={conceptColumns}
                                defaultSorted={defaultSorted}
                                striped
                                hover
                                condensed
                                bordered={false}
                                noDataIndication="Table is empty."
                            />
                        </div>
                        <div className='table-wrapper' style={{ marginLeft: '40px' }}>
                            <BootstrapTable
                                bootstrap4
                                keyField="id"
                                data={questions}
                                columns={questionColumns}
                                defaultSorted={defaultSorted}
                                striped
                                hover
                                condensed
                                bordered={false}
                                noDataIndication="Table is empty."
                            />
                        </div>
                    </div>
                    <hr style={{ color: 'red' }} />
                    <div style={{ display: 'flex', flexDirection: 'row' }}>
                        <button className='cancel' style={{ marginLeft: '30px' }}> <span className='cancel-font'> Cancel  </span>  </button>
                        <button className='cancel' style={{ marginLeft: '10px' }} onClick={(e) => clearAllTopic(e)} > <span className='cancel-font'> Clear All      </span> </button>
                        <button className='sequence' style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginLeft: '433px' }}>
                            <input type="checkbox" className='check' style={{ marginLeft: '9px' }} />
                            <span className='sequence-font' style={{ marginLeft: '10px' }}> Sequence </span>
                        </button>
                        <button className='create'> <span className='cancel-font'> Create  </span> </button>
                    </div>
                </div>
            </BaseLayoutWrapper>
        </Fragment>
    )

}

export default ContentCreateSet;