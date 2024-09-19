export interface Iprofile{
    name: string
    age : number
    school : string
    hobby? :string
}
//  객체의 구조를 정의하는 데 사용됩니다.  ==?  타입을 만들수 있다

// 1. Partial 타입  ? 다들어감 
type aaa = Partial<Iprofile>

// 2. Required 타입 => 모두 포함 시킴 
type bbb = Required<Iprofile>

// 3. Pick 타입  => 선택자만 음..이것은 구조분해인가 ? 
type ccc = Pick<Iprofile, "name" | "age">

// 4. Omit 타입  =>  제거 
type ddd = Omit<Iprofile, "school">

// 5. Record 타입 
type eee = "철수" | "영희" | "훈이" // Union 타입 (교집합)
let child1 : eee = "영희" // eee 값 밖에 안됨   
let child2 : string = "영희" //  string 값 모두 다 허용 

type fff = Record<eee, Iprofile> //eee가 key 값으로 바뀌고 Iprofile이 각각 Record에 있는 value로 바뀌고 

// 6. 객체의 key들로 Union타입 만들기
type ggg = keyof Iprofile // "name" | "age" | "school" | "hobby"
let mpprofile:ggg = "hobby"

// 7.  type vs interface 차이  => interface는 선언병합 가능, type는 2개이상 합칠수 없다. 
export interface Iprofile{
    candy : number // 선언병합으로 추가됨 
}

// 8. 배운것 응용
let profile:  Partial<Iprofile> = {
    candy: 10
}



