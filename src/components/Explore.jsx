import React from 'react'

export default function Explore() {
  return (
    <section id="explore">
        <div className="container">
            <div className="row row__column">
                <h2>
                    Explore more <span className="purple">Books</span>
                </h2>
                <a href="/books"></a>
                <button className="btn">Explore books</button>
            </div>
        </div>
    </section>
  )
}
