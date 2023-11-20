import React, { Component } from 'react'

export default class ProductForm extends Component {
    state = {
        id: '',
        name: '',
        price: '',
        type: '',
        description: '',
        img: ''
    }

    handleChangerInput = (e) => {
        let tag = e.target;
        this.setState({
            [tag.id]: tag.value
        })
    }





    render() {
        console.log(this.state)
        return (
            <form className='card'>
                <div className='card-header bg-dark text-white'>Product info</div>
                <div className='card-body'>
                    <div className="row">
                        <div className="col-6">
                            <div className="mb-3">
                                <label htmlFor="id">ID:</label>
                                <input type="text" className="form-control" id="id" name="id" onInput={this.handleChangerInput} />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="name">Name:</label>
                                <input type="text" className="form-control" id="name" name="name" onInput={this.handleChangerInput} />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="price">Price:</label>
                                <input type="text" className="form-control" id="price" name="price" onInput={this.handleChangerInput} />
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="mb-3">
                                <label htmlFor="img">Image URL:</label>
                                <input type="text" className="form-control" id="img" name="img" onInput={this.handleChangerInput} />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="description">Description:</label>
                                <textarea className="form-control" id="description" name="description" defaultValue={""} onInput={this.handleChangerInput} />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="type">Type:</label>
                                <select className="form-control" id="type" name="type" onInput={this.handleChangerInput}>
                                    <option value="laptop">Laptop</option>
                                    <option value="tablet">Tablet</option>
                                    <option value="phone">Phone</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='card-footer text-center'>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </div>
            </form>
        )
    }
}
