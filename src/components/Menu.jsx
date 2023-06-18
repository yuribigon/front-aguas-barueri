import * as React from 'react';
import Paper from '@mui/material/Paper';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import ListItemText from '@mui/material/ListItemText';

export default function Menu() {
  return (
    <Paper className="menu-paper" sx={{ width: 280, maxWidth: '100%', marginTop: 21, backgroundColor:'transparent', color: '#fff', bordeCollapse: 'colapse' }}>
      <MenuList>
        <MenuItem>
          <ListItemText>Clientes</ListItemText>
        </MenuItem>
        <MenuItem>
          <ListItemText>Pedidos</ListItemText>
        </MenuItem>
        <MenuItem>
          <ListItemText>Entregas</ListItemText>
        </MenuItem>
        <MenuItem>
          <ListItemText>Motoristas</ListItemText>
        </MenuItem>
        <MenuItem>
          <ListItemText>Caminhões</ListItemText>
        </MenuItem>
        <MenuItem>
          <ListItemText>Bases</ListItemText>
        </MenuItem>
        <MenuItem>
          <ListItemText>Produtos</ListItemText>
        </MenuItem>
        <MenuItem>
          <ListItemText>Centro de Custo</ListItemText>
        </MenuItem>
        <MenuItem>
          <ListItemText>Fornecedores</ListItemText>
        </MenuItem>
        <MenuItem>
          <ListItemText>Notas Fiscais</ListItemText>
        </MenuItem>
        <MenuItem>
          <ListItemText>Contas a receber</ListItemText>
        </MenuItem>
        <MenuItem>
          <ListItemText>Contas a Pagar</ListItemText>
        </MenuItem>
        <MenuItem>
          <ListItemText>Usuários</ListItemText>
        </MenuItem>
        <MenuItem>
          <ListItemText>Permissões</ListItemText>
        </MenuItem>
        <MenuItem>
          <ListItemText>Logs</ListItemText>
        </MenuItem>
        <MenuItem>
          <ListItemText>Outros</ListItemText>
        </MenuItem>
        <MenuItem>
          <ListItemText>Outros</ListItemText>
        </MenuItem>
        <MenuItem>
          <ListItemText>Outros</ListItemText>
        </MenuItem>
      </MenuList>
    </Paper>
  );
}