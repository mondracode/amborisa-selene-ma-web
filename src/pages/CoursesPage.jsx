import CourseGrade from "../components/CourseGrade";

const CoursesPage = () => {

    // !TODO: Fetch data from API and map response

    return (
        // !TODO: Create components based on response array mapping

        <div className={"p-6"}>
            <h1 className={"py-3 font-manrope font-bold text-2xl"}>Mis calificaciones</h1>
            <CourseGrade
                title={"Ingeniería de Software II"}
                code={"12345-B"}
                status={"Pendiente"}
            />
            <CourseGrade
                title={"Introducción a la Criptografía"}
                code={"69420-C"}
                status={"4.3"}
            />
            <CourseGrade
                title={"Taller de Proyectos Interdisciplinarios"}
                code={"4567-A"}
                status={"Pendiente"}
            />
        </div>
    )
}

export default CoursesPage;
