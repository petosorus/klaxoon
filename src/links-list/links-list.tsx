import React from 'react';

function ListItem(props: any) {
    return (
        <li>{props.value.title}</li>
    )
}

function LinksList() {
    const links: any[] = [{
        url: 'toto',
        title: 'toto'
    }]
    const list = links.map(link => {
        return <ListItem key={link.url} value={link}/>
    })

    return (
        <ul>
            {list}
        </ul>
    )
}

export default LinksList;
