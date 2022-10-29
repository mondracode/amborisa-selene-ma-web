const ContentWidget = (props) => {
    return (
        <div className={"bg-cyan-600 rounded-3xl p-4 flex flex-col text-blue-50 justify-between"}>
            <div className={"flex justify-center"}>
                <h1 className={"font-semibold text-sm text-center"}>{props.title}</h1>
            </div>
            <div className={"flex justify-center pt-2"}>
                <h1 className={"font-bold text-5xl text-center"}>{props.value}</h1>
            </div>
        </div>
    )
}

export default ContentWidget;
