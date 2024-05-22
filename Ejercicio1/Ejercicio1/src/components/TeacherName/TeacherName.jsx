import React, { useEffect, useState } from 'react'

const TeacherName = () => {
    const [profs, setProfs] = useState("Sofi")

    const changeProf = (event) => {
        const newProf = event.target.textContent;
        setProfs(newProf);
    }

return (
    <div>
        <div>
            <h2>Teacher</h2>
            <button className="selected-prof" >{profs}</button>
        </div>
            <button className="dropbtn"> Choose your teacher</button>
                <div className="dropdown-content">
                    <button className="prof" onClick={changeProf}>Data</button><br></br>
                    <button className="prof" onClick={changeProf}>Reyes</button><br></br>
                    <button  className="prof" onClick={changeProf}>Yolanda</button>
                </div>  
        </div>
)
}

export default TeacherName