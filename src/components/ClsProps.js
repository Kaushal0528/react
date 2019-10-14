import React from 'react';

class ClassProp extends React.Component {
    render() {
        return (
            <div>
                <h2>as a {this.props.designation}</h2>
                {this.props.children}
            </div>
        )
    }
}
export default ClassProp