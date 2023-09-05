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


    useEffect( () => {
        goPositionList();
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

    return (
        <>
            <h2>대리결재</h2>

            <div>
                직급: 
                <select>
                        <option>선택</option>
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
                대리자: <input type="text" placeholder="대리자 이름(직급)" />
            </div>

            <button>승인</button>

        </>
    )
}

export default ReprAprv;