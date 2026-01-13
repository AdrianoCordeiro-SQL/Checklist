import { SubHeading } from "../SubHeading";
import { ToDoItem } from "../ToDoItem";
import { ToDoList } from "../ToDoList";

export function TodoGroup ({ items, heading }) {
    return (
        <>
        <ToDoList>
            <SubHeading>{heading}</SubHeading>
            {items.map(function (t) {  
                return (
                  <ToDoItem
                    key={t.id}
                    item={t}
                  />
                );
              })}
          </ToDoList>
        </>
    )
}