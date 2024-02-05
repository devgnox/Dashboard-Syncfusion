import React from 'react'
import { ScheduleComponent, ViewsDirective, ViewDirective, Day, Week, Month, WorkWeek, Agenda, Inject, Resize, DragAndDrop, resizeStart } from "@syncfusion/ej2-react-schedule";
import { DatePicker } from "@syncfusion/ej2-react-calendars";
import { scheduleData } from "../data/dummy";
import Header from '../components/Header';

const Calendar = () => {
  return (
    <div className='m-2 md:m-10 mt-24 p-2 md:p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl'>
      <Header category="Page" title="Calendar" />
      <ScheduleComponent height="650px" eventSettings={{dataSource:scheduleData}} selectedDate={new Date(2024,0, 10)}>

        <Inject services={[Day, Week, WorkWeek, Month, Agenda, DragAndDrop, Resize]} />
      </ScheduleComponent>
    </div>
  )
}

export default Calendar