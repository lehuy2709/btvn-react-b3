import { Table, TableContainer, TableRow, TableCell, TableHead, TableBody } from '@mui/material'
import Paper from '@mui/material/Paper'
import { Header, Product } from '../../utils/';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

interface FTable {
    tableName: string
    headers: Header[]
    rows: any[]
    onDelete: (id: number) => void
    edit: (product: Product) => void
}

const RenderActionBtn = (headers: Header[], id: number, onDelete: (id: number) => void, edit: (product: Product) => void, product: Product) => {
    const keys = headers.map(header => header.name)
    if (!keys.includes('action')) return

    return (<TableCell>
        <EditIcon onClick={() => edit(product)} color={'success'}></EditIcon>
        <DeleteIcon onClick={() => onDelete(id)} color={'error'}></DeleteIcon>
    </TableCell>)
}
export default ({ tableName, headers, rows, onDelete, edit }: FTable) => {


    return (<TableContainer component={Paper}>
        <h2>{tableName}</h2>
        <Table>
            <TableHead>
                <TableRow>
                    {
                        headers.map((header: Header) => {
                            return <TableCell key={header.name}>{header.text}</TableCell>
                        })
                    }
                </TableRow>
            </TableHead>

            <TableBody>
                {
                    rows.map((row: any) => {
                        return (
                            // <TableRow key={row.id}>
                            //     {
                            //         Object.keys(row).map((rowKey: string) => {
                            //             return (
                            //                 // @ts-ignore
                            //                 <TableCell key={`${rowKey}-${row.id}`}>{row[rowKey]}</TableCell>
                            //             )
                            //         })

                            //     }
                            //     {RenderActionBtn(headers)}
                            // </TableRow>
                            <TableRow key={row.id}>
                                {
                                    headers.map((header: Header) => {
                                        if (header.name === 'action') return null
                                        return (
                                            <TableCell key={`${header.name}-${row.id}`}>
                                                {row[header.name]}
                                            </TableCell>
                                        )
                                    })
                                }
                                {RenderActionBtn(headers, row.id, onDelete, edit, row)}
                            </TableRow>
                        )
                    })
                }
            </TableBody>

        </Table>
    </TableContainer>)
}