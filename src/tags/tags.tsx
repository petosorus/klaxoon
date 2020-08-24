
interface NewTagState {
    tag: string
}

interface TagsProps {
    value: Array<Tag>
    store: ConnectedProps<typeof connector>
}

class Tags extends React.Component<TagsProps, NewTagState> {
    constructor(props: TagsProps) {
        super(props);
        this.state = {
            tag: ''
        };
    }
    handleChange= (event: React.FormEvent<HTMLInputElement>) => { 
        this.setState({tag: event.currentTarget.value});
    }
    handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
        event.preventDefault();
        this.props.store.addTag(this.state.tag, 0)
    }

    render() {
        const tagList = this.props.value.map((tag, index) => {
            return <li key={index}>{tag.name}</li>
        })

        return (
            <span>
                <ul>
                    {tagList}
                </ul>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        New tag:
                        <input type="text" value={this.state.tag} onChange={this.handleChange}></input>
                    </label>
                    <button type="submit">+</button>
                </form>
            </span>
        )
    }
}