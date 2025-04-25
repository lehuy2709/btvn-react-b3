import { Header, Product, ProductFormInput } from '../../utils/';
import { FTable, DialogContainer } from '../../components'
import { Button } from '@mui/material';
import { useState } from 'react';

export default () => {
    const [isOpenDialog, setIsOpenDialog] = useState<boolean>(false)

    const headers: Header[] = [
        { name: 'id', text: 'ID' },
        { name: 'name', text: 'Ten' },
        { name: 'type', text: 'Kieu' },
        { name: 'original', text: 'Xuat xu' },
        { name: 'action', text: '' }
    ]

    const [products, setProducts] = useState<Product[]>([
        { id: 1, name: 'Hang 1', type: '1', original: 'China' },

    ])

    const [name, setName] = useState('')
    const [type, setType] = useState('')
    const [original, setOriginal] = useState('')
    const [isEditing, setIsEditing] = useState(false)
    const [editId, setEditId] = useState<number | undefined>(undefined)


    const [nextId, setNextId] = useState<number>(2)

    const openCreateDialog = () => {
        setIsEditing(false)
        setName('')
        setType('')
        setOriginal('')
        setIsOpenDialog(true)
    }
    const create = (data: ProductFormInput) => {
        const newProduct = { ...data, id: nextId }
        setNextId(nextId + 1)
        setProducts([...products, newProduct])
        setIsOpenDialog(false)

    }

    const onDelete = (id: number) => {
        setProducts(products.filter((product) => {
            return product.id != id
        }))

    }

    const onEdit = (product: Product) => {
        setIsEditing(true)
        setName(product.name)
        setType(product.type)
        setOriginal(product.original)
        setEditId(product.id)
        setIsOpenDialog(true)
    }

    const updateProduct = (dataUpdated: Product) => {
        setProducts(products.map((product) => {
            return product.id === dataUpdated.id ? dataUpdated : product
        }))
        setIsOpenDialog(false)
    }

    return (
        <>
            <h1>Product</h1>
            <Button variant="outlined" onClick={openCreateDialog}>Create</Button>
            <FTable tableName={''} headers={headers} rows={products} onDelete={onDelete} edit={onEdit}></FTable>
            <DialogContainer isOpen={isOpenDialog} onClose={() => setIsOpenDialog(false)} create={create} edit={updateProduct}
                isEditing={isEditing}
                name={name}
                setName={setName}
                type={type}
                setType={setType}
                original={original}
                setOriginal={setOriginal}
                currentId={editId} ></DialogContainer>
        </>

    )
}

