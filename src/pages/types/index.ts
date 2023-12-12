export interface IEmployee {
    userId: number,
    firstName: string,
    lastName: string,
    position: string,
}

export interface ITask {
    task_id: number;
    project_id: number;
    task_name: string;
    description: string;
    status: string;
    start_date: string;
    end_date: string;
    time: string;
    priority: number;
  }