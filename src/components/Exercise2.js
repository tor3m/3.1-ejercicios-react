import React, { Component } from "react";

class Exercise2 extends Component {
  render() {
    const card_title = (
      <div className="card__title">
        <img alt=""
          className="card__image"
          src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg"
        />
        <div className="card__title-date">
          <h2 className="card__title"> konam Bursai</h2>
          <p className="card__date">Lunes 26 de junio de 2017</p>
        </div>
      </div>
    );

    const card_text = (
      <p className="card__text">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </p>
    );

    const card_plus = (
      <div className="card__plus">
        <p className="card_more-text">Leer más...</p>
        <div>
          <span card__number-likes>37</span>
          <i class="fas fa-heart"></i>
        </div>
      </div>
    );

    const card_full = (
      <div className="App">
        <main className="card__background">
          <article className="card_container">
            {card_title}
            {card_text}
            {card_plus}
          </article>
        </main>
      </div>
    );

    return card_full;
  }
}
export default Exercise2;
