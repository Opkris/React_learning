import React from "react";
import TodoItem from "./TodoItem"
function MainContent() {

    return (
        <main>

            <div className={"todo-list"}>
                <TodoItem/>
                <TodoItem/>
                <TodoItem/>
                <TodoItem/>
                <TodoItem/>
            </div>

    </main>
    )

}

export default MainContent