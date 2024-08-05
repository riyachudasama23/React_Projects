function ToDoItem() {
  let todoItem = "Watch Youtube";
  let todoDate = "20/2/2024";
  return (
    <>
      <div class="row rc-rows">
        <div class="col-6">{todoItem}</div>
        <div class="col-4">{todoDate}</div>
        <div class="col-2">
          <button type="button" class="btn btn-danger rc-btns">
            Delete
          </button>
        </div>
      </div>
    </>
  );
}

export default ToDoItem;
