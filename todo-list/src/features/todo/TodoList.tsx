import {SimpleGrid} from "@mantine/core";
import {TodoType} from "../../types/TodoType.ts";
import {TodoListItem} from "./TodoListItem.tsx";

const data: TodoType[] = [
    {
        id: 1,
        title: "Zrobić zakupy",
        content: "Mleko, jajka, ser",
        done: false,
    },
    {
        id: 2,
        title: "Zrobic pranie",
        content: "Pościel i ręczniki",
        done: false,
    },
    {
        id: 3,
        title: "React",
        content: "Zrobić tutorial nr 5",
        done: true,
    },
    {
        id: 4,
        title: "Sprawozdanie z Programowania Równoległego",
        content: "Lab 3,4,5, max. 10 stron",
        done: false,
    }
]

export const TodoList = () => {
    return (
        <div style={{width: '100%'}}>
            <SimpleGrid cols={{base: 1, sm: 2, lg: 3}}>
                {data.map((item) => <TodoListItem key={item.id} item={item}/>)}
            </SimpleGrid>
        </div>
    );
}