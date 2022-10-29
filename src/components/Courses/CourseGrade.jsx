const CourseGrade = (props) => {
    return (
        <div className={"px-3 pt-4"}>
            <div className={"grid gap-2 grid-cols-3"}>
                <div className={"grid col-span-2"}>
                    <h2 className={"text-lg font-semibold"}>{props.title}</h2>
                    <div className={"text-gray-400"}>Código {props.code}</div>
                </div>
                <div className={"grid justify-items-end self-center"}>
                    <h2 className={"font-bold align-middle text-lg"}>{props.status}</h2>
                </div>
            </div>

            {/*!TODO: Ver como pasar todo esto en props, o hacer un nuevo componente*/}

            <div className={"flex justify-between pt-1"}>
                <div className={"flex flex-row"}>
                    <div className={"px-1"}>→</div>
                    <div className={"px-1 font-bold"}>Proyecto</div>
                    <div className={"text-gray-400"}>40%</div>
                </div>
                <div className={"pr-5 font-semibold"}>5.0</div>
            </div>
            <div className={"flex justify-between pt-1"}>
                <div className={"flex flex-row"}>
                    <div className={"px-1"}>→</div>
                    <div className={"px-1 font-bold"}>Laboratorios</div>
                    <div className={"text-gray-400"}>50%</div>
                </div>
                <div className={"pr-5 text-red-600 font-semibold"}>1.6</div>
            </div>
            <div className={"flex justify-between pt-1"}>
                <div className={"flex flex-row"}>
                    <div className={"px-1"}>→</div>
                    <div className={"px-1 font-bold"}>Quices</div>
                    <div className={"text-gray-400"}>10%</div>
                </div>
                <div className={"pr-5 font-semibold"}>-</div>
            </div>
            <hr className={"mt-2"}/>
        </div>
    )
}

export default CourseGrade;
