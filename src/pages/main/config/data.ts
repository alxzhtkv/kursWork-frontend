import { ITask } from "../../types";

  
  export const tasks: ITask[] = [
    {
      task_id: 1,
      project_id: 1,
      task_name: 'Анализ требований',
      description: 'Провести исследование и собрать требования для онлайн магазина электроники.',
      status: 'in process',
      start_date: '2023-01-15',
      end_date: '2023-01-31',
      time: '10:00:00',
      priority: 1
    },
    {
      task_id: 2,
      project_id: 1,
      task_name: 'Проектирование базы данных',
      description: 'Разработать структуру базы данных для хранения информации о товарах, заказах и пользователях.',
      status: 'new',
      start_date: '2023-02-01',
      end_date: '2023-02-15',
      time: '14:30:00',
      priority: 2
    },
    {
      task_id: 3,
      project_id: 1,
      task_name: 'Разработка пользовательского интерфейса',
      description: 'Создать привлекательный и удобный интерфейс для пользователей онлайн магазина.',
      status: 'new',
      start_date: '2023-02-15',
      end_date: '2023-03-15',
      time: '09:00:00',
      priority: 3
    },
    {
      task_id: 4,
      project_id: 1,
      task_name: 'Разработка функциональности корзины',
      description: 'Реализовать функционал добавления и удаления товаров в корзине покупателя.',
      status: 'new',
      start_date: '2023-03-01',
      end_date: '2023-03-15',
      time: '13:30:00',
      priority: 2
    },
    {
      task_id: 5,
      project_id: 1,
      task_name: 'Интеграция платежной системы',
      description: 'Подключить платежную систему для обработки платежей от покупателей.',
      status: 'planned',
      start_date: '2023-03-15',
      end_date: '2023-04-01',
      time: '16:00:00',
      priority: 2
    },
    {
      task_id: 6,
      project_id: 1,
      task_name: 'Тестирование функциональности',
      description: 'Проверить работоспособность и правильность работы всех функций онлайн магазина.',
      status: 'in process',
      start_date: '2023-04-01',
      end_date: '2023-04-15',
      time: '11:00:00',
      priority: 1
    },
    {
      task_id: 7,
      project_id: 1,
      task_name: 'Оптимизация производительности',
      description: 'Улучшить производительность онлайн магазина для более быстрой загрузки страниц и обработки запросов.',
      status: 'new',
      start_date: '2023-04-15',
      end_date: '2023-05-15',
      time: '09:30:00',
      priority: 3
    },
    {
      task_id: 8,
      project_id: 1,
      task_name: 'Тестирование безопасности',
      description: 'Проверить систему на уязвимости и обеспечить высокий уровень безопасности данных покупателей.',
      status: 'planned',
      start_date: '2023-05-01',
      end_date: '2023-05-15',
      time: '14:00:00',
      priority: 2
    },
    {
        task_id: 9,
        project_id: 1,
        task_name: 'Проектирование базы данных',
        description: 'Разработать структуру базы данных для хранения информации о товарах, заказах и пользователях.',
        status: 'completed',
        start_date: '2023-02-01',
        end_date: '2023-02-15',
        time: '14:30:00',
        priority: 2
      },

      {
        task_id: 10,
        project_id: 1,
        task_name: 'Проектирование базы данных',
        description: 'Разработать структуру базы данных для хранения информации о товарах, заказах и пользователях.',
        status: 'completed',
        start_date: '2023-02-01',
        end_date: '2023-02-15',
        time: '14:30:00',
        priority: 2
      },
]