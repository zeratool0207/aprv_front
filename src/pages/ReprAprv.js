const ReprAprv = () => {
    
    /* 
        추가

        1. 특정 X에게 내려주기
        2. 대리결재 테이블 별도로 추가
           ( 테이블명: tbl_aprv_repr )
        3. 본인보다 낮은 직책으로 직책으로 selectBox
        4. 직책 선택시 대리결재자
    */

    return (
        <>
            <h2>대리결재</h2>

            <div>
                직급: <input type="text" placeholder="직급" />
            </div>
            <div>
                대리결재자: 
                    <select>
                        <option>부장</option>
                        <option>차장</option>
                        <option>과장</option>
                        <option>대리</option>
                        <option>사원</option>
                    </select>
            </div>
            <div>
                대리자: <input type="text" placeholder="대리자 이름(직급)" />
            </div>

            <button>승인</button>
            <button>취소</button>


        </>
    )
}

export default ReprAprv;