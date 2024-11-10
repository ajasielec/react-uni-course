import {TodoFormValues} from "../../types/TodoFormValues.ts";
import {useTodoForm} from "./hooks/useTodoForm.ts";
import {Button, Checkbox, Group, Paper, Stack, Textarea, TextInput} from "@mantine/core";

export const TodoForm = () => {
    const form = useTodoForm();

    const handleSubmit = (vals: TodoFormValues) => {
        console.log(vals);
    }

    return (
        <Paper shadow="xs" p="xl">
            <form onSubmit={form.onSubmit(handleSubmit)}>
                <Stack gap="lg">
                    <TextInput
                        withAsterisk
                        label="Title"
                        placeholder="Todo title"
                        {...form.getInputProps('title')}
                    />

                    <Textarea withAsterisk label="Description"
                              placeholder="Todo description"
                              {...form.getInputProps('description')}
                    />

                    <Checkbox
                        label="Done"
                        {...form.getInputProps('done', {type: 'checkbox'})}
                    />

                    <Group justify="flex-end" mt="md">
                        <Button type="submit" variant="light" color="cyan">Add</Button>
                    </Group>
                </Stack>
            </form>
        </Paper>
    )
}