import React from "react"
import All from "./All.css"
import {Card} from "react-bootstrap"

export default function News({ selectedNews, Links }) {
  return (
    <div>
      <div className="news">
        <span className="sp">News Channel</span>
        <div>
          {selectedNews &&
            selectedNews.map((data) => {
              return (
                <Card className="card">
                  <Card.Img variant="top" src={data.urlToImage} />
                  <Card.Body>
                    <Card.Text>{data.description}</Card.Text>
                    <Card.Text>{data.source.name}</Card.Text>
                  </Card.Body>
                </Card>
              )
            })}
        </div>
      </div>
    </div>
  )
}
