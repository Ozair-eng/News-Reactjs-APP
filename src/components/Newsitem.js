import React from 'react'


const Newsitem =(props) => {
        let {title, description, imageUrl, newsurl, author, publishedAt , source} = props;
        return (
        <div className="my-3">

                <div className="card">
                    <img src={!imageUrl?"https://static.independent.co.uk/2021/09/18/14/iStock-1069913130.jpg?width=1200&auto=webp&quality=75":imageUrl} className="card-img-top" alt="..."/>
                    <div className="card-body">
                    <h5 className="card-title">{title}<span className="position-absolute top-0 start-50 translate-middle badge rounded-pill bg-info text-dark" data-bs-toggle="tooltip" data-bs-placement="top" title="Source">{source}</span></h5>
                    <p className="card-text" data-bs-toggle="tooltip" data-bs-placement="top" title="Description">{description}</p>
                    <p className="card-text"><small className="text-muted">By {!author? "unknown": author | author.length > 30? "unknown": author}  On {new Date(publishedAt).toTimeString()}</small></p>
                    <a rel="noreferrer" href={newsurl} target="_blank" className="btn btn-sm btn-dark ">Read More</a>
                </div>
             </div>
        </div>
        )
    
}

export default Newsitem
