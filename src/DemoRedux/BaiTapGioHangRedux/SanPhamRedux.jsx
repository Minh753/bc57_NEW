import React, { Component } from 'react'
import { connect } from 'react-redux'
import { themGioHangAction } from '../../redux/Reducer/gioHangReducer';

 class SanPhamRedux extends Component {
  render() {
    const {sanPham,dispatch} =this.props;
    return (
      <div className='card'>
        <img height={350} src={sanPham.hinhAnh} alt="..." />
        <div className='card-body'>
            <h3>{sanPham.tenSP}</h3>
            <p>{sanPham.giaBan.toLocaleString()}</p>
            <button className='btn btn-dark' onClick={()=>{
                //đưa dữ liệu của sản phẩm được click lên redux
                const action = themGioHangAction({sanPham:sanPham});
                dispatch(action)
                
            }}>
                Thêm Vào Giỏ <i className='fa fa-cart-plus'></i>
            </button>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({})


export default connect(mapStateToProps)(SanPhamRedux)