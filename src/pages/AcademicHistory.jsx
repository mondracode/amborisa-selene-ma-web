import ContentWidget from "../components/AcademicHistory/ContentWidget";
import AcademicHistoryGrade from "../components/AcademicHistory/AcademicHistoryGrade";
import {useEffect, useState} from "react";
import {cronos} from "../api/rest";

const AcademicHistory = () => {
  const [academicHistories, setAcademicHistories] = useState([]);
  const [chosenHistory, setChosenHistory] = useState({});

  useEffect(() => {
    cronos.post('/graphql', {
      query: `query {
        AcademicHistories(userCode: "pperez0", academicHistoryCode: "96024-01"){
        userCode
        academicHistoryCode
        pa
        papa
        programInfo{
            code
            name
        }
        progressInfo{
            total
            disciplinar
            fundamentacion
            libreEleccion
            nivelacion
        }
        creditsInfo{
            total
            disciplinar
            fundamentacion
            libreEleccion
            nivelacion
        }
        semesters{
            semesterLabel
            courses{
                code
                credits
                grade
                name
                passed
            }     
        }
    }
      }`,
      variables: {}
    }).then((response) => {
      console.log(response)
      setAcademicHistories(response.data.data.AcademicHistories);
    }).catch((err) => {
      console.log(err)
    });
  }, []);

  useEffect(() => {
    if (academicHistories !== []) {
      setChosenHistory(academicHistories[0])
    }
  }, [academicHistories]);

  return !!chosenHistory && Object.keys(chosenHistory).length !== 0 ? (
    <div className={"p-6"}>
      <div className={"pt-2"}>
        <select onChange={(code) => {
          setChosenHistory(academicHistories[parseInt(code)])
        }}>
          {
            academicHistories.map((history, idx) => (
              <option key={idx.toString()} value={history.programInfo.code}>{history.programInfo.name}</option>
            ))
          }
        </select>
        <h1 className={"py-3 font-manrope font-bold text-2xl"}>Mi historia académica</h1>
        <div className={"grid gap-4 grid-cols-2 pt-2"}>
          <ContentWidget
            title={"Créditos pendientes"}
            value={Math.floor(chosenHistory.creditsInfo.total - chosenHistory.progressInfo.total)}
          />
          <ContentWidget
            title={"Porcentaje de avance"}
            value={`${((chosenHistory.progressInfo.total / chosenHistory.creditsInfo.total) * 100).toFixed(2)}%`}
          />
        </div>
      </div>
      <div className={"pt-2"}>
        <h1 className={"py-3 font-manrope font-bold text-2xl"}>Mi progreso</h1>
        <img className={"flex justify-center align-middle px-10 drop-shadow-lg"}
             src={`/assets/guy/${Math.floor(((chosenHistory.progressInfo.total / chosenHistory.creditsInfo.total) * 100) / 5) * 5}.jpg`}
             alt={"Avance grafico"}/>
      </div>
      <div className={"pt-2"}>
        <h1 className={"py-3 font-manrope font-bold text-2xl"}>Mis asignaturas cursadas</h1>
        {
          chosenHistory.semesters.map((semester) => (
            <>
              <h2 className={"font-bold text-sm mt-4"}>{semester.semesterLabel}</h2>
              {
                semester.courses.map((course) => (
                  <AcademicHistoryGrade
                    title={course.name}
                    code={course.code}
                    status={course.grade}
                  />
                ))
              }
            </>
          ))
        }
      </div>
    </div>
  ) : (
    <div className="grid h-screen place-items-center">
      <div role="status">
        <svg aria-hidden="true" className="mr-2 w-8 h-8 text-gray-200 animate-spin dark:text-emerald-600 fill-white"
             viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
            fill="currentColor"/>
          <path
            d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
            fill="currentFill"/>
        </svg>
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  )
}

export default AcademicHistory;
