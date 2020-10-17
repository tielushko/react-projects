import React from "react";


const List = ({people}) => {
  return (
    <React.Fragment>
      {people.map((person) => {
        const { id, name, age, image } = person;
        return (
          <article className="person" id={id}>
            <img src={image} alt=""></img>
            <div>
              <h4>{name}</h4>
              <p>{age} years</p>
            </div>
          </article>
        );
      })}
    </React.Fragment>
  );
};

export default List;
