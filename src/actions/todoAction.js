export function todo(task) {
    return {
        type: "TASK",
        value: {
            task : task
        }
    }
}
