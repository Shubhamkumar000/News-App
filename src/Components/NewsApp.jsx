import { useEffect, useState } from "react";
import Cards from "./Cards";

const NewsApp = () => {

    const [search,setSearch] = useState("india")
    const[newsData,setnewsData]=useState([])

    const API_KEY="cd160d7e4bef486583c1d261ee72f056";
    
    const getdata = async() => {
        const response = await fetch(`https://newsapi.org/v2/everything?q=${search}&apiKey=${API_KEY}`)
        const jsonData = await response.json();
        console.log(jsonData.articles);
        setnewsData(jsonData.articles)
    }

    useEffect(()=>{
        getdata()
    },[])

    const handleInput = (e) => {
        console.log(e.target.value)
        setSearch(e.target.value)

    }

    const userInput = (e) => {
        setSearch(e.target.value)

    }
    

    return (
    <div>
        <nav className="navbar">
            <div>
                <h2> Trendy News</h2>
            </div>
            <ul>
                <a>All News</a>
                <a>Trending</a>
            </ul>
            <div className="searchbar">
                <input type='text' placeholder="Search News" value={search} onChange={handleInput}/>
                <button onClick={getdata} className="search-btn">Search</button>
            </div>
        </nav>
        <div>
            <p className="newsp">Stay update with Trendy News</p>
        </div>
        <div className="categorybtn">
            <button onClick={userInput} className="buttons" value="Sports">Sports</button>
            <button onClick={userInput} className="buttons" value="Politics">Politics</button>
            <button onClick={userInput}  className="buttons"value="Entertainment">Entertainment</button>
            <button onClick={userInput}  className="buttons"value="Health">Health</button>
            <button onClick={userInput}  className="buttons" value="Fitness">Fitness</button>
        </div>
        <div>
            <Cards data={newsData}/>
        </div>
    </div>
    )
}

export default NewsApp;