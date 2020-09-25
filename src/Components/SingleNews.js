import React from "react"
import All from "./All.css"
import { Card } from "react-bootstrap"

export default function SingleNews() {
  return (
    <div>
      <div className="news_n">
        <span className="sp_n">News</span>
        <Card>
          <Card.Img variant="top"/>
          <Card.Body>
            <Card.Text></Card.Text>
          </Card.Body>
        </Card>
      </div>
    </div>
  )
}
