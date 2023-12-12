import * as React from 'react';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

import './style.css'

function createData(
    name: string,
    position: string,
    email: string,
    id: number,
    rating: number,
   
) {
    return {
        name,
        position,
        email,
        id,
        rating,
        history: [
            {
                tasksInProgress: 9,
                completedTasks: 30,
                comments: 3,
                time:4.6,
            },
            // {
            //     tasksInProgress: 32,
            //     completedTasks: 65,
            //     comments: 78,
            //     time:2.6,
            // },
        ],
    };
}

function Row(props: { row: ReturnType<typeof createData> }) {
    const { row } = props;
    const [open, setOpen] = React.useState(false);

    return (
        <React.Fragment>
            <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
                <TableCell>
                    <IconButton
                        aria-label="expand row"
                        size="small"
                        onClick={() => setOpen(!open)}
                    >
                        {open ? <KeyboardArrowUpIcon style={{ color: 'rgb(36, 153, 239)' }} /> : <KeyboardArrowDownIcon style={{ color: 'rgb(36, 153, 239)' }} />}
                    </IconButton>
                </TableCell>
                <TableCell component="th" scope="row">
                    {row.name}
                </TableCell>
                <TableCell align="right">{row.position}</TableCell>
                <TableCell align="right">{row.email}</TableCell>
                <TableCell align="right">{row.id}</TableCell>
                <TableCell align="right">{row.rating}</TableCell>
                <TableCell align="right">
                    <DeleteOutlineIcon className='delete_icon' />
                </TableCell>
            </TableRow>
            <TableRow>
                <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <Box sx={{ margin: 1 }}>
                            {/* <Typography variant="h6" gutterBottom component="div">
                                Статистика
                            </Typography> */}
                            <Table size="small" >
                                <TableHead>
                                    <TableRow>
                                        <TableCell align="center">Задач в исполнении</TableCell>
                                        <TableCell align="center">Выполненные задачи</TableCell>
                                        <TableCell align="center">Комментарии</TableCell>
                                        <TableCell align="center">Среднее время</TableCell>

                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {row.history.map((historyRow) => (
                                        <TableRow key={historyRow.tasksInProgress}>
                                            <TableCell align="center" component="th" scope="row">
                                                {historyRow.tasksInProgress}
                                            </TableCell>
                                            <TableCell align="center">{historyRow.completedTasks}</TableCell>
                                            <TableCell align="center">{historyRow.comments}</TableCell>
                                            <TableCell align="center">
                                              {historyRow.time}
                                            </TableCell>
                                          
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </Box>
                    </Collapse>
                </TableCell>
            </TableRow>
        </React.Fragment>
    );
}

const rows = [
    createData('Житкова Александра', 'разработчик', 'alxzhtkv@gmai.com', 24, 5),
    createData('Надежда Мордас', 'разработчик', 'alxzhtkv@gmai.com', 24, 5),
    createData('Сорока Анна', 'разработчик', 'alxzhtkv@gmai.com', 24, 5),
    createData('Красовский Валентин', 'разработчик', 'alxzhtkv@gmai.com', 24, 5),
    createData('Мельникова Маргарита', 'разработчик', 'alxzhtkv@gmai.com', 24, 5),
];

function UserTable() {
    return (
        <TableContainer component={Paper}>
            <Table aria-label="collapsible table">
                <TableHead>
                    <TableRow>
                        <TableCell />
                        <TableCell>ФИО сотрудника</TableCell>
                        <TableCell align="right">Должность</TableCell>
                        <TableCell align="right">Email</TableCell>
                        <TableCell align="right">ID</TableCell>
                        <TableCell align="right">Рейтинг</TableCell>
                        <TableCell align="right" />
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <Row key={row.name} row={row} />
                    ))}

                </TableBody>
            </Table>
        </TableContainer>
    );
}



export default UserTable