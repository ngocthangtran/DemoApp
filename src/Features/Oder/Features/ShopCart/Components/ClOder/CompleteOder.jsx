import React from 'react';
import Button from '@material-ui/core/Button';
import DoneAllIcon from '@material-ui/icons/DoneAll';
import PropsType from 'prop-types';
import './index.scss'
import { shortenMoney } from '../../../../../../utils/convertPrice';
import { useHistory } from 'react-router-dom';

CompleteOder.propTypes = {
    sumprice: PropsType.number,
    amount: PropsType.number
}

CompleteOder.defaultProps = {
    sumprice: 0,
    amount: 0
}

function CompleteOder(props) {
    const { amount, sumprice } = props;
    const history = useHistory();
    return (
        <>
            <div className='customfoodter'>
                <div className='sum'>
                    Tổng tiền thanh toán
                    <br />
                    {
                        shortenMoney(sumprice)
                    }
                    <br />
                </div>
                <Button
                    variant="contained"
                    color="primary"
                    endIcon={<DoneAllIcon />}
                    style={{
                        background: "#e74c3c",
                        borderRadius: 'uset'
                    }}
                    onClick={() => {
                        console.log(history.location)
                        history.push(`input-people`)
                    }}
                >
                    Báo món ({amount})
                </Button>
            </div>
        </>
    );
}

export default CompleteOder;