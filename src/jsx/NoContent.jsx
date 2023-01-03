function NoContent({className=null, size="screen"}) {
    return(
        <div className={"container h-" + size + (className ? (" " + className) : " relative")}></div>
    )
}

export default NoContent;