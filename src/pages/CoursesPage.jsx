import { useEffect, useState } from "react";
import CourseGrade from "../components/CourseGrade";

const CoursesPage = () => {

    const [isVisible, setVisible] = useState(false);

    // !TODO: Fetch data from API and map response

    useEffect(() => {
        // This is where you would have your Firebase function.
        setTimeout(() => setVisible(true), 700);
    }, []);

    return (isVisible &&
        // !TODO: Create components based on response array mapping
        <>
            <div className={"p-6"}>
                <h1 className={"py-3 font-manrope font-bold text-2xl"}>Mis calificaciones</h1>
                <CourseGrade
                    title={"Arquitectura de software"}
                    code={"12345-B"}
                    status={"Pendiente"}
                    grades={[
                        {
                            name: 'Quices',
                            percentage: '40%',
                            grade: '1.5',
                        },
                        {
                            name: 'Proyecto',
                            percentage: '30%',
                            grade: '5.0',
                        },
                        {
                            name: 'Laboratorios',
                            percentage: '30%',
                            grade: '-',
                        },

                    ]}
                />
                <CourseGrade
                    title={"Introducción a la Criptografía"}
                    code={"69420-C"}
                    status={"4.3"}
                    grades={[
                        {
                            name: 'Quices',
                            percentage: '40%',
                            grade: '3.5',
                        },
                        {
                            name: 'Exposiciones',
                            percentage: '20%',
                            grade: '5.0',
                        },
                        {
                            name: 'Documento',
                            percentage: '40%',
                            grade: '4.2',
                        },

                    ]}
                />
                <CourseGrade
                    title={"Taller de Proyectos Interdisciplinarios"}
                    code={"4567-A"}
                    status={"1.2"}
                    grades={[
                        {
                            name: 'Pitch 1',
                            percentage: '40%',
                            grade: '1.5',
                        },
                        {
                            name: 'Pitch 2',
                            percentage: '30%',
                            grade: '2.0',
                        },
                        {
                            name: 'Prototipo',
                            percentage: '30%',
                            grade: '-',
                        },

                    ]}
                />
            </div>

        </>
    )
}

export default CoursesPage;
