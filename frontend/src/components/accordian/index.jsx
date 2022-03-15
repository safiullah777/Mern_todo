import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import { useState } from 'react';
import axios from 'axios';
import { deleteTodoUrl } from '../../utils/constants';

const SimpleAccordion = ({ editForm, onEdit, data,setNewTodos,settodoEdit,setTodo }) => {

  const [isClicked, setIsCicked] = useState(false)
  const Summary = {
    border: "2px #1465C0 solid",
    marginTop: "2rem",
    marginBottom: "1rem",
    borderRadius: '.7rem',
    color: "#1A2B61",
    // display:"flex"
  }
  const Details = {
    ...Summary,
    marginTop: "0rem",
    border: "2px green solid",

  }
  const SummaryTypo = {
    fontSize: "1.4rem",
    fontWeight: "bold",

  }
  const DetailsTypo = {
    fontSize: "1.9rem",
    fontWeight: "normal",
  }
  const edit = {
    cursor: "pointer",
    backgroundColor: "transparent",
    border: "none",
    color: "#4BB543",
    fontSize: "1.6rem",
    marginRight: "1rem",
    marginLeft: "auto"

  }
  const deleted = { ...edit, color: "red", marginLeft: "0.2rem" }
  const accordion={ backgroundColor: 'transparent', boxShadow: "none", borderBottom: "4px solid grey", marginBottom: "2rem" }
  
  
  const onDelete=async()=>{
      console.log(data);
    const newtodos=await axios.delete(deleteTodoUrl,{data})
    setNewTodos(newtodos.data.newTodos)
    console.log(newtodos.data);
  }
  const onEditButton=()=>{
    console.log(data);
    onEdit(true)
    settodoEdit({iseditClick:true,...data})
    // setTodo({
    //   title:data.title,
    //   description:data.description,
    //   // todoDate:data.todoDate
    // })
  }
  
  
  return (
    <div>
      <Accordion style={accordion}>
        <AccordionSummary
          aria-controls="panel1a-content"
          id="panel1a-header"
          style={Summary}
        >
          <span style={SummaryTypo} >
            {data.title.slice(0, 30)}
          </span>
          <button style={edit} onClick={onEditButton}>edit</button>
          <button style={deleted} onClick={onDelete}>delete</button>
        </AccordionSummary>
        <AccordionDetails
          style={Details}
        >
          <div className='title_des'>{data.title}</div>
          <span style={DetailsTypo}>
            {data.description ? data.description : "no description"}
          </span>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
export default SimpleAccordion