import { useState } from 'react'
import '../Styles/main.css'
import Form from 'react-bootstrap/Form';
import { createUniqueId } from './createUniqueId';
import { useContext } from 'react';
import { DataContext } from './DataContext';
const FormCreateNewTask = () => {
    const { setIsCreate, data, setData, dataTask, setDataTask } = useContext(DataContext);
    const [inputTitle, setInputTitle] = useState();
    const [inputCreator, setInputCreator] = useState();
    const [inputCreatedAt, setInputCreatedAt] = useState();
    const [selectStt, setSelectStt] = useState("New")
    const [inputDesscription, setInputDesscription] = useState();

    const handleClickSave = () => {
        setIsCreate(true)
        setData([...data, itemTask])
        setDataTask([...dataTask, itemTask])
    }
    const handleOnchangeInputTitle = (e) => {
        setInputTitle(e.target.value);
    }
    const handleOnchangeInputCreator = (e) => {
        setInputCreator(e.target.value);
    }
    const handleOnchangeInputCreatedAt = (e) => {
        setInputCreatedAt(e.target.value);
    }
    const handleOnchangeStt = (e) => {
        setSelectStt(e.target.value);
    }
    const handleOnchangeInputDesscription = (e) => {
        setInputDesscription(e.target.value);
    }
    let itemTask = {
        id: createUniqueId(),
        title: inputTitle,
        creator: inputCreator,
        status: selectStt,
        desscription: inputDesscription
    }
    return (
        <form className="form_createNewTask">
            <div className="wrap-form">
                <div className="form-group">
                    <label htmlFor="">Title:</label>
                    <input type="text" onChange={(e) => handleOnchangeInputTitle(e)} />
                </div>
                <div className="form-group">
                    <label htmlFor="">Creator:</label>
                    <input type="text" onChange={(e) => handleOnchangeInputCreator(e)} />
                </div>
                <div className="form-group">
                    <label htmlFor="">Created at:</label>
                    <input type="text" onChange={(e) => handleOnchangeInputCreatedAt(e)} />
                </div>
                <div className="form-group">
                    <label htmlFor="">Status:</label>
                    <Form.Select style={{ flex: 1 }} aria-label="Default select example" onChange={(e) => handleOnchangeStt(e)}>
                        <option value="New">New</option>
                        <option value="Doing">Doing</option>
                        <option value="Done">Done</option>
                    </Form.Select>
                </div>

                <div className="form-group">
                    <label htmlFor="">Desscription:</label>
                    <input type="text" onChange={(e) => handleOnchangeInputDesscription(e)} />
                </div>
            </div>
            <input type="submit" value='Add' variant="primary" onClick={() => handleClickSave()} />
        </form>
    )
}

export default FormCreateNewTask;