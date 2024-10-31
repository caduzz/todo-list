import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3001"
})

export const getAllTask = async () => {
  try {
    const { data } = await api.get("/task");

    console.log(data)
    return data;
  } catch (err) {
    return { err };
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