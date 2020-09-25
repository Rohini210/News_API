import React from "react"
import All from "./All.css"
import { Card } from "react-bootstrap"

export default function SingleNews() {
  return (
    <div>
      <div className="news_n">
        <span className="sp_n">News</span>
        <Card>
          <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body>
            <Card.Text>Some quick example text to build on the card title and make up the bulk of the card's content.</Card.Text>
          </Card.Body>
        </Card>
      </div>
    </div>
  )
}
