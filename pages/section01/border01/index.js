import {Wrap,Title,Flex,Div100,Div50,Label,Input,Textarea,Addresss,AddressBtn} from '../../../styles/01-02-emotion'

export default function NonMembers(){


    return(
        <>
            <Wrap>
                <Title>게시물 등록</Title>
                <Flex>
                    <Div50 style={{"margin-right":"20px"}}>
                        <Label>작성자</Label>
                        <Input placeholder='이름을 적어주세요.' />
                    </Div50>
                    <Div50 style={{"margin-left":"20px"}}>
                        <Label>비밀번호</Label>
                        <Input placeholder='비밀번호를 적어주세요.' />
                    </Div50>
                </Flex>

                <Div100>
                    <Label>제목</Label>
                    <Input placeholder='제목을 작성해주세요.' />
                </Div100>

                <Div100>
                    <Label>내용</Label>
                    <Textarea placeholder='내용을 작성해주세요.' />
                </Div100>

                <Div100>
                    <Label>주소</Label>
                    <Flex style={{"margin-top":"20px"}}>
                        <Addresss placeholder='12345'/> 
                        <AddressBtn>우편주소 검색</AddressBtn>
                    </Flex>
                    <Input/>
                    <Input/>
                </Div100>

                <Div100>
                    <Label>유튜브</Label>
                    <Input placeholder='링크를 복사해주세요.' />
                </Div100>
            </Wrap>
        </>
    )
}