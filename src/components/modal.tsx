const Modal = (props: {children: React.ReactNode}) => {
    return (
        <div>
            <dialog open>
                {props.children}
            </dialog>
        </div>
    )
}

export default Modal;