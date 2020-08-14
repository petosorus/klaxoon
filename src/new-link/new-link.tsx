import React from 'react';
import { getLink as getFlickrLink } from './flickr-handler'
import { getLink as getVimeoLink } from './vimeo-handler'

interface NewLinkState {
    link: string
}

class NewLink extends React.Component<{}, NewLinkState> {
    constructor(props: any) {
        super(props);
        this.state = {
            link: ''
        };
    }
    handleChange= (event: React.FormEvent<HTMLInputElement>) => { 
        this.setState({link: event.currentTarget.value});
    }
    handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        if (this.state.link.indexOf('flickr') !== -1) {
            getFlickrLink(this.state.link)
        } else if (this.state.link.indexOf('vimeo') !== -1) {
            getVimeoLink(this.state.link)
        }
        event.preventDefault();
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

export default NewLink;
