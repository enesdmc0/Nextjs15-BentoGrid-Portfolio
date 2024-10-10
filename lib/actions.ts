"use server"
import { pb } from "@/lib/pb"
import { TodosType, TodoType } from "@/types"
import { revalidatePath } from "next/cache"

pb.autoCancellation(false)

const X_TOKEN = process.env.X_TOKEN || ""

const fetchData = async <T>(fetchFunction: () => Promise<T>, errorMessage: string): Promise<T> => {
    try {
        return await fetchFunction()
    } catch (error: any) {
        console.error(`${errorMessage}:`, error)
        throw new Error(`${errorMessage}: ${error.message || "Unknown error"}`)
    }
}


export const getTodos = async (): Promise<TodosType> => {
    return await fetchData(
        async () =>
            await pb.collection("todos").getList(1, 30, {
                headers: { x_token: X_TOKEN },
            }),
        "Failed to fetch filtered todos"
    )
}

export const updateTodo = async (id: string, status: string): Promise<TodoType> => {
    const updatedTodo = await fetchData(
        async () =>
            await pb.collection("todos").update(id, { status: `${status}` }, {
                headers: { x_token: X_TOKEN },
            }),
        "Failed to update todo"
    )

    revalidatePath("/")

    return updatedTodo as TodoType

}


export const wait = async (ms: number) => {
    return new Promise((resolve) => {
        setTimeout(resolve, ms);
    });
}
