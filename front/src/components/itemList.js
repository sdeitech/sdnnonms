import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Button } from '@mui/material';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));

   


// const rows = [
//     createData('Frozen yoghurt', 159, 6.0, 24),
//     createData('Ice cream sandwich', 237, 9.0, 37),
//     createData('Eclair', 262, 16.0, 24),
//     createData('Cupcake', 305, 3.7, 67)

// ];

/*axios below is code*/
// const fetchData = async () => {
//     // setLoading(true);
//     try {
//         const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
//         console.log(response.data)
//         setData(response.data);
//         // setError(null);
//     } catch (error) {
//         setData([]);
//         // setError('Failed to fetch data.');
//     } finally {
//         // setLoading(false);
//     }
// };

// // Load data on component mount
// useEffect(() => {
//     fetchData();
// }, []);


/*end of axios*/
export default function Itemlist() {
    
    const [items, setItems]=useState([]);
    useEffect(()=>{
     axios.get('http://localhost:4000/items/').then(response=>{
        setItems(response.data);
     }
    )  .catch(err => console.log(err,"error is throwing"))




    // handleChange = event => {
    //     this.setState({ id: event.target.value });
    //   }
     
    //   handleSubmit = event => {
    //     event.preventDefault();
    //     }
    },[]) 
    const deleteItem=(id)=>{  
            
        axios.delete(`http://localhost:4000/items/${id}`)
        .then( ()=>  {

            console.log("item deleted ");
            setItems(items.filter(item=>item._id!==id));
        }).catch((error)=>{
            console.error('Error for deleting items',error);
        })

        
    }
    
    return (

        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 700 }} aria-label="customized table">
                <TableHead>
                    <TableRow>
                        <StyledTableCell>Product name</StyledTableCell>
                        <StyledTableCell align="right">Details</StyledTableCell>
                        <StyledTableCell align="right">Quantity</StyledTableCell>
                        <StyledTableCell align="right">Price</StyledTableCell>
                        <StyledTableCell align="right">Action</StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {items.map((row) => (
                        <StyledTableRow key={row._id}>
                            <StyledTableCell component="th" scope="row">
                                {row.itemName}
                            </StyledTableCell>
                            <StyledTableCell align="right">{row.details}</StyledTableCell>
                            <StyledTableCell align="right">{row.quantity}</StyledTableCell>

                            <StyledTableCell align="right">{row.price}</StyledTableCell>
                            
                            <Button   variant="outlined">edit</Button>
                            <Button onClick={()=>deleteItem(row._id)} variant="outlined">delete</Button>
                           
                   
                        </StyledTableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

