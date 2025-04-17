import React from 'react'

const TeamMemberCard = ({name, title}) =>{
    return(
        <div> 
            <h2> Team member's name: {name} </h2>
            <h2> Job Title: {title} </h2>
        </div>
    )
}

export default TeamMemberCard