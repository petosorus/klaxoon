import React from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { RootState } from '../store';

function mapStateToProps(state: RootState) {
    return {
        links: state.link.links
    }
}

const connector = connect(
    mapStateToProps
)

function ListItem(props: any) {
    return (
        <li>{props.value.title}</li>
    )
}

function LinksList(props: ConnectedProps<typeof connector>) {
    const list = props.links.map(link => {
        return <ListItem key={link.url} value={link}/>
    })

    return (
        <ul>
            {list}
        </ul>
    )
}

export default connector(LinksList);
