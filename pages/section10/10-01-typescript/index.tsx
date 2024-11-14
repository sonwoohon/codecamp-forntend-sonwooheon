import { stringify } from "querystring"

export default function TypescriptPage(){
    // 타입추론
    let aaa = "안녕하세요"
    aaa = 3

    // 타입명시
    let bbb: string = "반갑습니다"
    bbb = 100

    // 타입명시가 필요한 사항 (타입 추론으론 안된다. 처음 값을 추론하기때문에)
    let ccc: number | string = 1000
    ccc = "1000원"

    //숫자타입
    let ddd: number = 10
    ddd = "철수"

    // 불린타입
    let eee:boolean = true
    eee = false
    eee = "false" // true
    
    // 배열타입
    let fff : number[] = [1,2,3,4,5,"안녕하세요"] // number만 들어가는 배열  
    let ggg : string[] = ["철수","영희","훈이", 10] // string만 들어가는 배열 
    let hhh : (string | number)[]= ["철수","영희","훈이", 10]  // number 또는 string 만 들어가 있는 배열 

    // 객체타입
    interface IProfile {
        name: string
        age : number | string
        school: string
        hobby? : string  // 있어도 되고 없어도 되고 
    }

    const profile:IProfile = {
        name: "철수",
        age : 8,
        school:"다람쥐초등학교"
    }
    profile.name = "훈이" //타입추론으로 이것만 가능 
    profile.age = "8살"
    profile.hobby = "수영"

    // 함수타입 *** 가장 중요 *** 
    function add(num1: number, num2: number, unit: string): string {
        return num1 + num2 + unit

    }
    const result = add(1000,2000,"원") // 결과의 리턴 타입도 예측가능!!!


    const add2 = (num1: number, num2: number, unit: string): string => {
        return num1 + num2 + unit

    }
    const result2 = add2(1000,2000,"원") // 결과의 리턴 타입도 예측가능!!!

    // any타입
    let qqq: any = "철수" // 자바스크립트와 동일\
    qqq = 123
    qqq = true


    return <></>
}
