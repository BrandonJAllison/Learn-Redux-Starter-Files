import React from 'react'
import { Link } from 'react-router'

const PhotoGrid = React.createClass({
render(){
    const {post, i , comments } = this.props
    return (
        <figure className='grid-figure'>
        <div className='grid-photo-wrap'>
        <Link to ={`/view/${post.code}`}>
        <img src={post.display_src} alt={post.caption} clasName="grid-photo"/>
        </Link>
        </div>
        </figure>

    )
}

})

export default PhotoGrid

