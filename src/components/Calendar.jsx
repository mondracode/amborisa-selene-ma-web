import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import esLocale from '@fullcalendar/core/locales/es';
import './Calendar.css';
import { getCourses } from '../api/cronos';

const events = [
  { title: "Festivo", start: '2022-10-24' },
  {
    groupId: '1', // recurrent events in this group move together
    daysOfWeek: ['2', '4'],
    startTime: '07:00:00',
    endTime: '09:00:00',
    startRecur: '2022-08-08T12:00:00-05:00',
    endRecur: '2022-12-08T12:00:00-05:00',
    title: 'Arquitectura de Software'
  },
  {
    groupId: '1', // recurrent events in this group move together
    daysOfWeek: ['1', '3'],
    startTime: '11:00:00',
    endTime: '13:00:00',
    startRecur: '2022-08-08T12:00:00-05:00',
    endRecur: '2022-12-08T12:00:00-05:00',
    title: 'Introducción a la criptografía'
  },
  {
    groupId: '1', // recurrent events in this group move together
    daysOfWeek: ['1', '3'],
    startTime: '16:00:00',
    endTime: '18:00:00',
    startRecur: '2022-08-08T12:00:00-05:00',
    endRecur: '2022-12-08T12:00:00-05:00',
    title: 'Taller de Proyectos Interdisciplinarios'
  },
];

const Calendar = () => {

  getCourses();

  return (
    <div className="calendar-container">
      <FullCalendar
        locale={esLocale}
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        initialView="timeGridWeek"
        headerToolbar={{
          center: 'timeGridDay,timeGridWeek',
        }}
        eventTimeFormat={{
          hour: 'numeric',
          minute: '2-digit',
          meridiem: false
        }}
        events={events}
        hiddenDays={[0]}
      />
    </div>
  );
};

export default Calendar;
