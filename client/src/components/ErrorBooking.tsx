export interface IpropsError{
    msg: string
}

export const ErrorBooking = (props:IpropsError) => {
    return (
        <>
        <h1> Error</h1>
        <p>{props.msg}</p>
        </>
    )
}