import React from 'react'
import { connect, ConnectedProps } from 'react-redux'
import { RootState } from '../store'
import { Bookmark } from '../store/bookmark/types'

interface ItemProps {
    value: Bookmark
}

function mapStateToProps(state: RootState) {
    return {
        bookmarks: state.bookmark.bookmarks
    }
}

const connector = connect(
    mapStateToProps
)

function PictureItem(props: ItemProps) {
    return (
        <li> 📷 <a href={props.value.url}>{props.value.title}</a>, 
            by {props.value.author} on {props.value.date.toLocaleDateString()}.
            Width:{props.value.width}px, 
            height: {props.value.height}px.
        </li>
    )
}

function VideoItem(props: ItemProps) {
    return (
        <li> 🎬 <a href={props.value.url}>{props.value.title}</a>, 
            by {props.value.author} on {props.value.date.toLocaleDateString()}.
            Width: {props.value.width}px, 
            height: {props.value.height}px, 
            duration: {props.value.duration}s.
        </li>
    )
}

function BookmarksList(props: ConnectedProps<typeof connector>) {
    const list = props.bookmarks.map(bookmark => {
        // A picture bookmark has a duration of 0
        if(!bookmark.duration) {
            return <PictureItem key={bookmark.url} value={bookmark}/>
        } else {
            return <VideoItem key={bookmark.url} value={bookmark}/>
        }  
    })

    return (
        <ul>
            {list}
        </ul>
    )
}

export default connector(BookmarksList)
