import React from 'react';
import { getLink as getFlickrLink } from './flickr-handler'
import { getLink as getBookmark } from './vimeo-handler'
import { createBookmark } from '../store/bookmark/actions';
import { connect, ConnectedProps } from 'react-redux';
import { Bookmark } from '../store/bookmark/types';

interface NewBookmarkState {
    link: string
}

const connector = connect(
    null,
    { createLink: createBookmark }
)

class NewBookmark extends React.Component<ConnectedProps<typeof connector>, NewBookmarkState> {
    constructor(props: ConnectedProps<typeof connector>) {
        super(props);
        this.state = {
            link: ''
        };
    }
    handleChange= (event: React.FormEvent<HTMLInputElement>) => { 
        this.setState({link: event.currentTarget.value});
    }
    handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        let link: Bookmark;
        if (this.state.link.indexOf('flickr') !== -1) {
            link = await getFlickrLink(this.state.link)
            this.props.createLink(link)
        } else if (this.state.link.indexOf('vimeo') !== -1) {
            link = await getBookmark(this.state.link)
            this.props.createLink(link)
        }
    }

    render() {
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

export default connector(NewBookmark);
