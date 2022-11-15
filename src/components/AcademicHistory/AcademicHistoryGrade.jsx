const AcademicHistoryGrade = (props) => {
    return (
        <div className={"px-3 pt-4"}>
            <div className={"grid gap-2 grid-cols-3"}>
                <div className={"grid col-span-2"}>
                    <h2 className={"text-lg font-semibold"}>{props.title}</h2>
                    <div className={"text-gray-400"}>Código {props.code}</div>
                </div>
                <div className={"grid justify-items-end self-center"}>
                    <h2 className={props.status < 3 ? "font-bold align-middle text-lg text-red-700" : "font-bold align-middle text-lg"}>{props.status}</h2>
                </div>
            </div>
            <hr className={"mt-2"}/>
        </div>
    )
}

export default AcademicHistoryGrade;
