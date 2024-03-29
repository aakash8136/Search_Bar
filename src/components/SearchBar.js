import React from 'react';

class SearchBar extends React.Component{
    state={term: ''};

    onFormSubmit = event => {
        event.preventDefault();
        this.props.onSubmit(this.state.term);
    };

    render(){
        return(
            <div className="ui segment">
                <form onSubmit={this.onFormSubmit} className="ui">
                <div className="field">
                    <label>image search</label>
                    <input
                    type="text"
                    value={this.state.term}
                    onChange={e => this.setState({term : e.target})}
                    />
            </div>
            </form>
            </div>
        )
    }
}
