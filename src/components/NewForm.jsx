import { Grid, TextField, ListItem } from "@mui/material";
import * as React from "react";

function NewForm() {
  const newFormRef = React.useRef(null);
  const editFormRef = React.useRef(null);

  function showForm() {
    const newForm = newFormRef.current;
    if (newForm.style.display === "block") {
      newForm.style.display = "none";
    } else {
      newForm.style.display = "block";
    }
  }

  function showEditForm() {
    const editForm = editFormRef.current;
    if (editForm.style.display === "block") {
      editForm.style.display = "none";
    } else {
      editForm.style.display = "block";
    }
  }

  React.useEffect(() => {
    const newForm = newFormRef.current;
    const editForm = editFormRef.current;

    if (newForm && editForm) {
      newForm.style.display = "none";
      editForm.style.display = "none";
    }
  }, []);

  return (
    <div>
      <div ref={newFormRef} className="new-form">
        <Grid container spacing={0}>
          <Grid xs={12}>
            <ListItem>Novo Item</ListItem>
          </Grid>
          <Grid xs={2}>
            <ListItem>
              <TextField
                id="outlined-basic"
                label="ID gerado automaticamente"
                variant="outlined"
                color="error"
                disabled
                fullWidth 
              />
            </ListItem>
          </Grid>
          <Grid xs={2}>
            <ListItem>
              <TextField
                id="outlined-basic"
                label="CNPJ"
                variant="outlined"
                color="error"
              />
            </ListItem>
          </Grid>
          <Grid xs={2}>
            <ListItem>
              <TextField
                id="outlined-basic"
                label="Razão Social"
                variant="outlined"
                color="error"
              />
            </ListItem>
          </Grid>
          <Grid xs={2}>
            <ListItem>
              <TextField
                id="outlined-basic"
                label="Nome Fantasia"
                variant="outlined"
                color="error"
              />
            </ListItem>
          </Grid>
          <Grid xs={2}>
            <ListItem>
              <TextField
                id="outlined-basic"
                label="Contato"
                variant="outlined"
                color="error"
              />
            </ListItem>
          </Grid>
          <Grid xs={2}>
            <ListItem>
              <TextField
                id="outlined-basic"
                label="Valor (m3)"
                variant="outlined"
                color="error"
                type="number"
              />
            </ListItem>
          </Grid>
        </Grid>
      </div>
      <div ref={editFormRef} className="edit-form">
      <Grid container spacing={0}>
          <Grid xs={12}>
            <ListItem>Editar Item</ListItem>
          </Grid>
          <Grid xs={2}>
            <ListItem>
              <TextField
                id="outlined-basic"
                label="ID gerado automaticamente"
                variant="outlined"
                color="error"
                disabled
                fullWidth 
              />
            </ListItem>
          </Grid>
          <Grid xs={2}>
            <ListItem>
              <TextField
                id="outlined-basic"
                label="CNPJ"
                variant="outlined"
                color="error"
              />
            </ListItem>
          </Grid>
          <Grid xs={2}>
            <ListItem>
              <TextField
                id="outlined-basic"
                label="Razão Social"
                variant="outlined"
                color="error"
              />
            </ListItem>
          </Grid>
          <Grid xs={2}>
            <ListItem>
              <TextField
                id="outlined-basic"
                label="Nome Fantasia"
                variant="outlined"
                color="error"
              />
            </ListItem>
          </Grid>
          <Grid xs={2}>
            <ListItem>
              <TextField
                id="outlined-basic"
                label="Contato"
                variant="outlined"
                color="error"
              />
            </ListItem>
          </Grid>
          <Grid xs={2}>
            <ListItem>
              <TextField
                id="outlined-basic"
                label="Valor (m3)"
                variant="outlined"
                color="error"
                type="number"
              />
            </ListItem>
          </Grid>
        </Grid>
      </div>

      <button id="btn-edit" className="btn-edit" onClick={showEditForm}>
        <span class="material-symbols-outlined">edit</span>
      </button>
      <button id="btn-new" className="btn-new" onClick={showForm}>
        <span class="material-symbols-outlined">add</span>
      </button>
    </div>
  );
}

export default NewForm;
