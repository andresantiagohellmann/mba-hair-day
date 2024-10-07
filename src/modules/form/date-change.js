import { schedulesDay } from "../schedules/load";

const selectedDate = document.getElementById("date");

//  Recupera a lista de horários quando o input de data mudar.
selectedDate.onchange = () => schedulesDay();
