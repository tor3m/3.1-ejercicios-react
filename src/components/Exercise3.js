import React, { Component } from "react";

const data = {
  image:
    "https://ucarecdn.com/f8cf81eb-3bab-4bba-9431-668884eab174/-/resize/300x/",
  cardTitle: "Bob Dylan",
  cardDate: "May 24, 1941",
  cardDescription:
    "Bob Dylan (born Robert Allen Zimmerman, May 24, 1941) is an American singer/songwriter, author, and artist who has been an influential figure in popular music and culture for more than five decades.",
  button: {
    url: "https://en.wikipedia.org/wiki/Bob_Dylan",
    label: "Go to wikipedia",
  },
};

class Exercise3 extends Component {
  render() {
    return (
      <div className="card__background">
        <article className="card_container">
          <div className="card__title">
            <img className="card__image" alt="" src={data.image} />
            <div className="card__title-date">
              <h2 className="card__title"> {data.cardTitle}</h2>
              <p className="card__date">¨{data.cardDate}</p>
            </div>
          </div>
          <p className="card__text">{data.cardDescription}</p>
          <div className="card__plus">
            <p className="card_more-text">Leer más...</p>
            <div>
              <a href={data.button.url} card__number-likes></a>
              <span>{data.button.label}</span>
            </div>
          </div>
        </article>
      </div>
    );
  }
}

export default Exercise3;
