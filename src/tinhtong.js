import React from 'react';
class MyForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        result: 0,
        num1: 0,
        num2: 0
      };
      this.num1Change = this.num1Change.bind(this);
      this.num2Change = this.num2Change.bind(this);
    }
  
    num1Change(event) {
      const r=Number(event.target.value)+Number(this.state.num2);
      this.setState({num1: event.target.value, result: r});
    }
  
    num2Change(event) {
      const r=Number(this.state.num1)+Number(event.target.value);
      this.setState({num2: event.target.value, result: r});
    }

    render() {
      return (
        <div className="row">
            <div className="col-xl-4"></div>
            <div className="col-xl-4">
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Số thứ nhất
                          <input type="number" className="form-control" onChange={this.num1Change} placeholder="0"/>
                        </label>
                    </div>
                    <div className="form-group">
                        <label>Số thứ hai
                          <input type="number" className="form-control" onChange={this.num2Change}  placeholder="0"/>
                        </label>
                    </div>
                    <div className="form-group ">
                        <h3>Tổng hai số là: {this.state.result}</h3>
                    </div>
                </form>
            </div>
        </div>
      );
    }
  }

export default MyForm;
