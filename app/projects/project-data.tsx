export interface Project {
    title: string;
    year: number;
    description: string;
    url: string;
  }
  
  export const projects: Project[] = [
    {
      title: "Жесты рук, Ableton Live, MIDI, Компьютерное зрение.",
      year: 2023,
      description:
        "Время от времени я пробую разные технологии. Тут я переобразовал координаты пальцев в MIDI сигнал. Сигнал к аблетону, и это звучит! Конечно проект требует работы, развития, но все же на мой взгляд очень интересный проект. Ну или прототип проекта. Буду продолжать его по мере возможности!",
      url: "https://youtu.be/wMKDv2Fauus",
    },
    {
      title: "Следующий проект",
      year: 2022,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam veritatis dolorem rem praesentium dicta labore, at laudantium quisquam.",
      url: "https://example.com/",
    },
    {
      title: "Еще один очень интересный",
      year: 2021,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam veritatis dolorem rem praesentium dicta labore, at laudantium quisquam.",
      url: "https://example.com/",
    },
  ];