import React, { useState } from "react"
import axios from "axios"
import All from "./All.css"

export default function SourceList({ Links, setLinks, setSelectedNews, setNames, names }) {
  const apiURL = "http://newsapi.org/v2/top-headlines?country=us&apiKey=d75dd9efca1e497bbc8dd5af60779b33"

  const fetchData = async () => {
    const response = await axios.get(apiURL)
    setLinks(response.data)
  }

  const Update = () => {
    setNames(Links.articles.source)
    // setNames(Links.articles.filter((el) => el.includes(el.source.name)))
    setSelectedNews(Links.articles)
  }

  return (
    <>
      {console.log(names)}
      <div className="DataLinks fr">
        <button className="b1" onClick={fetchData}>
          All Sources
        </button>
        <div>
          {Links &&
            Links.articles.map((link) => {
              return (
                <div className="newsList">
                  <div onClick={Update} className="anchor">
                    {link.source.name}
                  </div>
                </div>
              )
            })}
        </div>
      </div>
    </>
  )
}
