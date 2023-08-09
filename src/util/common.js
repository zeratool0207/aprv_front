/**
 *숫자 천단위 , 찍는 함수
 number 숫자
 */
 export const numFormat = ( number ) => {
    const toString =String(number)
    const regEx =/\B(?=(\d{3})+(?!\d))/g;
    return toString.replace(regEx,",");
}

/**
 *localstrage에 저장
 title:저장명
 data:데이터
 */
 export const setLocalStorage =( title, data )=>{
    localStorage.setItem( title, data );
}
/**
 *localstrage에서 데이터 꺼내기
 title:저장명
 */
 export const getLocalStorage =( title )=>{
    return localStorage.getItem( title );

}
/**
 *localstrage에서 데이터 지우기
 title:저장명
 */
 export const removeLocalStorage =( title )=>{
    localStorage.removeItem( title );
}
