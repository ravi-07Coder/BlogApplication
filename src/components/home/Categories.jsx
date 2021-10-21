import React from 'react'
import  { categories } from '../../constants/data'
import { Button, makeStyles, Table, TableHead, TableBody, TableRow, TableCell } from '@material-ui/core'
import {Link} from 'react-router-dom'
const useStyles = makeStyles({
    create: {
        margin: 20,
        background: '#6495ED',
        width: '86%'
    },
    table:{
        border:'1px solid rgba(224,224,224,1)',
    }
})

const Categories = () => {
    const classes = useStyles()
    return (
        <>
               <Link to='/create'  style={{textDecoration:'none',color:'inherit'}}>            
            <Button variant="contained" className={classes.create}>CREATE BLOG</Button>
            </Link> 
            <Table className={classes.table}>
                <TableHead>
                    <TableRow>
                        <TableCell>All Categories</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        categories.map(category=>(
                            <TableRow>
                               <TableCell>{category}</TableCell>    
                            </TableRow>
                        ))
                    }
                </TableBody>
            </Table>
{/* here category is the array which is imported from data.js present in constants folder */}
        </>
    )
}

export default Categories
