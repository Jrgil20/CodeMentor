import React from 'react';
import { Clock, Calendar, CheckCircle2, MessageCircle } from 'lucide-react';
import { AVAILABLE_SCHEDULES, TUTORING_LIMITS, getWhatsappUrl } from '../../data/tutoring';

interface AvailableSchedulesProps {
  selectedSlotId?: string;
  onSelectSlot?: (slotId: string) => void;
  showWhatsappCta?: boolean;
  className?: string;
}

export const AvailableSchedules: React.FC<AvailableSchedulesProps> = ({
  selectedSlotId,
  onSelectSlot,
  showWhatsappCta = true,
  className = '',
}) => {
  return (
    <div
      className={`bg-white dark:bg-gray-800/90 rounded-2xl border border-blue-100 dark:border-blue-900/40 shadow-sm p-5 sm:p-6 ${className}`}
    >
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-gray-100 dark:border-gray-700/60">
        <div>
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-100 text-emerald-800 dark:bg-emerald-950/60 dark:text-emerald-300 mb-2">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
            {TUTORING_LIMITS.totalAvailableHours} horas semanales disponibles
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
            <Calendar className="w-5 h-5 text-blue-600 dark:text-blue-400" />
            Horarios Disponibles para Tutorías
          </h3>
          <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 mt-1">
            Actualmente cuento con {TUTORING_LIMITS.activeStudents} asesorados activos. Estas son las franjas horarias libres para reservar:
          </p>
        </div>

        {showWhatsappCta && (
          <a
            href={getWhatsappUrl('Hola! Quiero consultar disponibilidad para una tutoría')}
            target="_blank"
            rel="noopener noreferrer"
            className="self-start sm:self-center inline-flex items-center gap-2 whitespace-nowrap bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold px-4 py-2.5 rounded-xl transition-all shadow-sm hover:shadow"
          >
            <MessageCircle size={15} />
            Coordinar por WhatsApp
          </a>
        )}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 pt-4">
        {AVAILABLE_SCHEDULES.map((slot) => {
          const isSelected = selectedSlotId === slot.id;
          const isInteractive = Boolean(onSelectSlot);

          return (
            <div
              key={slot.id}
              onClick={() => onSelectSlot && onSelectSlot(slot.id)}
              className={`relative rounded-xl p-3.5 border transition-all ${
                isInteractive ? 'cursor-pointer hover:border-blue-400' : ''
              } ${
                isSelected
                  ? 'border-blue-500 bg-blue-50/70 dark:bg-blue-950/50 ring-2 ring-blue-500'
                  : 'border-gray-200 dark:border-gray-700 bg-gray-50/60 dark:bg-gray-800/40 hover:bg-white dark:hover:bg-gray-800'
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <span className="font-bold text-sm text-gray-900 dark:text-white flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                  {slot.day}
                </span>
                <span className="text-[11px] font-semibold px-2 py-0.5 rounded-full bg-blue-100 text-blue-700 dark:bg-blue-900/60 dark:text-blue-300">
                  {slot.duration}
                </span>
              </div>

              <div className="flex items-center gap-1.5 text-xs text-gray-700 dark:text-gray-300 font-medium">
                <Clock className="w-3.5 h-3.5 text-gray-400 dark:text-gray-500 flex-shrink-0" />
                <span>{slot.timeRange}</span>
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-4 pt-3 border-t border-gray-100 dark:border-gray-700/60 flex items-center justify-between text-[11px] text-gray-500 dark:text-gray-400">
        <span>* Horarios en zona horaria de Caracas (GMT-4). Modalidad online en vivo.</span>
      </div>
    </div>
  );
};

export default AvailableSchedules;
