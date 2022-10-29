const CourseGrade = (props) => {
    const { grades } = props;

    return (
        <div className={"px-3 pt-4"}>
            <div className={"grid gap-2 grid-cols-3"}>
                <div className={"grid col-span-2"}>
                    <h2 className={"text-lg font-semibold"}>{props.title}</h2>
                    <div className={"text-gray-400"}>Código {props.code}</div>
                </div>
                <div className={"grid justify-items-end self-center"}>
                    <h2 className={"font-bold align-middle text-lg" + (parseInt(props.status, 10) < 3 && " text-red-600")}>{props.status}</h2>
                </div>
            </div>
            {grades.map((i) => (
                <div className={"flex justify-between pt-1"}>
                    <div className={"flex flex-row"}>
                        <div className={"px-1"}>→</div>
                        <div className={"px-1 font-bold"}>{i.name}</div>
                        <div className={"text-gray-400"}>{i.percentage}</div>
                    </div>
                    <div className={"pr-5 font-semibold" + (parseInt(i.grade, 10) < 3 && " text-red-600")}>{i.grade}</div>
                </div>
            ))}
            <hr className={"mt-2"} />
        </div>
    )
}

export default CourseGrade;
