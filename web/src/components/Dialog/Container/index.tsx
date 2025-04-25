import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from "@mui/material"
import { Product, ProductFormInput } from "../../../utils"

interface DialogCotainer {
    isOpen: boolean
    onClose: () => void
    width?: number
    create: (data: ProductFormInput) => void
    edit?: (data: Product) => void
    isEditing: boolean
    name: string
    setName: (val: string) => void
    type: string
    setType: (val: string) => void
    original: string
    setOriginal: (val: string) => void
    currentId?: number
}

export default ({ isOpen, onClose, width = 450, create, edit, isEditing, name, setName, type, setType, original, setOriginal, currentId }: DialogCotainer) => {
    const onSubmit = () => {
        const data = { name, type, original }
        if (isEditing && edit && currentId != undefined) {
            edit({ ...data, id: currentId })
        }
        else {
            create(data)
        }
    }
    return (
        <Dialog open={isOpen} sx={{ width, margin: 'auto' }}>
            <DialogTitle>{isEditing ? 'Edit Product' : 'Create Product'}</DialogTitle>
            <Box
                component="form"
                sx={{ '& .MuiTextField-root': { m: 1 } }}
                noValidate
                autoComplete="off"
            >
                <DialogContent>
                    <TextField fullWidth label="Name" variant="outlined" value={name} onChange={(e) => setName(e.target.value)} />
                    <TextField fullWidth label="Type" variant="outlined" value={type} onChange={(e) => setType(e.target.value)} />
                    <TextField fullWidth label="Original" variant="outlined" value={original} onChange={(e) => setOriginal(e.target.value)} />

                </DialogContent>
            </Box>
            <DialogActions>
                <Button variant="outlined" onClick={onClose}>Close</Button>
                <Button type="submit" variant="contained" onClick={onSubmit}>{isEditing ? "Save" : "Create"}</Button>
            </DialogActions>

        </Dialog>
    )
}