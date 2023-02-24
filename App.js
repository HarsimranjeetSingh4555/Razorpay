import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import RazorpayCheckout from 'react-native-razorpay';


///////npm install react-native-razorpay --save

const App = () => {

  const [Price,setPrice]=useState()
  console.log('============>>>',Price,'============>>>')

  return (
    <>
    <View style={{marginBottom:50}}>
      <Text>Hello</Text>
    </View>
    
    <TouchableOpacity  style={styles.checkoutBtn} onPress={()=>{
      var options = {
        description: 'Credits towards consultation',
        image: 'https://play-lh.googleusercontent.com/5bddkBBLN6_rrxSK0_NNuuRN_ejV4ynph6jnknXAcyRZoAb0BRdtcqv3pamyRP2BQBY2=s320-rw',
        currency: 'INR',
        key: 'rzp_test_2VYHup8J177yIx',
        amount: '100', ///jaha pr uss variable ko set krna jis main paise hai e.g:getTotal() * 100
        name: 'Eatmate',
        order_id: '',//Replace this with an order_id created using Orders API.
        prefill: {
          email: 'krahul1743@gmail.com',
          contact: '8528381743',
          name: 'Rahul'
        },
        theme: {color: '#187498'}
      }
      RazorpayCheckout.open(options).then((data) => {
        // handle success
        alert(`Success: ${data.razorpay_payment_id}`);
       
        const price=data.razorpay_payment_id
        console.log(price,'<===============')
        setPrice(price)
      }).catch((error) => {
        // handle failure
        alert(`Error: ${error.code} | ${error.description}`);
      });
    }}>

        <Text style={{color:'#fff'}}>Pay Now</Text>

    </TouchableOpacity>
    
    </>
  )
}

export default App

const styles = StyleSheet.create({
  checkoutBtn:{
  width:'90%',
  height:50,
  borderRadius:10,
  backgroundColor:'#187498',
  position:'absolute',
  bottom:20,
  alignSelf:'center',
  justifyContent:'center',
  alignItems:'center'
 }
})