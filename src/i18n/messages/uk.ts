import { LOCALES } from "../../context/defaultContext";

export const ua = {
  [LOCALES.UKRAINIAN]: {
    cardMenu: {
      delete: "Видалити",
      select: "Обрати",
    },
    movieCard: {
      genres: "Жанри",
      duration: "Тривалість",
      time: "хв",
      rating: "Рейтинг",
      cast: "Актори",
    },
    headerTab: { settings: "Налаштування", recommend: "Рекомендовані фільми" },
    appBar: {
      searchBar: { inputLabel: "Пошук фільмів", inputBtn: "Пошук" },
      tooltip: { asc: "За зростанням", desc: "За спаданням" },
      sortBy: "Сортувати за",
    },
    input: {
      placeholder: "Назви свій список фільмів",
      message: "Обов'язкове",
    },
    modal: {
      title: "Твоє посилання щоб поділитись фільмами",
      copied: "Посилання скопійовано!",
    },
    alert: {
      max: "Максимальна кількість фільмів 20",
      isAdded: "Цей фільм ви вже додали",
    },
  },
};
