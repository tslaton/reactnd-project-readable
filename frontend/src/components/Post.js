import React, { Component } from 'react'

// id	String	Unique identifier
// timestamp	Integer	Time created - default data tracks this in Unix time. You can use Date.now() to get this number
// title	String	Post title
// body	String	Post body
// author	String	Post author
// category	String	Should be one of the categories provided by the server
// voteScore	Integer	Net votes the post has received (default: 1)
// deleted	Boolean	Flag if post has been 'deleted' (inaccessible by the front end), (default: false)
class Post extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="Post"></div>
    )
  }
}

export default Post