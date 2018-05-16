import React from "react"
export default (props)=>{
    const {event} = props;
    return (
        <div className="card">
                            <div className="content" key={event.id}>
                                <a className="header">{event.name}</a>
                            <div className="meta">
                                <span className="body">{event.category}</span>
                            </div>
                            <div className="meta">
                                <span className="body">{event.location}</span>
                            </div>
                            <div className="meta">
                                <span className="date">{event.date_hosted}</span>
                            </div>
                            <div className="description">
                                {event.description}
                            </div>
                            </div>
                            <div className="extra content">
                                <a>
                                    <i className="user icon"></i>
                                    22 Friends
                                </a>
                            </div>
                        </div>
    )
}