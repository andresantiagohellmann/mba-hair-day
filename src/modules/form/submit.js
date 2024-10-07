import dayjs from "dayjs";

const form = document.querySelector("form");
const clientName = document.getElementById("client");
const selectedDate = document.getElementById("date");

const inputToday = dayjs(new Date()).format("YYYY-MM-DD");

// Carrega data atual e define a data mínima no input.
selectedDate.value = inputToday;
selectedDate.min = inputToday;

form.onsubmit = (event) => {
  event.preventDefault();

  try {
    // Recuperando o nome do cliente.
    const name = clientName.value.trim();

    if (!name) {
      return alert("Informe o nome do cliente.");
    }

    // Recupera o horário selecionado.
    const hourSelected = document.querySelector(".hour-selected");

    if (!hourSelected) {
      return alert("Informa o horário.");
    }

    // recupera somente a hora.
    const [hour] = hourSelected.innerHTML.split(":");

    // Insere a hora na data.
    const when = dayjs(selectedDate.value).add(hour, "hour");
    console.log(when);

    // Gera um ID.
    const id = new Date().getTime();
  } catch (error) {
    alert("Não foi possível realizar o agendamento.");
    console.log(error);
  }
};
