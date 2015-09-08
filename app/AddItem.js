var React = require("react");

var AddItem = React.createClass({

	getInitialState: function() {
		return {
			newItem: ""
		}
	},

	handleChange: function(event) {
		this.setState({
			newItem: event.target.value
		})
	},

	handleSubmit: function(event) {
		if (event.keyCode === 13) {
			this.props.add(this.state.newItem);
			this.setState({
				newItem: ""
			})
		}
	},

	render: function() {
		return (
		<div>
		<input type="text" 
			className="form-control" 
			value={this.state.newItem}
			placeholder="New Item"
			onKeyDown={this.handleSubmit}
			onChange={this.handleChange}
		/>
		</div>
		)
	}



});

module.exports = AddItem;