import React from "react";
import './Ideas.css';
import Card from "../Card/Card";

const Ideas = (props) => {
  const { ideas, deleteIdea } = props
  const ideaCards = ideas.map(idea => {
    return (
      <Card
        title={idea.title}
        description={idea.description}
        id={idea.id}
        key={idea.id}
        deleteIdea={deleteIdea}
      />
    )
  })
  return (
    <div className="ideas-container">
      {ideaCards}
    </div>
  )
}

export default Ideas;