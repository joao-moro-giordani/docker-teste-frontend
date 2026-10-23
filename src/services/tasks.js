import {api} from "./api";


const unwrap = (response) => response.data?.data ?? response.data;

export async function listTasks({signal} = {}) {
    const response = await api.get("/tarefas", {signal});
    return unwrap(response);
}