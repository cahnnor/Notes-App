import React, {useState, useEffect} from 'react'
import { useParams, useNavigate} from "react-router-dom";
import { ReactComponent as ArrowLeft } from '../assets/arrow-left.svg'


const NotePage = () => {
    /*let noteId = match.params.id*/
    let params = useParams();
    let nav = useNavigate();
    let [note, setNote] = useState(null)

    useEffect(()=>{
        getNote()
    }, [params.id])

    let getNote = async ()=> {
        if(params.id == 'new') return
        let response = await fetch(`/api/notes/${params.id}`)
        let data = await response.json()
        setNote(data)
    }

    let createNote = async ()=> {
        
        
        fetch(`/api/notes/create/`, {
            method:"POST",
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(note)

        })
        
    }
    
    let updateNote = async ()=> {
        
        /* Everything is being called but somehow this is failing to change the note. */
        fetch(`/api/notes/${params.id}/update/`, {
            method:"PUT",
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(note)

        })
        
    }

    let deleteNote = async ()=> {
        await fetch(`/api/notes/${params.id}/delete/`, {
            method:"DELETE",
            headers:{
                'Content-Type': 'application/json'
            }
        })
       nav('/');
    }


    let handleSubmit = async ()=> {
        console.log(note)
        if(params.id !== 'new' && note.body === ''){
            console.log("Deleted")
            await deleteNote()
        }else if(params.id !== 'new'){
            console.log("Updated")
            await updateNote()
        }else if(params.id === 'new' && note.body !== null){
            console.log("Created")
            await createNote()
        }
        
        nav('/');
        nav(0);
    }

    let handleChange = (value)=>{
        setNote({...note, 'body':value})
        console.log("Handle Change Proc")
    }

  return (
    <div className="note">
        <div className="note-header">
            <h3>
                <ArrowLeft onClick={handleSubmit} />
            </h3>
            {params.id !== 'new' ? (
                <button onClick={deleteNote}>Delete</button>
            ) : (
                <button onClick={handleSubmit}>Done</button>
            )}
            
        </div>
        <textarea onChange={(e) => {handleChange(e.target.value) }} value={note?.body}></textarea>
    </div>
  )
}

export default NotePage