import * as React from 'react';
import Paper from '@mui/material/Paper';
import { AppointmentForm, ViewState } from '@devexpress/dx-react-scheduler';
import { Scheduler, DayView, WeekView, MonthView, Appointments, Toolbar, DateNavigator, ViewSwitcher} from '@devexpress/dx-react-scheduler-material-ui';

const currentDate = '2025-11-01';
const schedulerData = [
  { startDate: '2025-11-01T09:45', endDate: '2025-11-01T11:00', title: 'Meeting' },
  { startDate: '2025-11-01T12:00', endDate: '2025-11-01T13:30', title: 'Go to the gym' },
];

export const Appointment = () => {
  return (
    <Paper>
      <Scheduler data={schedulerData}>
        <ViewState currentDate={currentDate} />
        
        {/* Day View */}
        <DayView startDayHour={9} endDayHour={16} />
        
        {/* Week View */}
        <WeekView startDayHour={9} endDayHour={16} weekDays={[0, 1, 2, 3, 4]} />
        
        {/* Month View */}
        <MonthView />
        
        {/* Add Toolbar, DateNavigator, and ViewSwitcher */}
        <Toolbar />
        <DateNavigator />
        <ViewSwitcher />
        
        <Appointments 
          onAppointmentClick={({ appointmentData }) => {
            alert(`Appointment clicked: ${appointmentData.title}`);
          }}
        />
        
      </Scheduler>
    </Paper>
  );
};
