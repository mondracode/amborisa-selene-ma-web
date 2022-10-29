import ContentWidget from "../components/AcademicHistory/ContentWidget";
import AcademicHistoryGrade from "../components/AcademicHistory/AcademicHistoryGrade";

const AcademicHistory = () => {
    return (
        <div className={"p-6"}>
            <div className={"pt-2"}>
                <h1 className={"py-3 font-manrope font-bold text-2xl"}>Mi historia académica</h1>
                <div className={"grid gap-4 grid-cols-2 pt-2"}>
                    <ContentWidget
                        title={"Créditos pendientes"}
                        value={"45"}
                    />
                    <ContentWidget
                        title={"Porcentaje de avance"}
                        value={"13%"}
                    />
                </div>
            </div>
            <div className={"pt-2"}>
                <h1 className={"py-3 font-manrope font-bold text-2xl"}>Mi progreso</h1>
                <img className={"flex justify-center px-10"}
                     src={"https://sites.google.com/site/newtambiensoyunal/_/rsrc/1468883157027/home/concursos-tsu/concurso-1---el-nombre-del-munequito-del-sia/InSianaJones.jpg"}
                     alt={"Avance grafico"}/>
            </div>
            <div className={"pt-2"}>
                <h1 className={"py-3 font-manrope font-bold text-2xl"}>Mis asignaturas cursadas</h1>
                <h2 className={"font-bold text-sm"}>2022-I</h2>
                <AcademicHistoryGrade
                    title={"Ingeniería de Software II"}
                    code={"12345-B"}
                    status={"4.3"}
                />
                <AcademicHistoryGrade
                    title={"Pensamiento Sistémico"}
                    code={"98765-A"}
                    status={"4.7"}
                />
                <AcademicHistoryGrade
                    title={"Sistemas de Información"}
                    code={"44556-L"}
                    status={"3.2"}
                />
            </div>
        </div>
    )
}

export default AcademicHistory;
