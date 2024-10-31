import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3001"
})

export const getAllTask = async () => {
  try {
    const { data } = await api.get("/task");

    return data;
  } catch (err) {
    return [];
  }
}

export const createTask = async (description: string) => {
  try {
    const { data } = await api.post("/task/create", {
      description
    });

    return data;
  } catch (err) {
    return { err };
  }
}

export const deleteTask = async (id: string) => {
  try {
    const { data } = await api.delete(`/task/${id}`);

    return data;
  } catch (err) {
    return { err };
  }
}

export const updateTask = async (id: string, status: boolean) => {
  try {
    const { data } = await api.put(`/task/${id}`, {
      status: !status
    });

    return data;
  } catch (err) {
    return { err };
  }
} 