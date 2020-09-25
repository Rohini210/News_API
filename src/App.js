import React, { useState } from "react"
import All from "./Components/All.css"
import SourceList from "./Components/SourceList"
import News from "./Components/News"
import SingleNews from "./Components/SingleNews"

function App() {
  const [Links, setLinks] = useState(null) //object{}
  const [selectedNews, setSelectedNews] = useState(null) //[source{name}, ...]
  const [names, setNames] = useState([])
  const [news, updatedNews] = useState(null)

  // console.log(selectedNews)    //

  return (
    <div className="parent">
      <SourceList className="fr" names={names} setNames={setNames} Links={Links} setLinks={setLinks} setSelectedNews={setSelectedNews} />
      <News className="sec" names={names} Links={Links} selectedNews={selectedNews} />
      <SingleNews className="third" news={news} updatedNews={updatedNews} />
    </div>
  )
}

export default App
