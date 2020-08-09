import React from 'react';
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

    handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Link URL : 
                    <input type="text" value={this.state.link}></input>
                </label>
                <button type="submit">Save</button>
            </form>
        )
    }
}

export default NewLink;
