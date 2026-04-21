import api from "@/shared/services/api";

export class TodoService {
  static baseUrl = "/todos";

  static async getTodos() {
    const response = await api.get(`${this.baseUrl}`);
    return response.data;
  }

  static async createTodo(name: string) {
    await api.post(`${this.baseUrl}`, { name });
  }

  static async updateTodo(id: string, name: string, status: boolean) {
    await api.put(`${this.baseUrl}/${id}`, { name, status });
  }

  static async deleteTodo(id: string) {
    await api.delete(`${this.baseUrl}/${id}`);
  }
}
