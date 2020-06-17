import * as React from 'react';
import { useState, useContext, useReducer, useEffect } from 'react';
import ListItemsContext from '../../../../Contexts/ListItemsContext';
import ItemDetail from './ItemDetail';
//Material UI 
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import EditIcon from '@material-ui/icons/Edit';

//Office UI Fabric
import { useConstCallback } from '@uifabric/react-hooks';
import { DefaultButton } from 'office-ui-fabric-react/lib/Button';
import { Panel, PanelType } from 'office-ui-fabric-react/lib/Panel';

const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
    headerCell: {
        fontWeight: 600
    }
});

export interface IListItemsProps {

}

const ListItems: React.FC<IListItemsProps> = (props) => {

    const [isOpen, setIsOpen] = React.useState(false);

    const openPanel = useConstCallback(() => setIsOpen(true));
    const dismissPanel = useConstCallback(() => setIsOpen(false));

    const { state, dispatch } = useContext(ListItemsContext);


    const onClickEditItem = (selectedItem: any) => {
        if (selectedItem != null) {
            dispatch({
                type: "SET_SELECTEDITEM",
                payload: selectedItem
            });
            setIsOpen(true);
        }
    };
    const classes = useStyles();
    return (
        <>
            <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="simple table">
                    <TableHead style={{ backgroundColor: '#eaeaea' }}>
                        <TableRow>
                            <TableCell className={classes.headerCell} align="center"></TableCell>                            
                            <TableCell className={classes.headerCell} align="left">First Name</TableCell>
                            <TableCell className={classes.headerCell} align="left">Last Name</TableCell>
                            <TableCell className={classes.headerCell} align="left">Email</TableCell>
                            <TableCell className={classes.headerCell} align="left">Company</TableCell>
                            <TableCell className={classes.headerCell} align="left">Country</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {state.listItems.length > 0 && state.listItems.map((row) => (
                            <TableRow key={row.Title}>
                                <TableCell style={{ cursor: 'pointer' }} onClick={() => onClickEditItem(row)} align="center">{<EditIcon />}</TableCell>
                                <TableCell component="th" scope="row">
                                    {row.Title}
                                </TableCell>
                                <TableCell align="left">{row.LastName}</TableCell>
                                <TableCell align="left">{row.Email}</TableCell>
                                <TableCell align="left">{row.Company}</TableCell>
                                <TableCell align="left">{row.Country}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <div>

                <Panel
                    headerText="Sample panel"
                    isOpen={isOpen}
                    onDismiss={dismissPanel}
                    type={PanelType.medium}

                    // You MUST provide this prop! Otherwise screen readers will just say "button" with no label.
                    closeButtonAriaLabel="Close"
                >
                    <ItemDetail />
                </Panel>
            </div>
        </>

    );
};
export default ListItems;