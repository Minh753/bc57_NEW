import { createSlice } from '@reduxjs/toolkit'

const initialState ={
    imgState:'./img/CarBasic/products/red-car.jpg '
}


const imgReducer = createSlice({
  name: 'imgReduser', //Tên của reduser (góp phần tạo thành action)
  initialState,
  reducers: {
    changeCarColorAction:(state,action)=>{
        state.img=`./img/CarBasic/products/${action.payload}-car.jpg `

    }
  }
});

export const {changeCarColorAction} = imgReducer.actions

export default imgReducer.reducer






/*
    Cách cũ
*/
// export const imgReducer = (state = './img/CarBasic/products/red-car.jpg', action) => {
//     console.log(action)
//     if(action.type === 'CHANGE_CAR_COLOR_ACTION'){
//         state = `./img/CarBasic/products/${action.payload}-car.jpg`
//     }
//     return state;
// }