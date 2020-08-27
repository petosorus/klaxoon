import React from 'react'
import { getBookmark as getFlickrBookmark } from './flickr-handler'
import { getBookmark as getVimeoBookmark } from './vimeo-handler'
import { createBookmark } from '../store/bookmark/actions'
import { connect, ConnectedProps } from 'react-redux'
import { Bookmark } from '../store/bookmark/types'
import { useHistory, Redirect } from 'react-router-dom'

interface NewBookmarkState {
    link: string,
    navigate: boolean
}

const connector = connect(
    null,
    { createBookmark }
)

class NewBookmark extends React.Component<ConnectedProps<typeof connector>, NewBookmarkState> {
    constructor(props: ConnectedProps<typeof connector>) {
        super(props)
        this.state = {
            link: '',
            navigate: false
        }
    }
    handleChange= (event: React.FormEvent<HTMLInputElement>) => { 
        this.setState({link: event.currentTarget.value})
    }
    handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        let link: Bookmark
        if (this.state.link.indexOf('flickr') !== -1) {
            link = await getFlickrBookmark(this.state.link)
            this.props.createBookmark(link)
            this.setState({navigate: true})
        } else if (this.state.link.indexOf('vimeo') !== -1) {
            link = await getVimeoBookmark(this.state.link)
            this.props.createBookmark(link)
            this.setState({navigate: true})
        }
        
    }

    render() {
        if (this.state.navigate) {
            return <Redirect to="/" />
        }

        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Link URL : 
                    <input type="text" value={this.state.link} onChange={this.handleChange}></input>
                </label>
                <button type="submit">Save</button>
            </form>
        )
    }
}

export default connector(NewBookmark)
