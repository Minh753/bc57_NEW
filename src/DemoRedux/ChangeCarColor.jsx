import React, { Component } from 'react'
import { connect } from 'react-redux'
import { changeCarColorAction } from '../redux/Reducer/imgReducer';

class ChangeCarColor extends Component {
  render() {
    const {img,dispatch}=this.props;
    return (
      <div className='container'>
        <h3>Change car color</h3>
        <div className='row'>
            <div className='col-6'>
                <img src={img.imgState} alt="..." className='w-100' />
            </div>
            <div className='col-6'>
                <button className='btn btn-danger' onClick={()=>{
                    const action = changeCarColorAction('red')
                        // //Tạo action đưa dữ liệu lên store
                        // type:'CHANGE_CAR_COLOR_ACTION',
                        // payload:'red'

                    
                    //Dùng props dispatch đưa dữ liệu lên redux
                    dispatch(action)
                }}>Red</button>
                <button className='btn btn-dark mx-2'onClick={()=>{
                    const action = changeCarColorAction('black')
                        //Tạo action đưa dữ liệu lên store
                        // type:'CHANGE_CAR_COLOR_ACTION',
                        // payload:'black'
                    
                    //Dùng props dispatch đưa dữ liệu lên redux
                    dispatch(action)
                }}>Black</button>
            </div>
        </div>
      </div>
    )
  }
}
/*
    Viết tắt của cú pháp es6 =>{return} tương đương=>(gia_tri_return)
*/
const mapStateToProps = (state)=>({
    img: state.img
})
export default connect(mapStateToProps)(ChangeCarColor)