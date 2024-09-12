import { ChangeEvent, MouseEvent } from "react"

export interface IBoardWriteProps{
    isEdit:boolean
    data?: any

}

export interface IMyvariabels{
    number : number
    writer?: string
    title?: string
    contents?: string
}
export interface IBoardWriteUIProps{
    onClickSubmit : (event:MouseEvent<HTMLButtonElement>) => void
    onClickUpdate : (event:MouseEvent<HTMLButtonElement>) => void
    onChangeWrite : (event:ChangeEvent<HTMLInputElement>) => void
    onChangeTitle : (event:ChangeEvent<HTMLInputElement>) => void
    onChangeContents : (event:ChangeEvent<HTMLInputElement>) => void
    isEdit : boolean
    data? : any
}