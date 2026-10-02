export interface ScheduleSlot {
  day: string;
  period: 'mañana' | 'tarde';
  timeRange: string;
  hours: number;
  commitmentNote?: string;
}

export interface SemesterSchedule {
  semester: string;
  description: string;
  totalWeeklyHours: number;
  slots: ScheduleSlot[];
}

export const CURRENT_SEMESTER_SCHEDULE: SemesterSchedule = {
  semester: 'Septiembre - Enero 26-27',
  description: 'Horarios aproximados y franjas de disponibilidad para mentorías y tutorías durante el semestre académico.',
  totalWeeklyHours: 12,
  slots: [
    {
      day: 'Lunes',
      period: 'mañana',
      timeRange: '9:00 am a 1:00 pm',
      hours: 4,
      commitmentNote: 'Clase a las 3:00 pm',
    },
    {
      day: 'Miércoles',
      period: 'mañana',
      timeRange: '9:00 am a 12:00 pm',
      hours: 3,
      commitmentNote: 'Clase a las 2:00 pm',
    },
    {
      day: 'Jueves',
      period: 'tarde',
      timeRange: '2:00 pm a 4:00 pm',
      hours: 2,
      commitmentNote: 'Clase CVA a las 5:00 pm',
    },
    {
      day: 'Viernes',
      period: 'mañana',
      timeRange: '9:00 am a 12:00 pm',
      hours: 3,
      commitmentNote: 'Clase a la 1:00 pm',
    },
  ],
};
