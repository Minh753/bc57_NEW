import {configureStore} from '@reduxjs/toolkit'


export const store = configureStore({
    reducer:{
        //Chứa toàn bộ state của ứng dụng
        number:(state = 1,action) =>{//sử dụng (swich & case)
            switch (action.type){
                case 'CHANGE_NUMBER_ACTION':{
                    state = action.payload;
                    return state
                };
                default:{
                    return state;
                }
            }
            return state
        },
        img:(state = './img/CarBasic/products/black-car.jpg',action)=>{
            console.log(action)
            if(action.type === 'CHANGE_CAR_COLOR_ACTION'){
                state=`./img/CarBasic/products/${action.payload}-car.jpg`
            }

            return state
        }
    }
})