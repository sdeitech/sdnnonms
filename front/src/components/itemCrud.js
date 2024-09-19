import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import { useState } from "react";

export default function ItemCrud() {


 
    const [newItem, setNewItem] = useState({

      itemName: '',
      details: '',
      quantity: '',
      price: '',

    })
 
  

  const handleChange = ({ currentTarget: input }) => {
    setNewItem({ ...newItem, [input.name]: input.value });
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
     
    axios.post(`http://localhost:4000/items/`,newItem).then((response) => {
            console.log(response.newItem);
             alert("Item added");
          })



  };

  // To add new items when user submits the form
  // handleSubmit = (event) => {
  //   event.preventDefault();
  //   const { itemName, details, quantity, price } = this.state;
  //   axios.post(`http://localhost:4000/items/`, {
  //     itemName: itemName,
  //     details: details,
  //     quantity: quantity,
  //     price: price,
  //   })
  //     .then((response) => {
  //       console.log(response);
  //       this.props.history.push('/');
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });

  // }

  // handleChange = (event) => {
  //   this.setState({ [event.target.name]: event.target.value });
  //   }

  //add new items end 


  return (
    <Box
      component="form"
      sx={{ '& .MuiTextField-root': { m: 1, width: '25ch' } }}
      noValidate
      autoComplete="off"
    >
      {/* <form onSubmit={handleSubmit} > */}
        <h1>Product Management </h1>
        <div>
          <TextField
            id="outlined-multiline-flexible"
            label="Product Name"
            multiline
            maxRows={4}
            onChange={handleChange}
          // value={newItem.itemName}
          />
          <TextField
            id="outlined-textarea"
            label="Details"
            placeholder="Placeholder"
            multiline
            onChange={handleChange}
            // value={newItem.details}
          />
          <TextField
            id="outlined-multiline-flexible"
            label="Quantity"
            multiline
            maxRows={4}
            onChange={handleChange}
            // value={newItem.quantity}
          />
          <TextField
            id="outlined-textarea"
            label="Price"
            placeholder="Placeholder"
            multiline
            onChange={handleChange}
            // value={newItem.price}
          />
          
          <Button variant="contained" value='submit' type='submit'> Submit</Button>
          
        </div>
      {/* </form> */}
    </Box>
  );
}
