import {TodoType} from "../../types/TodoType.ts";
import React, {CSSProperties, FC, memo} from "react";
import {Image, Text, Card} from "@mantine/core";

interface TodoListItemProps {
    item: TodoType;
}

export const TodoListItem: FC<TodoListItemProps> = memo(({item}) => {

    const style: CSSProperties | undefined = item.done ? {border: "1px solid green"} : undefined;

    return (
        <Card shadow="sm" padding="lg" radius="md" withBorder style={style}>
            <Card.Section>
                <Image
                    src="https://placehold.co/400x200"
                    height={200}
                    alt="No way!"
                />
            </Card.Section>

            <Text fw={500} size="lg" mt="md">
                {item.title}
            </Text>

            <Text size="sm" c="dimmed" mt="xs">
                {item.content}
            </Text>

        </Card>
    );
});