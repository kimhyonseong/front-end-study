const React = require("react");
const {Component} = React

class LikeButton extends Component {
    constructor(props) {
        super(props);
        this.state = {liked:false};
    }
    render() {
        if (this.state.liked) {
            return 'You liked this.';
        }

        return (
            <>
                <button onClick={() => {
                    this.setState({liked:true});
                }}>
                    Like
                </button>
            </>
        );
    }
}

module.exports = LikeButton;