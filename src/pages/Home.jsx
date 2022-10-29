import HomeWidget from "../components/Home/HomeWidget";
import ContentWidget from "../components/AcademicHistory/ContentWidget";

const Home = () => {
    return (
        <div className={"p-6"}>
            <div className={"pt-4"}>
                <h1 className={"py-3 font-manrope font-bold text-2xl"}>Hola, Pepito</h1>
                <HomeWidget
                    title={"Martes, 10 de marzo"}
                />
                <div className={"grid gap-4 grid-cols-2 pt-2"}>
                    <HomeWidget
                        value={""}
                    />
                    <HomeWidget
                        title={""}
                    />
                </div>
            </div>
            <div className={"pt-4"}>
                <h1 className={"py-3 font-manrope font-bold text-2xl"}>Acciones Rápidas</h1>
                <div className={"flex flex-row py-2"}>
                    <div className={"px-1"}>→</div>
                    <div className={"px-1 font-semibold"}>Buscar Asignaturas pendientes</div>
                </div>
                <div className={"flex flex-row py-2"}>
                    <div className={"px-1"}>→</div>
                    <div className={"px-1 font-semibold"}>Consultar historia académica</div>
                </div>
                <div className={"flex flex-row py-2"}>
                    <div className={"px-1"}>→</div>
                    <div className={"px-1 font-semibold"}>Ver mis calificaciones</div>
                </div>
            </div>

        </div>
    )
}

export default Home;
