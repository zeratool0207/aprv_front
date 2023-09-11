import axios from 'axios';
import { useState, useEffect } from 'react';

const ReprAprv = () => {
    
    /* 
        추가

        1. 특정 X에게 내려주기
        2. 대리결재 테이블 별도로 추가
           ( 테이블명: tbl_aprv_repr )
        3. 본인보다 낮은 직책으로 직책으로 selectBox
        4. 직책 선택시 대리결재자
    */

    const [ positionList, setPositionList ] = useState([]);
    const [ personList, setPersonList ] = useState([]);

    const [ boardList, setBoardList ] = useState([]);


    const [ selectValue, setSelectValue ] = useState('');


    useEffect( () => {
        goPositionList();
        goBoardList();
    },[]);

    const goPositionList = async () => {
        try {
            const response = await axios.get(
                '/api/repr/list'
            )
            setPositionList(response.data);

        } catch (e) {
            console.log(e);
        }
    }

    const goBoardList = async () => {
        try {
            const response = await axios.get(
                '/api/repr/board'
            )

            // console.log(response);
            setBoardList(response.data);
        } catch (e) {
            console.log(e);
        }
    }



    const goPersonList = async () => {
        const params = {
           position : selectValue,
        }

        try {
            const response = await axios.get(
                '/api/repr/user', { params }
            )

            // console.log(response);
            setPersonList(response.data);
        } catch (e) {
            console.log(e);
        }
    }

    useEffect( () =>{
        goPersonList();
    },[selectValue])


    const onChangeSelect = (e) => {
        setSelectValue(e.target.value);
    }

    return (
        <>
            <h2>대리결재</h2>
            <button type="button">value: {selectValue}</button>

            <div>
                직급: 
                <select onChange={onChangeSelect}>
                        <option value=''>선택</option>
                        {positionList.map((item,idx) => (
                            <option 
                                value={item.cod_id} 
                                key={'position' + idx}
                            >
                                {item.cod_name}
                            </option>
                        ))}
                    </select>

            </div>
            <div>
                대리결재자: 
                    <select>
                        <option>선택</option>
                        {personList.map((item,idx) => (
                            <option 
                                value={item.usr_id} 
                                key={'user' + idx}
                            >
                                {item.usr_name}
                            </option>
                        ))}
                    </select>
            </div>
            <div>
                board:
                    <select>
                        <option>선택</option>
                        {boardList.map((item,idx) => (
                            <option value={item.brd_id}>{item.brd_title}</option>
                        ))}
                    </select>
            </div>
            <div>
                대리자: <input type="text" placeholder="대리자 이름(직급)" />
            </div>

            <button>승인</button>

        </>
    )
}

export default ReprAprv;