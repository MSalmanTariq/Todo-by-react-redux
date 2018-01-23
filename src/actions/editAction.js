export function edit(id,newTask) {
    return {
        type: "EDIT",
        id : id,
        value: newTask
    }
}
