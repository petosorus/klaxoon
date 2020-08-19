import React from 'react';
import { getLink as getFlickrLink } from './flickr-handler'
import { getLink as getVimeoLink } from './vimeo-handler'
import { createLink } from '../store/links/actions';
import { connect, ConnectedProps } from 'react-redux';
import { Link } from '../store/links/types';

interface NewLinkState {
    link: string
}

const connector = connect(
    null,
    { createLink }
)

class NewLink extends React.Component<ConnectedProps<typeof connector>, NewLinkState> {
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
        let link: Link;
        if (this.state.link.indexOf('flickr') !== -1) {
            link = await getFlickrLink(this.state.link)
        } else if (this.state.link.indexOf('vimeo') !== -1) {
            link = await getVimeoLink(this.state.link)
        } else {
            link = {
                author: '',
                date: '',
                height: 0,
                title: '',
                url: '',
                width: 0
            }
        }
        this.props.createLink(link)
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

export default connector(NewLink);
