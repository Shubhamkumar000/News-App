const Cards = ({data}) => {

    const readmore = (url) => {
        window.open(url)
    }

    
    return (
        <div className="card-container">
        {data.map((curItem,index) => {
            if(!curItem.urlToImage) {
                return null
            } else {
            return (
                <div className="card">
                    <img src={curItem.urlToImage}/>
                    <div className="content">
                        <a className="title" onClick={()=> readmore(curItem.url)}> {curItem.title}</a>
                        <p>{curItem.description}</p>
                        <button onClick={()=> readmore(curItem.url)}>Read More</button>
                    </div>
                </div>
            )
            }
            
        })}


        </div> 
    )
}

export default Cards;