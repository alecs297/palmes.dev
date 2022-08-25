function NoContent({className=null, size="screen"}) {
    return(
        <div className={"container h-" + size + (className ?? " relative")}></div>
    )
}

export default NoContent;